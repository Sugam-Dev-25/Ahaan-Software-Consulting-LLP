import React from "react";

const OUTER_ICONS = [
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/React.webp",
    label: "React JS",
    angle: 0,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp",
    label: "Node JS",
    angle: 45,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Mongodb.webp",
    label: "MongoDB",
    angle: 90,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Wordpress.webp",
    label: "WordPress",
    angle: 135,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Shopify.webp",
    label: "Shopify",
    angle: 180,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Next.webp",
    label: "PHP",
    angle: 225,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/JS.webp",
    label: "JavaScript",
    angle: 270,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/TS.webp",
    label: "TypeScript",
    angle: 315,
  },
];

const INNER_ICONS = [
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Figma.webp",
    label: "Tailwind",
    angle: 0,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Webflow.webp",
    label: "Bootstrap",
    angle: 120,
  },
  {
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Framer.webp",
    label: "Git",
    angle: 240,
  },
];

type OrbitIconProps = {
  image: string;
  label: string;
  angle: number;
  radius: number;
};

function OrbitIcon({
  image,
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
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-white
            border
            border-slate-200
            shadow-xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            hover:border-[#E6B33C]
            hover:shadow-[0_18px_35px_-12px_rgba(196,138,24,0.35)]
          "
        >
          <img
            src={image}
            alt={label}
            className="w-10 h-10 object-contain"
            draggable={false}
          />
        </div>

        <span className="mt-2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
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
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#E6B33C]/10 blur-[120px]" />

      {/* Outer Orbit */}
      <div className="absolute w-[450px] h-[450px] rounded-full border border-[#E6B33C]/20 animate-[spin_35s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E6B33C]/20" />

        {OUTER_ICONS.map((item) => (
          <OrbitIcon
            key={item.label}
            image={item.image}
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
            image={item.image}
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