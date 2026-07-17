import React from "react";

import {
  Atom,
  Cube,
  Database,
  GlobeHemisphereWest,
  ShoppingBag,
  FileHtml,
  FileCss,
  FileJs,
  Stack,
  Columns,
  GitBranch,
} from "@phosphor-icons/react";

const OUTER_ICONS = [
  { Icon: Atom, color: "#61DAFB", label: "React", angle: 0 },
  { Icon: Cube, color: "#68A063", label: "Node.js", angle: 45 },
  { Icon: Database, color: "#13AA52", label: "MongoDB", angle: 90 },
  {
    Icon: GlobeHemisphereWest,
    color: "#21759B",
    label: "WordPress",
    angle: 135,
  },
  { Icon: ShoppingBag, color: "#95BF47", label: "Shopify", angle: 180 },
  { Icon: FileHtml, color: "#E34F26", label: "HTML", angle: 225 },
  { Icon: FileCss, color: "#1572B6", label: "CSS", angle: 270 },
  { Icon: FileJs, color: "#F7DF1E", label: "JavaScript", angle: 315 },
];

const INNER_ICONS = [
  { Icon: Stack, color: "#38BDF8", label: "Tailwind", angle: 0 },
  { Icon: Columns, color: "#7952B3", label: "Bootstrap", angle: 120 },
  { Icon: GitBranch, color: "#F05032", label: "Git", angle: 240 },
];

type OrbitIconProps = {
  Icon: React.ElementType;
  color: string;
  label: string;
  angle: number;
  radius: number;
};

function OrbitIcon({
  Icon,
  color,
  label,
  angle,
  radius,
}: OrbitIconProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `
          translate(-50%, -50%)
          rotate(${angle}deg)
          translateX(${radius}px)
        `,
      }}
    >
      <div
        style={{
          transform: `rotate(-${angle}deg)`,
        }}
        className="group flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
          <Icon size={28} weight="fill" color={color} />
        </div>

        <span className="mt-2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function TechOrbit() {
  return (
    <div className="relative flex items-center justify-center w-full h-[450px] lg:h-[500px] overflow-hidden">
      {/* Background Glow */}

      <div className="absolute w-[420px] h-[420px] rounded-full  blur-[120px]" />

      {/* Outer Orbit */}

      <div className="absolute w-[450px] h-[450px] rounded-full border border-[#E6B33C]/20 animate-[spin_35s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E6B33C]/20" />

        {OUTER_ICONS.map((item) => (
          <OrbitIcon
            key={item.label}
            Icon={item.Icon}
            color={item.color}
            label={item.label}
            angle={item.angle}
            radius={225}
          />
        ))}
      </div>

      {/* Inner Orbit */}

      <div className="absolute w-[300px] h-[300px] rounded-full border border-slate-300 animate-[spin_25s_linear_infinite_reverse]">
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-300/50" />

        {INNER_ICONS.map((item) => (
          <OrbitIcon
            key={item.label}
            Icon={item.Icon}
            color={item.color}
            label={item.label}
            angle={item.angle}
            radius={150}
          />
        ))}
      </div>

      {/* Center Circle */}

      <div className="relative z-10 flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-[#161616] via-[#161616] to-amber-50 border border-slate-200 shadow-2xl">
        <div className="absolute w-24 h-24 rounded-full bg-[#E6B33C]/20 blur-3xl animate-pulse" />

        <img
          src="https://ahaanmedia.com/asc/layouts/fav.png"
          alt="Logo"
          className="relative z-10 w-20 h-20 object-contain"
        />
      </div>
    </div>
  );
}
