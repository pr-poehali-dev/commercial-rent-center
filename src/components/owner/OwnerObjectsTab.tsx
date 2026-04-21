import Icon from "@/components/ui/icon";

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

const OBJ_STATUS = {
  active:   { label: "Активен",   color: "#10B981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.25)" },
  inactive: { label: "Неактивен", color: "#6B7280", bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.25)" },
} as const;

export { OBJECTS };

export default function OwnerObjectsTab() {
  return (
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
  );
}
