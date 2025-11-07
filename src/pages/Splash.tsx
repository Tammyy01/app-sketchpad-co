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

    // Action C: Dot reveals as letters collapse
    tl.to(dotRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "back.out(1.7)"
    }, "0.7");

    // Phase 2: Impact and Reaction (The Signature Move - Starts at ~1.0s)
    const pLetter = punchLettersRef.current[0];
    
    // Action A: P stays put (no animation needed)
    
    // Action B: Dot flies from center to next to P
    tl.to(dotRef.current, {
      x: (index, target) => {
        const pRect = pLetter.getBoundingClientRect();
        const dotRect = target.getBoundingClientRect();
        return pRect.right - dotRect.left + 8;
      },
      y: (index, target) => {
        const pRect = pLetter.getBoundingClientRect();
        const dotRect = target.getBoundingClientRect();
        return pRect.top + pRect.height / 2 - dotRect.top - dotRect.height / 2;
      },
      duration: 0.4,
      ease: "power2.in"
    }, "1.0");

    // Action C: P reacts with shake on impact
    tl.to(pLetter, {
      x: -4,
      duration: 0.05,
      yoyo: true,
      repeat: 5,
      ease: "elastic.out(1, 0.3)"
    }, "1.4");

    // Hold the signature state
    tl.to({}, { duration: 0.5 }, "1.6");
    
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
