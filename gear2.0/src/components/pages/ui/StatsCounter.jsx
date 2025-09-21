import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Projects Delivered", value: 120 },
  { label: "Satisfied Clients", value: 85 },
  { label: "AI Models Built", value: 45 },
  { label: "Robotics Solutions", value: 30 },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    stats.forEach(({ value }, index) => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 30); // update every 30ms

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = Math.floor(start);
          return copy;
        });
      }, 30);
    });
  }, [inView]);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12" ref={ref}>
          {stats.map(({ label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-green-400">
                {counts[i]}
              </span>
              <p className="mt-2 text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
