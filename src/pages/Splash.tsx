import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const punchLettersRef = useRef<HTMLSpanElement[]>([]);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Preparation: Setup initial states
    gsap.set([...punchLettersRef.current], {
      opacity: 0,
      scale: 0,
    });
    gsap.set(dotRef.current, {
      opacity: 0,
      scale: 0,
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    });

    // Setup and Initial Reveal
    tl.to([...punchLettersRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out",
    }).to({}, { duration: 0.7 }); // Hold

    // Phase 1: Subtitle Exit & Dot Transformation (Starts at ~1.3s)
    const pLetter = punchLettersRef.current[0];
    const unchLetters = punchLettersRef.current.slice(1);

    // Action A & B: "unch" letters collapse to center
    tl.to(
      unchLetters,
      {
        opacity: 0,
        scale: 0,
        x: (index, target) => {
          const rect = target.getBoundingClientRect();
          return window.innerWidth / 2 - rect.left - rect.width / 2;
        },
        y: (index, target) => {
          const rect = target.getBoundingClientRect();
          return window.innerHeight / 2 - rect.top - rect.height / 2;
        },
        duration: 0.5,
        stagger: {
          each: 0.02,
          from: "end",
        },
        ease: "power2.in",
      },
      "1.3"
    );

    // Action C: Dot reveals at center and rolls back to P
    tl.to(
      dotRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      },
      "1.3"
    ).to(
      dotRef.current,
      {
        x: () => {
          const pRect = pLetter.getBoundingClientRect();
          const centerX = window.innerWidth / 2;
          // Calculate distance from center to just right of P
          return pRect.right - centerX + 8;
        },
        duration: 0.5,
        ease: "power2.inOut",
      },
      "1.5"
    );

    // Phase 2: Final Convergence and Centralization (Starts at ~1.8s)
    // Move both P and dot together to center the signature
    tl.to(
      [pLetter, dotRef.current],
      {
        x: (index, target) => {
          const rect = target.getBoundingClientRect();
          const currentX = rect.left + rect.width / 2;
          return window.innerWidth / 2 - currentX;
        },
        y: (index, target) => {
          const rect = target.getBoundingClientRect();
          const currentY = rect.top + rect.height / 2;
          return window.innerHeight / 2 - currentY;
        },
        duration: 0.4,
        ease: "power2.inOut",
      },
      "2.0"
    );

    // Phase 3: Final Exit
    tl.to({}, { duration: 0.5 }, "2.4").to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => navigate("/onboarding"), 300);
        },
      },
      "2.9"
    );

    return () => {
      tl.kill();
    };
  }, [navigate]);

  const punchLetters = ["P", "u", "n", "c", "h"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div ref={containerRef} className="text-center relative">
        <h1 className="text-6xl font-bold text-foreground flex items-center justify-center">
          {punchLetters.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) punchLettersRef.current[i] = el;
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Central dot */}
        <span
          ref={dotRef}
          className="w-3 h-3 rounded-full bg-foreground inline-block"
        />
      </div>
    </div>
  );
};

export default Splash;
