import Icon from "@/components/ui/icon";

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

export default function FooterSection() {
  return (
    <>
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
    </>
  );
}
