import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="min-h-screen font-golos flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0A0A0F", color: "#fff" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div
        className="orb w-[500px] h-[500px] top-[-150px] left-[-150px] animate-pulse-glow"
        style={{ background: "#3B82F6" }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] right-[-100px] animate-pulse-glow"
        style={{ background: "#14B8A6", animationDelay: "1.5s" }}
      />

      {/* Back link */}
      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
      >
        <Icon name="ArrowLeft" size={16} />
        На главную
      </a>

      {/* Card */}
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

        <h1 className="font-oswald text-3xl font-bold text-white mb-1">Вход в кабинет</h1>
        <p className="text-white/40 text-sm mb-8">Введите данные для входа в личный кабинет</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-white/50 mb-2">Email</label>
            <div
              className="flex items-center gap-3 px-4 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={() => {}}
            >
              <Icon name="Mail" size={16} className="text-white/30 flex-shrink-0" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-white placeholder-white/20 text-sm py-3.5"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white/50 mb-2">Пароль</label>
            <div
              className="flex items-center gap-3 px-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon name="Lock" size={16} className="text-white/30 flex-shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Forgot */}
          <div className="text-right">
            <button type="button" className="text-sm text-blue-400/70 hover:text-blue-400 transition-colors">
              Забыли пароль?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <>
                <Icon name="Loader2" size={16} className="animate-spin" />
                Входим...
              </>
            ) : (
              <>
                <Icon name="LogIn" size={16} />
                Войти
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-white/25 text-xs">или войти как</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Demo accounts */}
        <div className="space-y-2">
          {[
            { label: "Демо арендатор", email: "tenant1@realty.com", icon: "User", color: "blue" },
            { label: "Демо владелец", email: "owner1@realty.com", icon: "Building2", color: "teal" },
            { label: "Демо администратор", email: "admin@realty.com", icon: "ShieldCheck", color: "blue" },
          ].map((acc) => (
            <button
              key={acc.email}
              type="button"
              onClick={() => { setEmail(acc.email); setPassword("admin123"); }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200"
              style={{
                background: acc.color === "blue" ? "rgba(59,130,246,0.07)" : "rgba(20,184,166,0.07)",
                border: acc.color === "blue" ? "1px solid rgba(59,130,246,0.15)" : "1px solid rgba(20,184,166,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.background = acc.color === "blue"
                  ? "rgba(59,130,246,0.14)" : "rgba(20,184,166,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.background = acc.color === "blue"
                  ? "rgba(59,130,246,0.07)" : "rgba(20,184,166,0.07)";
              }}
            >
              <Icon
                name={acc.icon}
                size={15}
                className={acc.color === "blue" ? "text-blue-400" : "text-teal-400"}
              />
              <span className="text-white/60">{acc.label}</span>
              <span className="ml-auto text-white/25 text-xs">{acc.email}</span>
            </button>
          ))}
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-white/35 mt-6">
          Нет аккаунта?{" "}
          <a href="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
}
