import type { Technology } from "../App";

interface StackPanelProps {
    stack: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

function StackPanel({
    stack,
    onRemove,
    onRemoveAll,
}: StackPanelProps) {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm">

            <div className="card-body">

                {/* Heading */}
                <h2 className="card-title">
                    Your Stack
                </h2>

                <p className="text-sm text-base-content/50">
                    {stack.length} Technology Selected
                </p>

                {/* Selected Stack */}
                <div className="space-y-2 mt-4">

                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center justify-between border border-base-200 rounded-lg p-3"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="w-8 h-8 object-contain"
                                />

                                <div>
                                    <p className="font-semibold text-sm">
                                        {technology.name}
                                    </p>

                                    <p className="text-xs text-base-content/50">
                                        {technology.category}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => onRemove(technology.id)}
                                className="btn btn-sm btn-ghost text-error"
                            >
                                ✕
                            </button>

                        </div>
                    ))}

                </div>

                {/* Empty Stack */}
                {stack.length === 0 && (
                    <div className="text-center py-8">

                        <p className="text-base-content/40">
                            No technology selected
                        </p>

                        <p className="text-xs text-base-content/30 mt-1">
                            Add technologies from the list
                        </p>

                    </div>
                )}

                {/* Remove All */}
                {stack.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="btn btn-outline btn-error w-full mt-4"
                    >
                        Remove All
                    </button>
                )}

            </div>
        </div>
    );
}

export default StackPanel;