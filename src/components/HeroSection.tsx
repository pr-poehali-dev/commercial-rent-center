import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ff1a4d09-6b73-42c4-b213-2cc8675504e2/files/040882d8-1430-47b1-bb8d-69c47ce49311.jpg";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.7) 50%, rgba(10,10,15,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid" />

      <div
        className="orb w-[600px] h-[600px] top-[-100px] left-[-100px] animate-pulse-glow"
        style={{ background: "#3B82F6" }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-50px] right-[-50px] animate-pulse-glow"
        style={{ background: "#14B8A6", animationDelay: "1.5s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up"
            style={{
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60A5FA",
            }}
          >
            <Icon name="MapPin" size={14} />
            Более 1 200 объектов по всей России
          </div>

          <h1
            className="font-oswald text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-white">Найди</span>
            <br />
            <span className="text-gradient-hero">идеальное</span>
            <br />
            <span className="text-white">помещение</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            Офисы, склады, торговые площади и производственные объекты в аренду.
            Без посредников — напрямую от собственников.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl animate-fade-in-up delay-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-3 flex-1 px-3">
              <Icon name="Search" size={18} className="text-white/40 flex-shrink-0" />
              <input
                type="text"
                placeholder="Тип объекта, район, адрес..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder-white/30 text-sm py-2"
              />
            </div>
            <button className="btn-primary flex items-center gap-2 justify-center">
              <Icon name="Search" size={16} />
              Найти помещение
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-5 animate-fade-in-up delay-400">
            {["Офис от 50 м²", "Склад от 500 м²", "Магазин на 1 этаже", "Без посредников"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs text-white/50 hover:text-blue-400 transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-xs tracking-widest uppercase">Прокрути вниз</span>
        <Icon name="ChevronDown" size={16} className="text-white/30" />
      </div>
    </section>
  );
}
