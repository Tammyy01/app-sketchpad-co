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

    // Compute 'unch' group center BEFORE applying transforms
    const unchEls = punchLettersRef.current.slice(1).filter(Boolean);
    const rects = unchEls.map((el) => el.getBoundingClientRect());
    const bounds = rects.length
      ? {
          left: Math.min(...rects.map((r) => r.left)),
          right: Math.max(...rects.map((r) => r.right)),
          top: Math.min(...rects.map((r) => r.top)),
          bottom: Math.max(...rects.map((r) => r.bottom)),
        }
      : {
          left: window.innerWidth / 2,
          right: window.innerWidth / 2,
          top: window.innerHeight / 2,
          bottom: window.innerHeight / 2,
        };
    const groupCenterX = (bounds.left + bounds.right) / 2;
    const groupCenterY = (bounds.top + bounds.bottom) / 2;
    const xFromCenter = groupCenterX - window.innerWidth / 2;
    const yFromCenter = groupCenterY - window.innerHeight / 2;

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
      x: xFromCenter,
      y: yFromCenter,
      transform: "translate(-50%, -50%)",
    });

    // Phase 0: Initial Reveal (0.0s to 0.5s)
    tl.to([...punchLettersRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out"
    });

    // Phase 1: Collapse to Center (Starts at ~0.5s)
    // Action B: "unch" letters collapse to center (NOT 'P')
    const unchLetters = punchLettersRef.current.slice(1);
    tl.to(unchLetters, {
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
      duration: 0.3,
      stagger: {
        each: 0.02,
        from: "end"
      },
      ease: "power2.in"
    }, "0.5");

    // Action C removed: dot reveal merged into flight tween

    // Phase 2: Position P at center while dot rolls back to it
    const pLetter = punchLettersRef.current[0];

    // Move P to exact center early
    tl.to(pLetter, {
      x: (i, target) => {
        const rect = target.getBoundingClientRect();
        return window.innerWidth / 2 - rect.left - rect.width / 2;
      },
      y: (i, target) => {
        const rect = target.getBoundingClientRect();
        return window.innerHeight / 2 - rect.top - rect.height / 2;
      },
      duration: 0.35,
      ease: "power2.inOut"
    }, "0.5");

    // Dot flies from unch center to sit just to the right of centered P
    tl.to(dotRef.current, {
      opacity: 1,
      scale: 1,
      x: () => {
        const pRect = pLetter.getBoundingClientRect();
        const gap = 6;
        return pRect.width / 2 + gap;
      },
      y: 0,
      duration: 0.5,
      ease: "power2.in"
    }, "0.5");

    // Impact shake upon arrival
    tl.to(pLetter, {
      x: -3,
      duration: 0.08,
      yoyo: true,
      repeat: 5,
      ease: "power2.inOut"
    }, "1.0");

    // Hold the signature state
    tl.to({}, { duration: 0.5 }, "1.2");
    
    // Phase 3: Final Exit
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setTimeout(() => navigate("/onboarding"), 300);
      }
    }, "2.2");

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
        
        {/* Central collapsing dot */}
        <span 
          ref={dotRef}
          className="w-3 h-3 rounded-full bg-foreground inline-block"
        />
      </div>
    </div>
  );
};

export default Splash;
