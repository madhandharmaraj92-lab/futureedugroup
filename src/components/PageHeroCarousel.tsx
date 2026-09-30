"use client";

import React, { useEffect, useState } from "react";

type HeroVariant =
  | "home"
  | "tourism"
  | "edu"
  | "gen"
  | "about"
  | "services"
  | "contact"
  | "gallery";

interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: string;
}

const slides: Record<HeroVariant, HeroSlide[]> = {
  home: [
    {
      eyebrow: "Future Edu Group",
      title: "Education that opens bright futures.",
      description:
        "Industry-aligned learning, trusted guidance and practical pathways for every ambition.",
      image: "/assets/images/team-member-01.jpg",
      accent: "#2376b7",
    },
    {
      eyebrow: "Three pathways, one future",
      title: "Learn. Experience. Explore.",
      description:
        "Hospitality careers, higher education guidance and school solutions under one trusted group.",
      image: "/assets/images/courses-01.jpg",
      accent: "#cba23e",
    },
    {
      eyebrow: "Built for progress",
      title: "Skills, confidence and opportunity.",
      description:
        "Helping students and institutions take meaningful next steps with clarity.",
      image: "/assets/images/video-thumb.jpg",
      accent: "#653665",
    },
  ],
  tourism: [
    {
      eyebrow: "Future Academy",
      title: "Shape a global hospitality career.",
      description:
        "Practical training for hotels, travel, tourism, aviation and guest-experience careers.",
      image: "/assets/images/courses-02.jpg",
      accent: "#d59b27",
    },
    {
      eyebrow: "Learn beyond the classroom",
      title: "Experience the world of hospitality.",
      description:
        "Professional grooming, service skills and industry exposure for ambitious learners.",
      image: "/assets/images/video-thumb.jpg",
      accent: "#0ea5e9",
    },
  ],
  edu: [
    {
      eyebrow: "Future Edu Solutions",
      title: "Guidance for every academic next step.",
      description:
        "Personalised admission support for students and working professionals.",
      image: "/assets/images/team-member-02.jpg",
      accent: "#d59b27",
    },
    {
      eyebrow: "Recognised pathways",
      title: "Turn your degree goal into a plan.",
      description:
        "Clear counselling, documentation support and a learner-first experience.",
      image: "/assets/images/courses-03.jpg",
      accent: "#0ea5e9",
    },
  ],
  gen: [
    {
      eyebrow: "Future Gen Learning",
      title: "Build stronger foundations today.",
      description:
        "IIT foundation, AI learning and English communication solutions for schools.",
      image: "/assets/images/courses-04.jpg",
      accent: "#16a34a",
    },
    {
      eyebrow: "Future-ready classrooms",
      title: "Make learning engaging and measurable.",
      description:
        "Content, assessment and learning tools designed for student confidence.",
      image: "/assets/images/team-member-03.jpg",
      accent: "#d59b27",
    },
  ],
  about: [
    {
      eyebrow: "Our story",
      title: "Better education. Brighter possibilities.",
      description:
        "Future Edu Group connects ambition with practical learning and career opportunity.",
      image: "/assets/images/team-member-04.jpg",
      accent: "#0ea5e9",
    },
    {
      eyebrow: "Our purpose",
      title: "Help every learner move forward.",
      description:
        "A learner-first group built around expertise, support and real-world outcomes.",
      image: "/assets/images/video-thumb.jpg",
      accent: "#d59b27",
    },
  ],
  services: [
    {
      eyebrow: "What we offer",
      title: "Education solutions with real direction.",
      description:
        "A colourful mix of career training, admission guidance and school learning solutions.",
      image: "/assets/images/courses-02.jpg",
      accent: "#0ea5e9",
    },
    {
      eyebrow: "One trusted group",
      title: "Made for learners, professionals and schools.",
      description:
        "Flexible educational services for every stage of the journey.",
      image: "/assets/images/team-member-05.jpg",
      accent: "#16a34a",
    },
  ],
  contact: [
    {
      eyebrow: "Let’s talk",
      title: "Your next step starts with a conversation.",
      description:
        "Speak with our team for admissions, school solutions and career guidance.",
      image: "/assets/images/team-member-01.jpg",
      accent: "#d59b27",
    },
    {
      eyebrow: "We are here to help",
      title: "Clear answers. Supportive guidance.",
      description:
        "Connect with Future Edu Group across Bangalore and our branch locations.",
      image: "/assets/images/video-thumb.jpg",
      accent: "#0ea5e9",
    },
  ],
  gallery: [
    {
      eyebrow: "Student gallery",
      title: "Moments of learning and growth.",
      description:
        "A glimpse of the experiences, support and confidence we nurture every day.",
      image: "/assets/images/courses-01.jpg",
      accent: "#16a34a",
    },
    {
      eyebrow: "Our community",
      title: "Every journey deserves to be celebrated.",
      description:
        "See the people and learning environments behind Future Edu Group.",
      image: "/assets/images/team-member-03.jpg",
      accent: "#d59b27",
    },
  ],
};

export const PageHeroCarousel: React.FC<{ variant: HeroVariant }> = ({
  variant,
}) => {
  const [active, setActive] = useState(0);
  const pageSlides = slides[variant];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % pageSlides.length),
      4800,
    );
    return () => window.clearInterval(timer);
  }, [pageSlides.length]);

  return (
    <section className="page-hero-carousel" aria-label="Featured overview">
      {pageSlides.map((slide, index) => (
        <article
          className={`page-hero-slide ${index === active ? "is-active" : ""}`}
          style={{ "--hero-accent": slide.accent } as React.CSSProperties}
          key={slide.title}
          aria-hidden={index !== active}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="page-hero-copy">
                  <span>{slide.eyebrow}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="page-hero-notes">
                    <b>Industry-focused learning</b>
                    <b>Personalised guidance</b>
                    <b>Future-ready outcomes</b>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="page-hero-art">
                  <img src={slide.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
