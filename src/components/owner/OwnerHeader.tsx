import Icon from "@/components/ui/icon";

interface Props {
  onAddClick: () => void;
}

export default function OwnerHeader({ onAddClick }: Props) {
  return (
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
            onClick={onAddClick}
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
  );
}
