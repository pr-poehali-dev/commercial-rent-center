import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ff1a4d09-6b73-42c4-b213-2cc8675504e2/files/040882d8-1430-47b1-bb8d-69c47ce49311.jpg";

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

const ADVANTAGES = [
  {
    icon: "ShieldCheck",
    title: "Проверенные объекты",
    desc: "Каждый объект проходит модерацию и юридическую проверку перед публикацией",
  },
  {
    icon: "Zap",
    title: "Быстрый отклик",
    desc: "Владельцы отвечают в среднем за 2 часа. Заявка попадает напрямую к арендодателю",
  },
  {
    icon: "BadgePercent",
    title: "Без комиссий",
    desc: "Мы не берём комиссию с арендатора. Платит только владелец за размещение",
  },
  {
    icon: "MapPin",
    title: "Точное местоположение",
    desc: "Интерактивная карта, фотогалерея и полное описание каждого объекта",
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Все");
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Главная", "Каталог", "Объект", "О нас", "Контакты"];

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProps =
    selectedType === "Все"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === selectedType);

  return (
    <div
      className="min-h-screen font-golos"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled ? "glass py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
            >
              <Icon name="Building2" size={18} className="text-white" />
            </div>
            <span className="font-oswald text-xl font-semibold tracking-wide">
              Центр <span className="text-gradient-blue">Помещений</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveNav(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeNav === link
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="btn-outline text-sm py-2 px-4">Войти</button>
            <button className="btn-primary text-sm py-2 px-4">
              Разместить объект
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} className="text-white" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveNav(link); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {link}
              </button>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
              <button className="btn-outline text-sm py-2 px-4 flex-1">Войти</button>
              <button className="btn-primary text-sm py-2 px-4 flex-1">Разместить</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
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

      {/* ── ADVANTAGES ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.04) 50%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{
                color: "#14B8A6",
                background: "rgba(20,184,166,0.1)",
                border: "1px solid rgba(20,184,166,0.2)",
              }}
            >
              Преимущества
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">
              Почему выбирают <span className="text-gradient-teal">нас</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="glass rounded-2xl p-7 card-hover group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))"
                      : "linear-gradient(135deg, rgba(20,184,166,0.2), rgba(20,184,166,0.05))",
                    border: i % 2 === 0
                      ? "1px solid rgba(59,130,246,0.3)"
                      : "1px solid rgba(20,184,166,0.3)",
                  }}
                >
                  <Icon
                    name={adv.icon}
                    size={26}
                    className={i % 2 === 0 ? "text-blue-400" : "text-teal-400"}
                  />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-white mb-3">{adv.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(20,184,166,0.1) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div className="orb w-80 h-80 top-[-80px] left-[-60px]" style={{ background: "#3B82F6", opacity: 0.12 }} />
          <div className="orb w-60 h-60 bottom-[-40px] right-[-40px]" style={{ background: "#14B8A6", opacity: 0.12 }} />
          <div className="relative">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
              style={{
                color: "#60A5FA",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
              }}
            >
              Владельцам помещений
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Сдайте помещение{" "}
              <span className="text-gradient-blue">быстро и выгодно</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
              Разместите объект бесплатно и получайте заявки от проверенных
              арендаторов уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center gap-2 justify-center">
                <Icon name="Plus" size={16} />
                Разместить объект бесплатно
              </button>
              <button className="btn-outline flex items-center gap-2 justify-center">
                <Icon name="Phone" size={16} />
                Обсудить условия
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
                >
                  <Icon name="Building2" size={16} className="text-white" />
                </div>
                <span className="font-oswald text-lg font-semibold">Центр Помещений</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">
                Платформа для аренды коммерческой недвижимости напрямую от собственников
              </p>
              <div className="flex gap-3 mt-5">
                {["Telegram", "VK", "WhatsApp"].map((s) => (
                  <button
                    key={s}
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all"
                  >
                    <Icon name="MessageCircle" size={15} />
                  </button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Объекты",
                links: ["Офисы", "Склады", "Торговля", "Производство", "Общепит"],
              },
              {
                title: "Сервис",
                links: ["Как это работает", "Для арендаторов", "Для владельцев", "Тарифы"],
              },
              {
                title: "Компания",
                links: ["О нас", "Контакты", "Блог", "Поддержка"],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-white mb-4 text-sm">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button className="text-white/35 text-sm hover:text-blue-400 transition-colors">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-white/25 text-sm">© 2025 Центр Помещений. Все права защищены.</span>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Условия использования"].map((l) => (
                <button key={l} className="text-white/25 text-sm hover:text-white/50 transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
