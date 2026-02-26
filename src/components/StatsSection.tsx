"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: 26, suffix: "th", label: "Ofori Kuma Stool", description: "Occupant of the sacred stool" },
  { value: 5, suffix: "", label: "Year Work Programme", description: "2025–2030 development roadmap" },
  { value: 4, suffix: "", label: "Key Focus Areas", description: "Institutional, economic, cultural, innovation" },
  { value: 3, suffix: "", label: "Implementation Phases", description: "Phased rollout and scaling" },
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
      <Image
        src="/Images/People.png"
        alt="Akuapem chiefs in kente"
        fill
        className="object-cover opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Operational Policy 2025–2030
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 gold-underline-center">
            A Framework for Transformation
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
