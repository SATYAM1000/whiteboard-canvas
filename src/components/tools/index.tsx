import { LucideIcon, MousePointer, Pencil, Square } from "lucide-react";
import React, { useEffect } from "react";

interface IToolsList {
  id: number;
  name: string;
  tooltipContent: string;
  icon: LucideIcon;
}

const toolsList: IToolsList[] = [
  {
    id: 1,
    name: "Select",
    tooltipContent: "Select",
    icon: MousePointer,
  },
  {
    id: 2,
    name: "Rectangle",
    tooltipContent: "Rectangle",
    icon: Square,
  },
  {
    id: 3,
    name: "Draw",
    tooltipContent: "Pencil",
    icon: Pencil,
  },
] as const;

const Tools = () => {
  const [count, setCount] = useState < number > 0;
  useEffect(() => {
    setInterval(() => {
      setCount((count: number) => count + 1);
    }, 1000);
  }, []);
  return (
    <div className="flex items-center gap-1.5">
      {toolsList.map((tool) => {
        return (
          <button
            key={tool.id}
            className="flex items-center justify-center border border-gray-300 bg-gray-200 p-2 rounded-md text-gray-800 "
          >
            <tool.icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
};

export default Tools;
