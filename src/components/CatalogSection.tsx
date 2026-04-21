import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATEGORIES = [
  { icon: "Building2", label: "Офисы", count: 248, color: "blue" },
  { icon: "Package", label: "Склады", count: 134, color: "teal" },
  { icon: "ShoppingBag", label: "Торговля", count: 189, color: "blue" },
  { icon: "Factory", label: "Производство", count: 76, color: "teal" },
  { icon: "Car", label: "Автосервис", count: 53, color: "blue" },
  { icon: "UtensilsCrossed", label: "Общепит", count: 97, color: "teal" },
  { icon: "Stethoscope", label: "Медицина", count: 41, color: "blue" },
  { icon: "Paintbrush", label: "Студии", count: 88, color: "teal" },
];

const PROPERTIES = [
  {
    id: 1,
    title: "Офисный центр «Горизонт»",
    type: "Офис",
    address: "ул. Ленина, 45, этаж 12",
    area: 240,
    price: 85000,
    badge: "Хит",
    badgeColor: "blue",
    features: ["Парковка", "Охрана", "Переговорная"],
  },
  {
    id: 2,
    title: "Склад класса А",
    type: "Склад",
    address: "Промышленная зона, корп. 7",
    area: 1200,
    price: 180000,
    badge: "Новый",
    badgeColor: "teal",
    features: ["Пандус", "Ворота 5м", "Отопление"],
  },
  {
    id: 3,
    title: "Торговый павильон ТЦ «Меридиан»",
    type: "Торговля",
    address: "пр. Победы, 12, 1 этаж",
    area: 85,
    price: 120000,
    badge: "Акция",
    badgeColor: "blue",
    features: ["Витрина", "Трафик 5000/д", "Парковка"],
  },
  {
    id: 4,
    title: "Производственный цех",
    type: "Производство",
    address: "ул. Заводская, 88",
    area: 650,
    price: 95000,
    badge: null,
    badgeColor: "",
    features: ["380В", "Кран-балка", "КПП"],
  },
  {
    id: 5,
    title: "Ресторанное помещение",
    type: "Общепит",
    address: "Набережная, 23",
    area: 320,
    price: 210000,
    badge: "Топ",
    badgeColor: "teal",
    features: ["Вытяжка", "Летняя терраса", "Вид на реку"],
  },
  {
    id: 6,
    title: "Медицинский кабинет",
    type: "Медицина",
    address: "ул. Советская, 67",
    area: 45,
    price: 42000,
    badge: null,
    badgeColor: "",
    features: ["Лицензия", "Раковина", "Сан. узел"],
  },
];

const STATS = [
  { value: "1 200+", label: "Объектов в базе" },
  { value: "340+", label: "Владельцев" },
  { value: "8 700+", label: "Успешных сделок" },
  { value: "15", label: "Городов присутствия" },
];

export default function CatalogSection() {
  const [selectedType, setSelectedType] = useState("Все");

  const filteredProps =
    selectedType === "Все"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === selectedType);

  return (
    <>
      {/* ── STATS ── */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, transparent 50%, rgba(20,184,166,0.05) 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="font-oswald text-4xl font-bold mb-1 text-gradient-blue">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{
              color: "#14B8A6",
              background: "rgba(20,184,166,0.1)",
              border: "1px solid rgba(20,184,166,0.2)",
            }}
          >
            Категории
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            Выбери тип <span className="text-gradient-teal">помещения</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            От небольших кабинетов до крупных производственных комплексов
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              className="group glass rounded-2xl p-6 text-left card-hover flex flex-col gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: cat.color === "blue"
                    ? "rgba(59,130,246,0.15)"
                    : "rgba(20,184,166,0.15)",
                  border: cat.color === "blue"
                    ? "1px solid rgba(59,130,246,0.3)"
                    : "1px solid rgba(20,184,166,0.3)",
                }}
              >
                <Icon
                  name={cat.icon}
                  size={22}
                  className={cat.color === "blue" ? "text-blue-400" : "text-teal-400"}
                />
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{cat.label}</div>
                <div className="text-white/40 text-xs">{cat.count} объектов</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{
                color: "#3B82F6",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              Каталог
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">
              Актуальные <span className="text-gradient-blue">предложения</span>
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {["Все", "Офис", "Склад", "Торговля", "Производство"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedType === type ? "text-white" : "text-white/50 hover:text-white"
                }`}
                style={
                  selectedType === type
                    ? {
                        background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                        boxShadow: "0 4px 15px rgba(59,130,246,0.4)",
                      }
                    : {}
                }
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProps.map((prop) => (
            <div key={prop.id} className="glass rounded-2xl overflow-hidden card-hover cursor-pointer group">
              <div
                className="relative h-48"
                style={{ background: "linear-gradient(135deg, #0F0F18, #1a1a2e)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name="Building2"
                    size={64}
                    className="text-white/5 group-hover:text-white/10 transition-all duration-300"
                  />
                </div>
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(10,10,15,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {prop.type}
                </div>
                {prop.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background: prop.badgeColor === "blue"
                        ? "linear-gradient(135deg, #3B82F6, #2563EB)"
                        : "linear-gradient(135deg, #14B8A6, #0D9488)",
                      boxShadow: prop.badgeColor === "blue"
                        ? "0 4px 15px rgba(59,130,246,0.5)"
                        : "0 4px 15px rgba(20,184,166,0.5)",
                    }}
                  >
                    {prop.badge}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-oswald text-lg font-semibold text-white mb-1 line-clamp-1">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/40 text-sm mb-4">
                  <Icon name="MapPin" size={13} />
                  {prop.address}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {prop.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div>
                    <div className="text-xl font-bold font-oswald" style={{ color: "#60A5FA" }}>
                      {prop.price.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="text-xs text-white/30">
                      {prop.area} м² · {Math.round(prop.price / prop.area).toLocaleString("ru-RU")} ₽/м²
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-200"
                    style={{
                      background: "rgba(59,130,246,0.15)",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget).style.background = "rgba(59,130,246,0.3)"; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.background = "rgba(59,130,246,0.15)"; }}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline flex items-center gap-2 mx-auto">
            <Icon name="Grid3x3" size={16} />
            Смотреть все объекты
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
