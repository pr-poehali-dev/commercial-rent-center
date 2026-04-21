import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Главная", "Каталог", "Объект", "О нас", "Контакты"];

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
  );
}
