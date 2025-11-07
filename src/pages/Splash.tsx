import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const punchLettersRef = useRef<HTMLSpanElement[]>([]);
  const ambLettersRef = useRef<HTMLSpanElement[]>([]);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Preparation: Setup initial states
    gsap.set([...punchLettersRef.current, ...ambLettersRef.current], {
      opacity: 0,
      scale: 0
    });
    gsap.set(dotRef.current, { 
      opacity: 0, 
      scale: 0,
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    });

    // Phase 0: Initial Reveal (0.0s to 0.5s)
    tl.to([...punchLettersRef.current, ...ambLettersRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out"
    });

    // Phase 1: Collapse to Center (Starts at ~0.5s)
    // Action A: Ambassadors letters collapse to center
    tl.to(ambLettersRef.current, {
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
      duration: 0.4,
      stagger: {
        each: 0.02,
        from: "start"
      },
      ease: "power2.in"
    }, "0.5");

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

    // Action C: Dot reveals as letters collapse
    tl.to(dotRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "back.out(1.7)"
    }, "0.7");

    // Phase 2: Convergence & Signature Hold (Starts at ~1.0s)
    const pLetter = punchLettersRef.current[0];
    
    // Action A: P slides to dot position
    tl.to(pLetter, {
      x: (index, target) => {
        const rect = target.getBoundingClientRect();
        return window.innerWidth / 2 - rect.left - rect.width - 12;
      },
      y: (index, target) => {
        const rect = target.getBoundingClientRect();
        return window.innerHeight / 2 - rect.top - rect.height / 2;
      },
      duration: 0.5,
      ease: "power2.inOut"
    }, "1.0");

    // Action B: P pops with scale
    tl.to(pLetter, {
      scale: 1.3,
      duration: 0.15,
      ease: "power2.out"
    }, "1.5")
    .to(pLetter, {
      scale: 1.2,
      duration: 0.2,
      ease: "back.out(1.7)"
    });

    // Action C: Hold (implicit in timeline timing)
    
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
  const ambLetters = ["A", "m", "b", "a", "s", "s", "a", "d", "o", "r", "s"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div ref={containerRef} className="text-center relative">
        <div className="flex flex-col items-center gap-2">
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
          <p className="text-lg text-muted-foreground flex">
            {ambLetters.map((letter, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) ambLettersRef.current[i] = el;
                }}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        
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
