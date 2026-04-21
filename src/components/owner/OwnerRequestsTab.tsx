import Icon from "@/components/ui/icon";

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

export { INCOMING_REQUESTS };

export default function OwnerRequestsTab() {
  return (
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
  );
}
