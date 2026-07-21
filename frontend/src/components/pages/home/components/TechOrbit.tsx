import { useEffect, useState } from "react";

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

function responsiveRadius() {
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 1024) {
        setRadius(92);
      } else if (window.innerWidth < 1200) {
        setRadius(120);
      } else {
        setRadius(150);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return radius;
}

function flexibleRadius() {
  const [radius, setRadius] = useState(225);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 1024) {
        setRadius(162);
      } else if (window.innerWidth < 1200) {
        setRadius(210);
      } else {
        setRadius(225);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return radius;
}


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
          className="w-10 h-10
            md:w-12 xl:w-14
            md:h-12 xl:h-14
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
            className="w-8 h-8 xl:w-10 xl:h-10 object-contain"
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
  const  innerRadius = responsiveRadius();
   const outerRadius = flexibleRadius();
  return (
    <div className="relative flex items-center justify-center w-full h-[500px] lg:h-[650px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#E6B33C]/10 blur-[120px] px-2" />

      {/* Outer Orbit */}
      <div className="absolute w-[325px] h-[325px] md:w-[425px] md:h-[425px] xl:w-[450px] xl:h-[450px] rounded-full border border-[#E6B33C]/20 animate-[spin_35s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E6B33C]/20" />

        {OUTER_ICONS.map((item) => (
          <OrbitIcon
            key={item.label}
            image={item.image}
            label={item.label}
            angle={item.angle}
            radius={outerRadius}
          />
        ))}
      </div>

      {/* Inner Orbit */}
      <div className="absolute w-[185px] h-[185px] md:w-[245px] md:h-[245px]  xl:w-[300px] xl:h-[300px] rounded-full border border-slate-300 animate-[spin_25s_linear_infinite_reverse]">
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-300/50" />

        {INNER_ICONS.map((item) => (
          <OrbitIcon
            key={item.label}
            image={item.image}
            label={item.label}
            angle={item.angle}
            radius={innerRadius}
          />
        ))}
      </div>

      {/* Center Circle */}
      <div className="relative z-10 flex items-center justify-center  w-14 h-14  md:w-18 md:h-18 xl:w-40 xl:h-40 rounded-full bg-gradient-to-br from-[#161616] via-[#161616] to-amber-50 border border-slate-200 shadow-2xl">
        <div className="absolute  w-10 h-10  md:w-12 md:h-12 xl:w-24 xl:h-24 rounded-full bg-[#E6B33C]/20 blur-3xl animate-pulse" />

        <img
          src="https://ahaanmedia.com/asc/layouts/fav.png"
          alt="Logo"
          className="relative z-10 w-10 h-10 md:w-12 md:h-12 xl:w-20 xl:h-20 object-contain"
        />
      </div>
    </div>
  );
}