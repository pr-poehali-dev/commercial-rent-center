import { useState } from "react";
import Icon from "@/components/ui/icon";
import OwnerHeader from "@/components/owner/OwnerHeader";
import OwnerObjectsTab, { OBJECTS } from "@/components/owner/OwnerObjectsTab";
import OwnerRequestsTab, { INCOMING_REQUESTS } from "@/components/owner/OwnerRequestsTab";
import OwnerProfileTab from "@/components/owner/OwnerProfileTab";

type Tab = "objects" | "requests" | "profile";

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
    { key: "objects",  label: "Мои объекты", icon: "Building2", count: OBJECTS.length },
    { key: "requests", label: "Заявки",       icon: "Bell",      count: INCOMING_REQUESTS.filter((r) => r.status === "pending").length },
    { key: "profile",  label: "Профиль",      icon: "User" },
  ];

  return (
    <div
      className="min-h-screen font-golos"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      <OwnerHeader onAddClick={() => setShowAddModal(true)} />

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
            { label: "Объектов",         value: String(OBJECTS.length), icon: "Building2", color: "blue" },
            { label: "Новых заявок",     value: String(INCOMING_REQUESTS.filter((r) => r.status === "pending").length), icon: "Bell", color: "teal" },
            { label: "Активных",         value: String(OBJECTS.filter((o) => o.status === "active").length), icon: "TrendingUp", color: "blue" },
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

        {/* Tab content */}
        {activeTab === "objects"  && <OwnerObjectsTab />}
        {activeTab === "requests" && <OwnerRequestsTab />}
        {activeTab === "profile"  && (
          <OwnerProfileTab
            profile={profile}
            setProfile={setProfile}
            showAddModal={showAddModal}
            setShowAddModal={setShowAddModal}
          />
        )}
      </div>
    </div>
  );
}
