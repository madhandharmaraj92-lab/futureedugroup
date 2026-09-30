import React, { useEffect, useRef } from "react";

interface FloatingEducationBackgroundProps {
  density?: "low" | "medium" | "high" | "ultra";
  className?: string;
  interactive?: boolean;
  fixed?: boolean;
}

interface EduItem {
  id: number;
  type:
    | "book"
    | "openBook"
    | "notebook"
    | "pen"
    | "pencil"
    | "gradCap"
    | "lightbulb"
    | "ruler"
    | "flask"
    | "paperPlane"
    | "atom"
    | "sparkle";
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  baseRotation: number;
  rotSpeed: number;
  phase: number;
  speed: number;
  depth: number; // 0.2 to 1.0 for parallax
  color: string;
  accentColor: string;
  opacity: number;
}

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

export const FloatingEducationBackground: React.FC<
  FloatingEducationBackgroundProps
> = ({
  density = "medium",
  className = "",
  interactive = true,
  fixed = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    active: boolean;
    isMoving: boolean;
  }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
    isMoving: false,
  });
  const itemsRef = useRef<EduItem[]>([]);
  const particlesRef = useRef<TrailParticle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const lastMoveTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = fixed
      ? window.innerWidth
      : canvas.parentElement?.clientWidth || window.innerWidth;
    let height = fixed
      ? window.innerHeight
      : canvas.parentElement?.clientHeight || window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = fixed
        ? window.innerWidth
        : canvas.parentElement?.clientWidth || window.innerWidth;
      height = fixed
        ? window.innerHeight
        : canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initItems();
    };

    const count =
      density === "ultra"
        ? width < 768
          ? 25
          : 46
        : density === "high"
          ? width < 768
            ? 20
            : 34
          : density === "low"
            ? 14
            : 24;

    const palette = [
      { primary: "#2563eb", secondary: "#93c5fd" }, // Royal Blue
      { primary: "#0284c7", secondary: "#bae6fd" }, // Sky / Cyan Blue
      { primary: "#3b82f6", secondary: "#dbeafe" }, // Bright Blue
      { primary: "#4f46e5", secondary: "#c7d2fe" }, // Indigo
      { primary: "#0d9488", secondary: "#99f6e4" }, // Teal
      { primary: "#6366f1", secondary: "#e0e7ff" }, // Slate Indigo
      { primary: "#f59e0b", secondary: "#fde68a" }, // Golden Amber accent
    ];

    const types: EduItem["type"][] = [
      "openBook",
      "book",
      "notebook",
      "pen",
      "pencil",
      "gradCap",
      "lightbulb",
      "ruler",
      "flask",
      "paperPlane",
      "atom",
      "sparkle",
    ];

    const initItems = () => {
      const newItems: EduItem[] = [];
      const cols = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))));
      const rows = Math.ceil(count / cols);
      const cellW = width / cols;
      const cellH = height / rows;

      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (idx >= count) break;
          const p = palette[idx % palette.length];
          const type = types[idx % types.length];
          const depth = 0.35 + Math.random() * 0.65; // depth determines scale, parallax & speed
          const size =
            (type === "sparkle"
              ? 14
              : type === "gradCap" || type === "openBook"
                ? 34
                : 26) *
            (0.75 + depth * 0.45);

          // Distribute across grid with jitter
          const x = Math.max(
            30,
            Math.min(width - 30, (c + 0.2 + Math.random() * 0.6) * cellW),
          );
          const y = Math.max(
            30,
            Math.min(height - 30, (r + 0.2 + Math.random() * 0.6) * cellH),
          );

          newItems.push({
            id: idx,
            type,
            x,
            y,
            baseX: x,
            baseY: y,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            size,
            rotation: (Math.random() - 0.5) * 0.6,
            baseRotation: (Math.random() - 0.5) * 0.6,
            rotSpeed: (Math.random() - 0.5) * 0.008,
            phase: Math.random() * Math.PI * 2,
            speed: 0.35 + Math.random() * 0.55,
            depth,
            color: p.primary,
            accentColor: p.secondary,
            opacity: fixed ? 0.16 + depth * 0.24 : 0.18 + depth * 0.32,
          });
          idx++;
        }
      }
      itemsRef.current = newItems;
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    initItems();

    // Mouse & Touch tracking
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseRef.current.targetX = clientX;
      mouseRef.current.targetY = clientY;
      mouseRef.current.active = true;
      mouseRef.current.isMoving = true;
      lastMoveTime.current = Date.now();

      // Emit floating trail particles near cursor
      if (Math.random() > 0.45) {
        particlesRef.current.push({
          x: clientX + (Math.random() - 0.5) * 20,
          y: clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4 - 0.4,
          size: 2 + Math.random() * 3,
          alpha: 0.65,
          color: Math.random() > 0.5 ? "#38bdf8" : "#60a5fa",
          life: 0,
          maxLife: 30 + Math.random() * 20,
        });
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    }

    // DRAWING FUNCTIONS FOR 2D ILLUSTRATIONS
    const drawOpenBook = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const w = size;
      const h = size * 0.65;
      c.save();
      // Book spine and pages
      c.strokeStyle = color;
      c.fillStyle = "#ffffff";
      c.lineWidth = 2;
      c.lineJoin = "round";
      c.lineCap = "round";

      // Left page curve
      c.beginPath();
      c.moveTo(0, h * 0.4);
      c.quadraticCurveTo(-w * 0.5, h * 0.35, -w * 0.9, -h * 0.4);
      c.lineTo(-w * 0.9, h * 0.3);
      c.quadraticCurveTo(-w * 0.5, h * 0.9, 0, h * 0.9);
      c.closePath();
      c.fill();
      c.stroke();

      // Right page curve
      c.beginPath();
      c.moveTo(0, h * 0.4);
      c.quadraticCurveTo(w * 0.5, h * 0.35, w * 0.9, -h * 0.4);
      c.lineTo(w * 0.9, h * 0.3);
      c.quadraticCurveTo(w * 0.5, h * 0.9, 0, h * 0.9);
      c.closePath();
      c.fill();
      c.stroke();

      // Spine center fold
      c.beginPath();
      c.moveTo(0, -h * 0.35);
      c.lineTo(0, h * 0.95);
      c.strokeStyle = color;
      c.stroke();

      // Bookmark ribbon
      c.beginPath();
      c.moveTo(0, -h * 0.35);
      c.quadraticCurveTo(w * 0.15, 0, w * 0.2, h * 1.1);
      c.strokeStyle = "#f59e0b";
      c.lineWidth = 2.5;
      c.stroke();

      // Text lines on pages
      c.strokeStyle = accent;
      c.lineWidth = 1.5;
      // Left lines
      c.beginPath();
      c.moveTo(-w * 0.75, -h * 0.1);
      c.lineTo(-w * 0.2, -h * 0.05);
      c.moveTo(-w * 0.75, h * 0.15);
      c.lineTo(-w * 0.2, h * 0.2);
      c.moveTo(-w * 0.75, h * 0.4);
      c.lineTo(-w * 0.3, h * 0.45);
      // Right lines
      c.moveTo(w * 0.2, -h * 0.05);
      c.lineTo(w * 0.75, -h * 0.1);
      c.moveTo(w * 0.2, h * 0.2);
      c.lineTo(w * 0.75, h * 0.15);
      c.moveTo(w * 0.2, h * 0.45);
      c.lineTo(w * 0.65, h * 0.4);
      c.stroke();

      c.restore();
    };

    const drawStackedBook = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const w = size * 0.8;
      const h = size * 0.55;
      c.save();
      c.lineWidth = 2;
      c.lineJoin = "round";

      // Bottom book
      c.fillStyle = accent;
      c.strokeStyle = color;
      c.beginPath();
      c.roundRect(-w * 0.6, 0, w * 1.2, h * 0.45, 3);
      c.fill();
      c.stroke();

      // Top Book (angled)
      c.rotate(-0.15);
      c.fillStyle = "#ffffff";
      c.beginPath();
      c.roundRect(-w * 0.55, -h * 0.6, w * 1.1, h * 0.45, 3);
      c.fill();
      c.stroke();

      // Spine stripe
      c.fillStyle = color;
      c.fillRect(-w * 0.55, -h * 0.6, w * 0.25, h * 0.45);
      c.restore();
    };

    const drawNotebook = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const w = size * 0.7;
      const h = size * 0.9;
      c.save();
      c.lineWidth = 2;

      // Cover / Sheet
      c.fillStyle = "#ffffff";
      c.strokeStyle = color;
      c.beginPath();
      c.roundRect(-w * 0.5, -h * 0.5, w, h, 6);
      c.fill();
      c.stroke();

      // Spiral wire rings along left
      c.strokeStyle = "#64748b";
      c.lineWidth = 1.8;
      const ringCount = 5;
      for (let i = 0; i < ringCount; i++) {
        const ry = -h * 0.35 + (i * h * 0.7) / (ringCount - 1);
        c.beginPath();
        c.ellipse(-w * 0.5, ry, 3.5, 2, 0, 0, Math.PI * 2);
        c.stroke();
      }

      // Notes content lines
      c.strokeStyle = accent;
      c.lineWidth = 1.5;
      c.beginPath();
      c.moveTo(-w * 0.25, -h * 0.25);
      c.lineTo(w * 0.35, -h * 0.25);
      c.moveTo(-w * 0.25, -h * 0.05);
      c.lineTo(w * 0.35, -h * 0.05);
      c.moveTo(-w * 0.25, h * 0.15);
      c.lineTo(w * 0.35, h * 0.15);
      c.moveTo(-w * 0.25, h * 0.35);
      c.lineTo(w * 0.15, h * 0.35);
      c.stroke();

      // Checked tick badge
      c.strokeStyle = "#10b981";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(-w * 0.38, -h * 0.26);
      c.lineTo(-w * 0.32, -h * 0.2);
      c.lineTo(-w * 0.26, -h * 0.3);
      c.stroke();

      c.restore();
    };

    const drawPen = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const len = size * 1.1;
      const thick = size * 0.18;
      c.save();
      c.lineWidth = 1.8;

      // Pen Barrel
      c.fillStyle = color;
      c.strokeStyle = "#0f172a";
      c.beginPath();
      c.moveTo(-thick * 0.5, -len * 0.4);
      c.lineTo(thick * 0.5, -len * 0.4);
      c.lineTo(thick * 0.5, len * 0.2);
      c.lineTo(-thick * 0.5, len * 0.2);
      c.closePath();
      c.fill();
      c.stroke();

      // Pen Grip
      c.fillStyle = accent;
      c.beginPath();
      c.moveTo(-thick * 0.5, len * 0.2);
      c.lineTo(thick * 0.5, len * 0.2);
      c.lineTo(thick * 0.3, len * 0.38);
      c.lineTo(-thick * 0.3, len * 0.38);
      c.closePath();
      c.fill();
      c.stroke();

      // Metallic Nib
      c.fillStyle = "#e2e8f0";
      c.beginPath();
      c.moveTo(-thick * 0.3, len * 0.38);
      c.lineTo(thick * 0.3, len * 0.38);
      c.lineTo(0, len * 0.55);
      c.closePath();
      c.fill();
      c.stroke();

      // Pen Cap Top / Clip
      c.fillStyle = "#f59e0b";
      c.beginPath();
      c.arc(0, -len * 0.45, thick * 0.5, Math.PI, 0);
      c.fill();
      c.stroke();

      // Clip arm
      c.beginPath();
      c.moveTo(thick * 0.5, -len * 0.42);
      c.lineTo(thick * 0.8, -len * 0.42);
      c.lineTo(thick * 0.8, -len * 0.1);
      c.strokeStyle = "#f59e0b";
      c.lineWidth = 2;
      c.stroke();

      c.restore();
    };

    const drawPencil = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
    ) => {
      const len = size * 1.0;
      const w = size * 0.2;
      c.save();
      c.lineWidth = 1.8;

      // Wooden body
      c.fillStyle = "#f59e0b";
      c.strokeStyle = "#0f172a";
      c.beginPath();
      c.rect(-w * 0.5, -len * 0.35, w, len * 0.65);
      c.fill();
      c.stroke();

      // Sharpened wood cone
      c.fillStyle = "#fed7aa";
      c.beginPath();
      c.moveTo(-w * 0.5, len * 0.3);
      c.lineTo(w * 0.5, len * 0.3);
      c.lineTo(0, len * 0.55);
      c.closePath();
      c.fill();
      c.stroke();

      // Graphite tip
      c.fillStyle = "#1e293b";
      c.beginPath();
      c.moveTo(-w * 0.2, len * 0.46);
      c.lineTo(w * 0.2, len * 0.46);
      c.lineTo(0, len * 0.55);
      c.closePath();
      c.fill();

      // Eraser top
      c.fillStyle = "#f43f5e";
      c.beginPath();
      c.roundRect(-w * 0.5, -len * 0.5, w, len * 0.15, [4, 4, 0, 0]);
      c.fill();
      c.stroke();

      // Metal ferrule ring
      c.fillStyle = "#cbd5e1";
      c.fillRect(-w * 0.5, -len * 0.35, w, len * 0.08);
      c.strokeRect(-w * 0.5, -len * 0.35, w, len * 0.08);

      c.restore();
    };

    const drawGradCap = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
    ) => {
      const w = size * 0.9;
      const h = size * 0.55;
      c.save();
      c.lineWidth = 2;
      c.lineJoin = "round";

      // Cap Under-skull cap
      c.fillStyle = "#1e293b";
      c.strokeStyle = "#0f172a";
      c.beginPath();
      c.ellipse(0, h * 0.25, w * 0.35, h * 0.3, 0, 0, Math.PI);
      c.fill();
      c.stroke();

      // Diamond Mortarboard Top
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(0, -h * 0.45);
      c.lineTo(w * 0.55, 0);
      c.lineTo(0, h * 0.45);
      c.lineTo(-w * 0.55, 0);
      c.closePath();
      c.fill();
      c.stroke();

      // Center button
      c.fillStyle = "#f59e0b";
      c.beginPath();
      c.arc(0, 0, 3.5, 0, Math.PI * 2);
      c.fill();

      // Hanging Tassel
      c.strokeStyle = "#f59e0b";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(w * 0.35, h * 0.2, w * 0.45, h * 0.6);
      c.stroke();

      // Tassel fringe brush
      c.fillStyle = "#f59e0b";
      c.beginPath();
      c.arc(w * 0.45, h * 0.65, 4, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const drawLightbulb = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const r = size * 0.35;
      c.save();
      c.lineWidth = 2;

      // Glow halo
      const grad = c.createRadialGradient(0, -r * 0.2, 2, 0, -r * 0.2, r * 1.8);
      grad.addColorStop(0, "rgba(254, 240, 138, 0.4)");
      grad.addColorStop(1, "rgba(254, 240, 138, 0)");
      c.fillStyle = grad;
      c.beginPath();
      c.arc(0, -r * 0.2, r * 1.8, 0, Math.PI * 2);
      c.fill();

      // Glass bulb outline
      c.fillStyle = "#fffbeb";
      c.strokeStyle = "#eab308";
      c.beginPath();
      c.arc(0, -r * 0.3, r, 0.7 * Math.PI, 0.3 * Math.PI, false);
      c.lineTo(r * 0.45, r * 0.7);
      c.lineTo(-r * 0.45, r * 0.7);
      c.closePath();
      c.fill();
      c.stroke();

      // Inner filament coil
      c.strokeStyle = "#f59e0b";
      c.lineWidth = 1.8;
      c.beginPath();
      c.moveTo(-r * 0.25, r * 0.4);
      c.lineTo(-r * 0.15, -r * 0.3);
      c.lineTo(0, -r * 0.1);
      c.lineTo(r * 0.15, -r * 0.3);
      c.lineTo(r * 0.25, r * 0.4);
      c.stroke();

      // Metallic socket base
      c.fillStyle = "#94a3b8";
      c.strokeStyle = "#475569";
      c.beginPath();
      c.roundRect(-r * 0.4, r * 0.7, r * 0.8, r * 0.4, 2);
      c.fill();
      c.stroke();

      c.restore();
    };

    const drawRuler = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
    ) => {
      const w = size * 0.9;
      const h = size * 0.32;
      c.save();
      c.lineWidth = 2;

      c.fillStyle = "#ffffff";
      c.strokeStyle = color;
      c.beginPath();
      c.roundRect(-w * 0.5, -h * 0.5, w, h, 4);
      c.fill();
      c.stroke();

      // Tick marks along edge
      c.strokeStyle = color;
      c.lineWidth = 1.5;
      const ticks = 7;
      for (let i = 0; i < ticks; i++) {
        const tx = -w * 0.4 + (i * w * 0.8) / (ticks - 1);
        const tLen = i % 2 === 0 ? h * 0.4 : h * 0.25;
        c.beginPath();
        c.moveTo(tx, -h * 0.5);
        c.lineTo(tx, -h * 0.5 + tLen);
        c.stroke();
      }
      c.restore();
    };

    const drawFlask = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const w = size * 0.7;
      const h = size * 0.85;
      c.save();
      c.lineWidth = 2;

      // Flask glass contour
      c.fillStyle = "#ffffff";
      c.strokeStyle = color;
      c.beginPath();
      c.moveTo(-w * 0.2, -h * 0.45);
      c.lineTo(w * 0.2, -h * 0.45);
      c.lineTo(w * 0.2, -h * 0.15);
      c.lineTo(w * 0.55, h * 0.4);
      c.quadraticCurveTo(w * 0.55, h * 0.48, w * 0.4, h * 0.48);
      c.lineTo(-w * 0.4, h * 0.48);
      c.quadraticCurveTo(-w * 0.55, h * 0.48, -w * 0.55, h * 0.4);
      c.lineTo(-w * 0.2, -h * 0.15);
      c.closePath();
      c.fill();
      c.stroke();

      // Liquid filled section
      c.fillStyle = accent;
      c.beginPath();
      c.moveTo(-w * 0.45, h * 0.1);
      c.quadraticCurveTo(0, h * 0.02, w * 0.45, h * 0.1);
      c.lineTo(w * 0.4, h * 0.48);
      c.lineTo(-w * 0.4, h * 0.48);
      c.closePath();
      c.fill();

      // Tiny bubbles
      c.fillStyle = "#ffffff";
      c.beginPath();
      c.arc(-w * 0.15, h * 0.25, 2.5, 0, Math.PI * 2);
      c.arc(w * 0.18, h * 0.2, 3, 0, Math.PI * 2);
      c.arc(0, h * 0.35, 2, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const drawPaperPlane = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
    ) => {
      const s = size * 0.8;
      c.save();
      c.lineWidth = 1.8;
      c.lineJoin = "round";

      // Left wing
      c.fillStyle = "#ffffff";
      c.strokeStyle = color;
      c.beginPath();
      c.moveTo(s * 0.6, 0);
      c.lineTo(-s * 0.5, -s * 0.45);
      c.lineTo(-s * 0.2, 0);
      c.closePath();
      c.fill();
      c.stroke();

      // Right wing (darker shade for depth)
      c.fillStyle = "#e2e8f0";
      c.beginPath();
      c.moveTo(s * 0.6, 0);
      c.lineTo(-s * 0.5, s * 0.45);
      c.lineTo(-s * 0.2, 0);
      c.closePath();
      c.fill();
      c.stroke();

      // Center crease line
      c.beginPath();
      c.moveTo(s * 0.6, 0);
      c.lineTo(-s * 0.2, 0);
      c.strokeStyle = color;
      c.stroke();

      c.restore();
    };

    const drawAtom = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
      accent: string,
    ) => {
      const r = size * 0.45;
      c.save();
      c.lineWidth = 1.6;
      c.strokeStyle = color;

      // Orbit 1
      c.beginPath();
      c.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
      c.stroke();

      // Orbit 2
      c.beginPath();
      c.ellipse(0, 0, r, r * 0.35, Math.PI / 3, 0, Math.PI * 2);
      c.stroke();

      // Orbit 3
      c.beginPath();
      c.ellipse(0, 0, r, r * 0.35, -Math.PI / 3, 0, Math.PI * 2);
      c.stroke();

      // Nucleus
      c.fillStyle = "#f59e0b";
      c.beginPath();
      c.arc(0, 0, 4, 0, Math.PI * 2);
      c.fill();

      // Electrons
      c.fillStyle = accent;
      c.beginPath();
      c.arc(r * 0.9, 0, 3, 0, Math.PI * 2);
      c.arc(-r * 0.45, r * 0.7, 3, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const drawSparkle = (
      c: CanvasRenderingContext2D,
      size: number,
      color: string,
    ) => {
      const r = size * 0.6;
      c.save();
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(0, -r);
      c.quadraticCurveTo(0, 0, r, 0);
      c.quadraticCurveTo(0, 0, 0, r);
      c.quadraticCurveTo(0, 0, -r, 0);
      c.quadraticCurveTo(0, 0, 0, -r);
      c.closePath();
      c.fill();
      c.restore();
    };

    // ANIMATION LOOP
    const render = () => {
      timeRef.current += 0.015;
      const t = timeRef.current;

      // Smooth mouse lerp
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (Date.now() - lastMoveTime.current > 1500) {
        mouse.isMoving = false;
      }

      ctx.clearRect(0, 0, width, height);

      // Render & update trail particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const progress = p.life / p.maxLife;
        const alpha = Math.max(0, (1 - progress) * p.alpha);

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // Center coordinates for parallax
      const centerX = width / 2;
      const centerY = height / 2;
      const mouseNormX = (mouse.x - centerX) / (centerX || 1);
      const mouseNormY = (mouse.y - centerY) / (centerY || 1);

      // Render floating educational items
      const items = itemsRef.current;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // 1. Natural Sinusoidal Drift
        const waveX = Math.sin(t * item.speed + item.phase) * (18 * item.depth);
        const waveY =
          Math.cos(t * item.speed * 0.8 + item.phase) * (22 * item.depth);

        // 2. Parallax mouse reaction based on depth layer
        const parallaxX = mouseNormX * (55 * item.depth);
        const parallaxY = mouseNormY * (45 * item.depth);

        // 3. Proximity repulsion & dynamic magnetic flow near cursor
        let repelX = 0;
        let repelY = 0;
        let extraRot = 0;

        if (mouse.active) {
          const dx = item.baseX + waveX + parallaxX - mouse.x;
          const dy = item.baseY + waveY + parallaxY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 140;

          if (dist < repelRadius && dist > 0) {
            const force = (1 - dist / repelRadius) * (40 * item.depth);
            const angle = Math.atan2(dy, dx);
            repelX = Math.cos(angle) * force;
            repelY = Math.sin(angle) * force;
            extraRot = Math.sin(angle) * 0.3 * (1 - dist / repelRadius);
          }
        }

        const renderX = item.baseX + waveX + parallaxX + repelX;
        const renderY = item.baseY + waveY + parallaxY + repelY;
        const currentRot =
          item.baseRotation +
          Math.sin(t * item.rotSpeed * 100 + item.phase) * 0.2 +
          extraRot;

        // Render item illustration
        ctx.save();
        ctx.translate(renderX, renderY);
        ctx.rotate(currentRot);
        ctx.globalAlpha = item.opacity;

        // Soft drop-shadow for 2D illustration pop
        ctx.shadowColor = "rgba(15, 23, 42, 0.12)";
        ctx.shadowBlur = 8 * item.depth;
        ctx.shadowOffsetX = 2 * item.depth;
        ctx.shadowOffsetY = 4 * item.depth;

        switch (item.type) {
          case "openBook":
            drawOpenBook(ctx, item.size, item.color, item.accentColor);
            break;
          case "book":
            drawStackedBook(ctx, item.size, item.color, item.accentColor);
            break;
          case "notebook":
            drawNotebook(ctx, item.size, item.color, item.accentColor);
            break;
          case "pen":
            drawPen(ctx, item.size, item.color, item.accentColor);
            break;
          case "pencil":
            drawPencil(ctx, item.size, item.color);
            break;
          case "gradCap":
            drawGradCap(ctx, item.size, item.color);
            break;
          case "lightbulb":
            drawLightbulb(ctx, item.size, item.color, item.accentColor);
            break;
          case "ruler":
            drawRuler(ctx, item.size, item.color);
            break;
          case "flask":
            drawFlask(ctx, item.size, item.color, item.accentColor);
            break;
          case "paperPlane":
            drawPaperPlane(ctx, item.size, item.color);
            break;
          case "atom":
            drawAtom(ctx, item.size, item.color, item.accentColor);
            break;
          case "sparkle":
            drawSparkle(ctx, item.size, item.color);
            break;
          default:
            drawOpenBook(ctx, item.size, item.color, item.accentColor);
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [density, interactive, fixed]);

  return (
    <div
      className={`floating-education-background ${className}`}
      style={{
        position: fixed ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: fixed ? "100vw" : "100%",
        height: fixed ? "100vh" : "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: fixed ? 0 : 0,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
};
