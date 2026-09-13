import type { Technology } from "../App";

interface TechCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isSelected: boolean;
}

function TechCard({
    technology,
    onAdd,
    isSelected,
}: TechCardProps) {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="card-body p-5">

                {/* Top */}
                <div className="flex items-center justify-between">

                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-10 h-10 object-contain"
                    />

                    <span className="badge badge-primary badge-soft">
                        {technology.badge}
                    </span>

                </div>

                {/* Name */}
                <h2 className="card-title mt-2">
                    {technology.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-base-content/60 min-h-16">
                    {technology.description}
                </p>

                {/* Info */}
                <div className="flex items-center justify-between gap-2 mt-3">

                    <span className="badge badge-ghost text-xs">
                        {technology.category}
                    </span>

                    <span className="text-xs text-base-content/60">
                        {technology.difficulty}
                    </span>

                    <span className="text-warning text-sm">
                        ★ {technology.rating}
                    </span>

                </div>

                {/* Button */}
                <button
                    onClick={() => onAdd(technology)}
                    disabled={isSelected}
                    className={`btn w-full mt-4 ${isSelected
                            ? "btn-disabled"
                            : "btn-neutral"
                        }`}
                >
                    {isSelected ? "Added ✓" : "Add to Stack"}
                </button>

            </div>
        </div>
    );
}

export default TechCard;