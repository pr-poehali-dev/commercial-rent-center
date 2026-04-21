import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "requests" | "favorites" | "history" | "profile";

const REQUESTS = [
  {
    id: 1,
    title: "Офисный центр «Горизонт»",
    address: "ул. Ленина, 45",
    area: 240,
    price: 85000,
    status: "pending",
    date: "18 апр 2025",
  },
  {
    id: 2,
    title: "Торговый павильон ТЦ «Меридиан»",
    address: "пр. Победы, 12",
    area: 85,
    price: 120000,
    status: "approved",
    date: "15 апр 2025",
  },
  {
    id: 3,
    title: "Склад класса А",
    address: "Промышленная зона, корп. 7",
    area: 1200,
    price: 180000,
    status: "rejected",
    date: "10 апр 2025",
  },
];

const FAVORITES = [
  {
    id: 1,
    title: "Ресторанное помещение",
    address: "Набережная, 23",
    area: 320,
    price: 210000,
    type: "Общепит",
  },
  {
    id: 2,
    title: "Медицинский кабинет",
    address: "ул. Советская, 67",
    area: 45,
    price: 42000,
    type: "Медицина",
  },
  {
    id: 3,
    title: "Производственный цех",
    address: "ул. Заводская, 88",
    area: 650,
    price: 95000,
    type: "Производство",
  },
];

const STATUS_CONFIG = {
  pending:  { label: "На рассмотрении", color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)", icon: "Clock" },
  approved: { label: "Одобрено",        color: "#10B981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.25)", icon: "CheckCircle" },
  rejected: { label: "Отклонено",       color: "#EF4444", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.25)",  icon: "XCircle" },
} as const;

export default function TenantCabinet() {
  const [activeTab, setActiveTab] = useState<Tab>("requests");
  const [profile, setProfile] = useState({
    fullName: "Алексей Смирнов",
    email: "tenant1@realty.com",
    phone: "+7 (999) 123-45-67",
  });

  const tabs: { key: Tab; label: string; icon: string; count?: number }[] = [
    { key: "requests",  label: "Мои заявки",   icon: "FileText",  count: REQUESTS.length },
    { key: "favorites", label: "Избранное",     icon: "Heart",     count: FAVORITES.length },
    { key: "history",   label: "История",       icon: "History" },
    { key: "profile",   label: "Профиль",       icon: "User" },
  ];

  return (
    <div
      className="min-h-screen font-golos"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      {/* Top bar */}
      <header
        className="glass sticky top-0 z-40"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
            >
              <Icon name="Building2" size={16} className="text-white" />
            </div>
            <span className="font-oswald text-lg font-semibold">
              Центр <span className="text-gradient-blue">Помещений</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "#60A5FA",
              }}
            >
              <Icon name="User" size={12} />
              Арендатор
            </div>
            <button
              className="w-8 h-8 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <Icon name="LogOut" size={15} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-oswald text-3xl font-bold text-white mb-1">
            Привет, {profile.fullName.split(" ")[0]}!
          </h1>
          <p className="text-white/40 text-sm">Личный кабинет арендатора</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Активных заявок", value: "1", icon: "FileText", color: "blue" },
            { label: "Одобрено",        value: "1", icon: "CheckCircle", color: "teal" },
            { label: "В избранном",     value: String(FAVORITES.length), icon: "Heart", color: "blue" },
            { label: "Просмотрено",     value: "12", icon: "Eye", color: "teal" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: s.color === "blue" ? "rgba(59,130,246,0.15)" : "rgba(20,184,166,0.15)",
                  border: s.color === "blue" ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(20,184,166,0.25)",
                }}
              >
                <Icon
                  name={s.icon}
                  size={18}
                  className={s.color === "blue" ? "text-blue-400" : "text-teal-400"}
                />
              </div>
              <div>
                <div className="font-oswald text-2xl font-bold text-white">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1.5 rounded-2xl mb-6 overflow-x-auto"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.key ? "text-white" : "text-white/40 hover:text-white"
              }`}
              style={
                activeTab === tab.key
                  ? { background: "linear-gradient(135deg, #3B82F6, #2563EB)", boxShadow: "0 4px 15px rgba(59,130,246,0.35)" }
                  : {}
              }
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: activeTab === tab.key ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                    color: activeTab === tab.key ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "requests" && (
          <div className="space-y-4 animate-fade-in">
            {REQUESTS.map((req) => {
              const st = STATUS_CONFIG[req.status as keyof typeof STATUS_CONFIG];
              return (
                <div
                  key={req.id}
                  className="glass rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <Icon name="Building2" size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{req.title}</div>
                      <div className="flex items-center gap-1.5 text-white/40 text-sm mt-0.5">
                        <Icon name="MapPin" size={12} />
                        {req.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">{req.area} м²</div>
                      <div className="text-white/30 text-xs">Площадь</div>
                    </div>
                    <div className="text-center">
                      <div className="font-oswald text-blue-400 font-bold">{req.price.toLocaleString("ru-RU")} ₽</div>
                      <div className="text-white/30 text-xs">В месяц</div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color }}
                    >
                      <Icon name={st.icon} size={12} />
                      {st.label}
                    </div>
                    <div className="text-white/25 text-xs">{req.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {FAVORITES.map((fav) => (
              <div key={fav.id} className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer">
                <div
                  className="h-36 flex items-center justify-center relative"
                  style={{ background: "linear-gradient(135deg, #0F0F18, #1a1a2e)" }}
                >
                  <Icon name="Building2" size={48} className="text-white/5 group-hover:text-white/10 transition-all" />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "rgba(10,10,15,0.7)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                  >
                    {fav.type}
                  </div>
                  <button
                    className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                    style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}
                  >
                    <Icon name="Heart" size={14} className="text-red-400" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="font-oswald font-semibold text-white mb-1">{fav.title}</div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
                    <Icon name="MapPin" size={11} />
                    {fav.address}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-400 font-bold font-oswald">{fav.price.toLocaleString("ru-RU")} ₽</div>
                      <div className="text-white/30 text-xs">{fav.area} м²</div>
                    </div>
                    <button
                      className="text-xs px-3 py-1.5 rounded-lg text-white transition-all"
                      style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "history" && (
          <div className="animate-fade-in">
            <div
              className="glass rounded-2xl p-10 text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                <Icon name="History" size={28} className="text-blue-400" />
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-2">История просмотров</h3>
              <p className="text-white/35 text-sm max-w-xs mx-auto">
                Здесь будут отображаться просмотренные вами объекты
              </p>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="max-w-lg animate-fade-in">
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
                >
                  {profile.fullName.charAt(0)}
                </div>
                <div>
                  <div className="font-oswald text-xl font-bold text-white">{profile.fullName}</div>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full mt-1"
                    style={{ color: "#60A5FA", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <Icon name="User" size={11} />
                    Арендатор
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Полное имя", key: "fullName", icon: "User", type: "text" },
                  { label: "Email",      key: "email",    icon: "Mail", type: "email" },
                  { label: "Телефон",    key: "phone",    icon: "Phone", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm text-white/50 mb-2">{field.label}</label>
                    <div
                      className="flex items-center gap-3 px-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Icon name={field.icon} size={15} className="text-white/30 flex-shrink-0" />
                      <input
                        type={field.type}
                        value={profile[field.key as keyof typeof profile]}
                        onChange={(e) => setProfile((p) => ({ ...p, [field.key]: e.target.value }))}
                        className="flex-1 bg-transparent outline-none text-white text-sm py-3.5"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="mt-6 w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #3B82F6, #2563EB)", boxShadow: "0 4px 20px rgba(59,130,246,0.4)" }}
              >
                <Icon name="Save" size={16} />
                Сохранить изменения
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
