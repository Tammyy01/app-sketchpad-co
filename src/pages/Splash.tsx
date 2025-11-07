import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLSpanElement>(null);
  const unchLettersRef = useRef<HTMLSpanElement[]>([]);
  const ambassadorsLettersRef = useRef<HTMLSpanElement[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Setup and Initial Reveal (0.0s to 0.5s)
    gsap.set([pRef.current, ...unchLettersRef.current, ...ambassadorsLettersRef.current], {
      opacity: 0,
      scale: 0
    });
    gsap.set(dotRef.current, { opacity: 0, scale: 0 });

    tl.to([pRef.current, ...unchLettersRef.current, ...ambassadorsLettersRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out"
    });

    // Phase 2: Subtitle Exit & Dot Transformation (Starts at ~0.5s)
    tl.to([...unchLettersRef.current, ...ambassadorsLettersRef.current], {
      opacity: 0,
      scale: 0,
      x: "50vw",
      y: "50vh",
      duration: 0.4,
      ease: "power2.in"
    }, "0.5")
    .to(dotRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    }, "0.7");

    // Phase 3: Final Central Movement (Starts ~1.2s)
    tl.to([pRef.current, dotRef.current], {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, "1.2");

    // Phase 4: Hold and Exit (Starts ~1.6s)
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setTimeout(() => navigate("/onboarding"), 300);
      }
    }, "1.9");

    return () => {
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div ref={containerRef} className="text-center relative">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold text-foreground flex items-center justify-center">
            <span ref={pRef} className="inline-block">P</span>
            {["u", "n", "c", "h"].map((letter, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) unchLettersRef.current[i] = el;
                }}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
            <div 
              ref={dotRef} 
              className="w-3 h-3 rounded-full bg-foreground absolute"
            />
          </h1>
          <p className="text-lg text-muted-foreground flex">
            {["A", "m", "b", "a", "s", "s", "a", "d", "o", "r", "s"].map((letter, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) ambassadorsLettersRef.current[i] = el;
                }}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
