"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 17, suffix: "+", label: "Traditional Towns", description: "Under the Okuapemhene's jurisdiction" },
  { value: 300, suffix: "+", label: "Years of Heritage", description: "Rich history of chieftaincy" },
  { value: 50, suffix: "K+", label: "Community Members", description: "United under one stool" },
  { value: 12, suffix: "", label: "Annual Festivals", description: "Celebrating Akan culture" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  description,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="stat-glow rounded-sm p-6 text-center">
      <p className="font-serif text-4xl font-bold text-gold mb-1">
        {count}
        {suffix}
      </p>
      <p className="font-serif text-base text-white font-semibold mb-1">{label}</p>
      <p className="text-xs text-white/50">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,151,90,0.5) 40px, rgba(196,151,90,0.5) 41px)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            The Okuapeman Kingdom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 gold-underline-center">
            A Kingdom of Strength &amp; Unity
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
