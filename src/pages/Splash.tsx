import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const pRef = useRef<HTMLSpanElement>(null);
  const unchRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ambassadorsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => navigate("/onboarding"), 500);
      }
    });

    // Initial setup
    gsap.set(dotRef.current, { opacity: 0, scale: 0 });
    gsap.set(ambassadorsRef.current, { opacity: 0 });

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
      x: -60,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(pRef.current, {
      x: -3,
      duration: 0.1,
      yoyo: true,
      repeat: 3,
      ease: "power2.inOut"
    })
    .to(ambassadorsRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div className="text-center relative">
        <h1 className="text-6xl font-bold text-foreground mb-1">
          <span ref={pRef} className="inline-block">P</span>
          <span ref={unchRef} className="inline-block">unch</span>
          <div 
            ref={dotRef} 
            className="inline-block w-4 h-4 rounded-full bg-foreground absolute"
            style={{ top: '50%', transform: 'translateY(-50%)', right: '-20px' }}
          />
        </h1>
        <p ref={ambassadorsRef} className="text-2xl font-light italic text-foreground">Ambassadors</p>
      </div>
    </div>
  );
};

export default Splash;
