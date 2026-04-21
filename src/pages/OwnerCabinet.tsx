import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "objects" | "requests" | "profile";

const OBJECTS = [
  {
    id: 1,
    title: "Офисный центр «Горизонт»",
    address: "ул. Ленина, 45",
    type: "Офис",
    area: 240,
    price: 85000,
    status: "active",
    requests: 3,
  },
  {
    id: 2,
    title: "Склад на Промышленной",
    address: "Промышленная зона, корп. 3",
    type: "Склад",
    area: 800,
    price: 120000,
    status: "active",
    requests: 1,
  },
  {
    id: 3,
    title: "Торговое помещение на Садовой",
    address: "ул. Садовая, 18",
    type: "Торговля",
    area: 60,
    price: 55000,
    status: "inactive",
    requests: 0,
  },
];

const INCOMING_REQUESTS = [
  {
    id: 1,
    object: "Офисный центр «Горизонт»",
    tenant: "Алексей Смирнов",
    email: "tenant1@realty.com",
    phone: "+7 (999) 123-45-67",
    status: "pending",
    date: "18 апр 2025",
    message: "Интересует аренда на 6 месяцев с возможностью продления",
  },
  {
    id: 2,
    object: "Офисный центр «Горизонт»",
    tenant: "Мария Козлова",
    email: "m.kozlova@mail.ru",
    phone: "+7 (911) 456-78-90",
    status: "approved",
    date: "15 апр 2025",
    message: "Нужен офис для IT-компании, 15 человек",
  },
  {
    id: 3,
    object: "Склад на Промышленной",
    tenant: "ООО «Логистик»",
    email: "info@logistic.ru",
    phone: "+7 (800) 555-01-02",
    status: "rejected",
    date: "10 апр 2025",
    message: "Хранение товаров FMCG, нужен пандус",
  },
];

const STATUS_CONFIG = {
  pending:  { label: "Ожидает",   color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)", icon: "Clock" },
  approved: { label: "Одобрена",  color: "#10B981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.25)", icon: "CheckCircle" },
  rejected: { label: "Отклонена", color: "#EF4444", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.25)",  icon: "XCircle" },
} as const;

const OBJ_STATUS = {
  active:   { label: "Активен",    color: "#10B981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.25)" },
  inactive: { label: "Неактивен",  color: "#6B7280", bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.25)" },
} as const;

export default function OwnerCabinet() {
  const [activeTab, setActiveTab] = useState<Tab>("objects");
  const [showAddModal, setShowAddModal] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Дмитрий Владелец",
    email: "owner1@realty.com",
    phone: "+7 (999) 987-65-43",
    company: "ООО «НедвижимостьПро»",
  });

  const tabs: { key: Tab; label: string; icon: string; count?: number }[] = [
    { key: "objects",   label: "Мои объекты", icon: "Building2", count: OBJECTS.length },
    { key: "requests",  label: "Заявки",       icon: "Bell",      count: INCOMING_REQUESTS.filter((r) => r.status === "pending").length },
    { key: "profile",   label: "Профиль",      icon: "User" },
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
            <button
              onClick={() => setShowAddModal(true)}
              className="hidden md:flex items-center gap-2 btn-primary text-sm py-2 px-4"
            >
              <Icon name="Plus" size={15} />
              Добавить объект
            </button>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "rgba(20,184,166,0.1)",
                border: "1px solid rgba(20,184,166,0.2)",
                color: "#2DD4BF",
              }}
            >
              <Icon name="Building2" size={12} />
              Владелец
            </div>
            <button className="w-8 h-8 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all">
              <Icon name="LogOut" size={15} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-oswald text-3xl font-bold text-white mb-1">
              Привет, {profile.fullName.split(" ")[0]}!
            </h1>
            <p className="text-white/40 text-sm">Кабинет владельца</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="md:hidden flex items-center gap-2 btn-primary text-sm py-2.5 px-5 self-start"
          >
            <Icon name="Plus" size={15} />
            Добавить объект
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Объектов",       value: String(OBJECTS.length), icon: "Building2", color: "blue" },
            { label: "Новых заявок",   value: String(INCOMING_REQUESTS.filter((r) => r.status === "pending").length), icon: "Bell", color: "teal" },
            { label: "Активных",       value: String(OBJECTS.filter((o) => o.status === "active").length), icon: "TrendingUp", color: "blue" },
            { label: "Всего просмотров", value: "47", icon: "Eye", color: "teal" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: s.color === "blue" ? "rgba(59,130,246,0.15)" : "rgba(20,184,166,0.15)",
                  border: s.color === "blue" ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(20,184,166,0.25)",
                }}
              >
                <Icon name={s.icon} size={18} className={s.color === "blue" ? "text-blue-400" : "text-teal-400"} />
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
          className="flex gap-1 p-1.5 rounded-2xl mb-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
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
              {tab.count !== undefined && tab.count > 0 && (
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

        {/* OBJECTS TAB */}
        {activeTab === "objects" && (
          <div className="space-y-4 animate-fade-in">
            {OBJECTS.map((obj) => {
              const st = OBJ_STATUS[obj.status as keyof typeof OBJ_STATUS];
              return (
                <div
                  key={obj.id}
                  className="glass rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <Icon name="Building2" size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{obj.title}</div>
                      <div className="flex items-center gap-1.5 text-white/40 text-sm mt-0.5">
                        <Icon name="MapPin" size={12} />
                        {obj.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-white text-sm font-semibold">{obj.area} м²</div>
                      <div className="text-white/30 text-xs">Площадь</div>
                    </div>
                    <div className="text-center">
                      <div className="font-oswald text-blue-400 font-bold">{obj.price.toLocaleString("ru-RU")} ₽</div>
                      <div className="text-white/30 text-xs">В месяц</div>
                    </div>
                    {obj.requests > 0 && (
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)", color: "#2DD4BF" }}
                      >
                        <Icon name="Bell" size={11} />
                        {obj.requests} заявки
                      </div>
                    )}
                    <div
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color }}
                    >
                      {st.label}
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-blue-400 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <Icon name="Pencil" size={14} />
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-red-400 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <Icon name="Trash2" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* REQUESTS TAB */}
        {activeTab === "requests" && (
          <div className="space-y-4 animate-fade-in">
            {INCOMING_REQUESTS.map((req) => {
              const st = STATUS_CONFIG[req.status as keyof typeof STATUS_CONFIG];
              return (
                <div key={req.id} className="glass rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
                      >
                        {req.tenant.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{req.tenant}</div>
                        <div className="text-white/40 text-xs">{req.email}</div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold self-start"
                      style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color }}
                    >
                      <Icon name={st.icon} size={11} />
                      {st.label}
                    </div>
                  </div>

                  <div
                    className="text-sm text-white/50 p-3 rounded-xl mb-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    «{req.message}»
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-3 text-xs text-white/35">
                      <span className="flex items-center gap-1">
                        <Icon name="Building2" size={11} />
                        {req.object}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Phone" size={11} />
                        {req.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={11} />
                        {req.date}
                      </span>
                    </div>

                    {req.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all"
                          style={{ background: "linear-gradient(135deg, #10B981, #059669)", boxShadow: "0 4px 12px rgba(16,185,129,0.35)" }}
                        >
                          <Icon name="Check" size={13} />
                          Одобрить
                        </button>
                        <button
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#F87171" }}
                        >
                          <Icon name="X" size={13} />
                          Отклонить
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="max-w-lg animate-fade-in">
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                  style={{ background: "linear-gradient(135deg, #14B8A6, #0D9488)" }}
                >
                  {profile.fullName.charAt(0)}
                </div>
                <div>
                  <div className="font-oswald text-xl font-bold text-white">{profile.fullName}</div>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full mt-1"
                    style={{ color: "#2DD4BF", background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)" }}
                  >
                    <Icon name="Building2" size={11} />
                    Владелец
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Полное имя",    key: "fullName", icon: "User",      type: "text" },
                  { label: "Email",         key: "email",    icon: "Mail",      type: "email" },
                  { label: "Телефон",       key: "phone",    icon: "Phone",     type: "tel" },
                  { label: "Компания",      key: "company",  icon: "Briefcase", type: "text" },
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
                style={{ background: "linear-gradient(135deg, #14B8A6, #0D9488)", boxShadow: "0 4px 20px rgba(20,184,166,0.4)" }}
              >
                <Icon name="Save" size={16} />
                Сохранить изменения
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Object Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowAddModal(false); }}
        >
          <div
            className="w-full max-w-lg rounded-3xl p-7 animate-fade-in-up"
            style={{
              background: "rgba(15,15,24,0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-oswald text-2xl font-bold text-white">Новый объект</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Название объекта", placeholder: "Офис на Ленина, 45", icon: "Building2", type: "text" },
                { label: "Адрес",            placeholder: "ул. Ленина, 45",      icon: "MapPin",   type: "text" },
                { label: "Площадь (м²)",     placeholder: "240",                 icon: "Maximize", type: "number" },
                { label: "Цена (₽/мес)",     placeholder: "85000",               icon: "Banknote", type: "number" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm text-white/50 mb-2">{f.label}</label>
                  <div
                    className="flex items-center gap-3 px-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Icon name={f.icon} size={15} className="text-white/30 flex-shrink-0" />
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-sm text-white/50 mb-2">Тип помещения</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="Tag" size={15} className="text-white/30 flex-shrink-0" />
                  <select
                    className="flex-1 bg-transparent outline-none text-white text-sm py-3.5"
                    style={{ appearance: "none" }}
                  >
                    {["Офис", "Склад", "Торговля", "Производство", "Автосервис", "Общепит", "Медицина", "Студия"].map((t) => (
                      <option key={t} value={t} style={{ background: "#0F0F18" }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-3.5 rounded-xl text-sm font-medium text-white/50 hover:text-white transition-all flex-1"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Отмена
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #3B82F6, #2563EB)", boxShadow: "0 4px 20px rgba(59,130,246,0.4)" }}
              >
                <Icon name="Plus" size={16} />
                Добавить объект
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
