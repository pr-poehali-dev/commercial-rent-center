import Icon from "@/components/ui/icon";

interface Profile {
  fullName: string;
  email: string;
  phone: string;
  company: string;
}

interface Props {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  showAddModal: boolean;
  setShowAddModal: (v: boolean) => void;
}

export default function OwnerProfileTab({ profile, setProfile, showAddModal, setShowAddModal }: Props) {
  return (
    <>
      {/* PROFILE TAB */}
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
              { label: "Полное имя", key: "fullName", icon: "User",      type: "text" },
              { label: "Email",      key: "email",    icon: "Mail",      type: "email" },
              { label: "Телефон",    key: "phone",    icon: "Phone",     type: "tel" },
              { label: "Компания",   key: "company",  icon: "Briefcase", type: "text" },
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
                    value={profile[field.key as keyof Profile]}
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
    </>
  );
}
