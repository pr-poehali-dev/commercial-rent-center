import { useState } from "react";
import Icon from "@/components/ui/icon";

type Role = "tenant" | "owner";

export default function Register() {
  const [role, setRole] = useState<Role>("tenant");
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="min-h-screen font-golos flex items-center justify-center relative overflow-hidden py-12"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      <div className="absolute inset-0 bg-grid" />
      <div
        className="orb w-[500px] h-[500px] top-[-150px] right-[-150px] animate-pulse-glow"
        style={{ background: "#14B8A6" }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] left-[-100px] animate-pulse-glow"
        style={{ background: "#3B82F6", animationDelay: "1.5s" }}
      />

      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
      >
        <Icon name="ArrowLeft" size={16} />
        На главную
      </a>

      <div
        className="relative w-full max-w-md mx-4 rounded-3xl p-8 animate-fade-in-up"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3B82F6, #14B8A6)" }}
          >
            <Icon name="Building2" size={18} className="text-white" />
          </div>
          <span className="font-oswald text-xl font-semibold">
            Центр <span className="text-gradient-blue">Помещений</span>
          </span>
        </div>

        <h1 className="font-oswald text-3xl font-bold text-white mb-1">Регистрация</h1>
        <p className="text-white/40 text-sm mb-6">Создайте аккаунт для работы с платформой</p>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  background: s <= step
                    ? "linear-gradient(135deg, #3B82F6, #2563EB)"
                    : "rgba(255,255,255,0.07)",
                  color: s <= step ? "#fff" : "rgba(255,255,255,0.3)",
                  boxShadow: s <= step ? "0 4px 12px rgba(59,130,246,0.4)" : "none",
                }}
              >
                {s < step ? <Icon name="Check" size={12} /> : s}
              </div>
              <span className="text-xs text-white/30">
                {s === 1 ? "Роль и данные" : "Пароль"}
              </span>
              {s < 2 && (
                <div
                  className="w-8 h-px mx-1"
                  style={{ background: step > s ? "#3B82F6" : "rgba(255,255,255,0.1)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Role selector — shown on step 1 */}
        {step === 1 && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {([
              { value: "tenant", icon: "User", label: "Арендатор", desc: "Ищу помещение" },
              { value: "owner", icon: "Building2", label: "Владелец", desc: "Сдаю объект" },
            ] as const).map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setRole(r.value)}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200"
                style={{
                  background: role === r.value
                    ? "rgba(59,130,246,0.12)"
                    : "rgba(255,255,255,0.04)",
                  border: role === r.value
                    ? "1px solid rgba(59,130,246,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: role === r.value
                      ? "rgba(59,130,246,0.2)"
                      : "rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon
                    name={r.icon}
                    size={18}
                    className={role === r.value ? "text-blue-400" : "text-white/30"}
                  />
                </div>
                <div className="text-center">
                  <div className={`text-sm font-semibold ${role === r.value ? "text-white" : "text-white/50"}`}>
                    {r.label}
                  </div>
                  <div className="text-xs text-white/30">{r.desc}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleNext} className="space-y-4">
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm text-white/50 mb-2">Полное имя</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="User" size={16} className="text-white/30 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    value={form.fullName}
                    onChange={set("fullName")}
                    required
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-2">Email</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="Mail" size={16} className="text-white/30 flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set("email")}
                    required
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-2">Телефон</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="Phone" size={16} className="text-white/30 flex-shrink-0" />
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={set("phone")}
                    required
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm text-white/50 mb-2">Пароль</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="Lock" size={16} className="text-white/30 flex-shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Минимум 8 символов"
                    value={form.password}
                    onChange={set("password")}
                    required
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white/30 hover:text-white/60 transition-colors"
                  >
                    <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-2">Подтвердите пароль</label>
                <div
                  className="flex items-center gap-3 px-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon name="Lock" size={16} className="text-white/30 flex-shrink-0" />
                  <input
                    type="password"
                    placeholder="Повторите пароль"
                    value={form.confirm}
                    onChange={set("confirm")}
                    required
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
                  />
                </div>
              </div>

              {/* Summary */}
              <div
                className="rounded-xl p-4 flex items-center gap-3"
                style={{ background: "rgba(20,184,166,0.07)", border: "1px solid rgba(20,184,166,0.15)" }}
              >
                <Icon name="CheckCircle" size={16} className="text-teal-400 flex-shrink-0" />
                <div>
                  <div className="text-white/60 text-xs">Регистрируетесь как</div>
                  <div className="text-white text-sm font-semibold">
                    {role === "tenant" ? "Арендатор" : "Владелец помещений"}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex gap-3 pt-2">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3.5 rounded-xl text-sm font-medium text-white/50 hover:text-white transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Icon name="ArrowLeft" size={15} />
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? (
                <><Icon name="Loader2" size={16} className="animate-spin" />Создаём аккаунт...</>
              ) : step === 1 ? (
                <><span>Далее</span><Icon name="ArrowRight" size={16} /></>
              ) : (
                <><Icon name="UserPlus" size={16} />Создать аккаунт</>
              )}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-white/35 mt-6">
          Уже есть аккаунт?{" "}
          <a href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
            Войти
          </a>
        </p>
      </div>
    </div>
  );
}
