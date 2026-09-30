import React, { useState } from "react";

interface PromptItem {
  id: string;
  category: string;
  sentence: string;
  phonetics: string;
  level: string;
}

const SAMPLE_PROMPTS: PromptItem[] = [
  {
    id: "1",
    category: "Hospitality & Greetings",
    sentence:
      "Welcome to the Grand Horizon Resort. How may I assist you today?",
    phonetics: "/ˈwɛlkəm tu ðə ɡrænd həˈraɪzən rɪˈzɔːrt/",
    level: "B1 Intermediate",
  },
  {
    id: "2",
    category: "Academic Discussion",
    sentence:
      "Photosynthesis is the biological process by which green plants synthesize nutrients.",
    phonetics: "/ˌfoʊtoʊˈsɪnθəsɪs ɪz ðə ˌbaɪəˈlɑːdʒɪkəl ˈprɑːsɛs/",
    level: "B2 Upper Intermediate",
  },
  {
    id: "3",
    category: "Corporate Meeting",
    sentence:
      "Let us analyze the quarterly key performance indicators and strategic initiatives.",
    phonetics: "/lɛt ʌs ˈænəˌlaɪz ðə ˈkwɔːrtərli kiː pərˈfɔːrməns/",
    level: "C1 Advanced",
  },
];

export const AILabSimulator: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem>(
    SAMPLE_PROMPTS[0],
  );
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    fluency: number;
    pronunciation: number;
    accuracy: number;
    feedback: string;
  } | null>(null);

  const handleSimulateSpeech = () => {
    setIsRecording(true);
    setResult(null);

    // Simulate 2 seconds of listening & AI neural evaluation
    setTimeout(() => {
      setIsRecording(false);
      setResult({
        score: 94,
        fluency: 92,
        pronunciation: 96,
        accuracy: 95,
        feedback:
          "Excellent rhythm and intonation! Native-like stress on primary syllables.",
      });
    }, 1800);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0b1329 0%, #1e293b 100%)",
        color: "#fff",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(56, 189, 248, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "12px",
              background: "rgba(56, 189, 248, 0.15)",
              color: "#38bdf8",
              padding: "4px 12px",
              borderRadius: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Interactive AI Lab Demo
          </span>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "8px",
              color: "#fff",
            }}
          >
            Real-Time Speech Assessment
          </h4>
        </div>
        <div style={{ fontSize: "13px", color: "#94a3b8" }}>
          CEFR Level:{" "}
          <strong style={{ color: "#38bdf8" }}>{selectedPrompt.level}</strong>
        </div>
      </div>

      {/* Select Practice Prompt */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            fontSize: "13px",
            color: "#cbd5e1",
            marginBottom: "8px",
            display: "block",
          }}
        >
          Select a sample speech module:
        </label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {SAMPLE_PROMPTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSelectedPrompt(p);
                setResult(null);
              }}
              style={{
                background:
                  selectedPrompt.id === p.id
                    ? "#2563eb"
                    : "rgba(255,255,255,0.08)",
                color: "#fff",
                border:
                  selectedPrompt.id === p.id
                    ? "1px solid #60a5fa"
                    : "1px solid rgba(255,255,255,0.1)",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              {p.category}
            </button>
          ))}
        </div>
      </div>

      {/* Target Sentence Box */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          borderRadius: "14px",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#f0f3ff",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          "{selectedPrompt.sentence}"
        </p>
        <div
          style={{
            fontSize: "13px",
            color: "#38bdf8",
            marginTop: "8px",
            fontFamily: "monospace",
          }}
        >
          Phonetics: {selectedPrompt.phonetics}
        </div>
      </div>

      {/* Interactive Controls */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          type="button"
          onClick={handleSimulateSpeech}
          disabled={isRecording}
          style={{
            background: isRecording
              ? "linear-gradient(135deg, #e53935 0%, #d81b60 100%)"
              : "linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)",
            border: "none",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: isRecording
              ? "0 0 25px rgba(229,57,53,0.6)"
              : "0 10px 25px rgba(37,99,235,0.4)",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s",
          }}
        >
          <i
            className={`fa ${isRecording ? "fa-microphone fa-spin" : "fa-microphone"}`}
          ></i>
          {isRecording
            ? "Analyzing Speech Waves..."
            : "Test AI Pronunciation Evaluation"}
        </button>
      </div>

      {/* Analysis Results Display */}
      {result && (
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid rgba(56,189,248,0.3)",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
              gap: "15px",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{ fontSize: "24px", fontWeight: 800, color: "#4ade80" }}
              >
                {result.score}%
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                Overall Score
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{ fontSize: "24px", fontWeight: 800, color: "#38bdf8" }}
              >
                {result.pronunciation}%
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                Pronunciation
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{ fontSize: "24px", fontWeight: 800, color: "#818cf8" }}
              >
                {result.fluency}%
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                Fluency
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{ fontSize: "24px", fontWeight: 800, color: "#34d399" }}
              >
                {result.accuracy}%
              </div>
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                Accuracy
              </div>
            </div>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#e0e0e0",
              textAlign: "center",
            }}
          >
            💡 <strong style={{ color: "#38bdf8" }}>AI Feedback:</strong>{" "}
            {result.feedback}
          </p>
        </div>
      )}
    </div>
  );
};
