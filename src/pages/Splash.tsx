import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const pRef = useRef<HTMLSpanElement>(null);
  const unchRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => navigate("/onboarding"), 800);
      }
    });

    // Initial setup
    gsap.set(dotRef.current, { opacity: 0, scale: 0, x: 0 });

    // Animation sequence
    tl.from([pRef.current, unchRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out"
    })
    .to(unchRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power2.in"
    })
    .to(dotRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2
    }, "-=0.1")
    .to(dotRef.current, {
      x: 60,
      duration: 0.4,
      ease: "power1.out"
    })
    .to(dotRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power2.in"
    })
    .to(pRef.current, {
      x: -3,
      duration: 0.08,
      yoyo: true,
      repeat: 5,
      ease: "power2.inOut"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div className="text-center relative">
        <h1 className="text-6xl font-bold text-foreground mb-1 flex items-center justify-center gap-1">
          <span ref={pRef} className="inline-block">P</span>
          <span ref={unchRef} className="inline-block">unch</span>
          <div 
            ref={dotRef} 
            className="w-3 h-3 rounded-full bg-foreground"
          />
        </h1>
      </div>
    </div>
  );
};

export default Splash;
