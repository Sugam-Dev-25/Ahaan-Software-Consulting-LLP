import { useEffect, useRef, useState } from "react";

interface Service {
    title: string;
    description: string;
    // Custom SVG component function
    Icon: React.FC<{ className?: string }>;
}

const services: Service[] = [
    {
        title: "Software Development",
        description:
            "Custom software solutions tailored to business needs, ensuring scalability, performance, and innovation for seamless digital transformation and growth.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
    },
    {
        title: "Web Development",
        description:
            "We build responsive, secure, and highly user-friendly websites tailored to your brand, enhancing online presence and driving sustainable business success.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" />
                <path d="M16 21V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v14M12 12h.01" />
            </svg>
        ),
    },
    {
        title: "IT Business Consultancy",
        description:
            "Providing expert IT consulting to optimize operations, drive innovation, and align technology strategies with your business goals for maximum impact.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2 2M5 3 2 6M19 3l3 6M12 21v1" />
            </svg>
        ),
    },
    {
        title: "UI & UX Design",
        description:
            "Crafting intuitive, engaging, and user-centered designs that enhance usability, improve user satisfaction, and elevate your brand's digital experience.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
                <path d="M2 22h20" />
            </svg>
        ),
    },
    {
        title: "Infrastructure Plan",
        description:
            "We provide the most responsive and functional IT design for companies and businesses worldwide.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="6" rx="6" ry="3" />
                <path d="M6 6v6c0 1.66 2.7 3 6 3s6-1.34 6-3V6" />
                <path d="M6 12v6c0 1.66 2.7 3 6 3s6-1.34 6-3v-6" />
            </svg>
        ),
    },
    {
        title: "IT Management",
        description:
            "It's possible to simultaneously manage and transform information from one server to another.",
        Icon: ({ className }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z" />
                <path d="M8 6h6M8 10h6M8 14h6" />
            </svg>
        ),
    },
];

export const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);
    const [animGen, setAnimGen] = useState<number[]>(() => services.map(() => 0));

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const replay = (index: number) => {
        setAnimGen((prev) => {
            const next = [...prev];
            next[index] = next[index] + 1;
            return next;
        });
    };

    return (
        <section ref={sectionRef} className="bg-[#ffffff] max-w-[1600px] mx-auto px-4 py-20 font-sans">
            <style>{`
        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }
        .svg-animate path, .svg-animate rect, .svg-animate circle, .svg-animate ellipse {
          stroke-dasharray: 70;
          stroke-dashoffset: 70;
        }
        .is-visible .svg-animate path,
        .is-visible .svg-animate rect,
        .is-visible .svg-animate circle,
        .is-visible .svg-animate ellipse {
          animation: drawStroke 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .svg-animate path, .svg-animate rect, .svg-animate circle, .svg-animate ellipse {
            stroke-dashoffset: 0 !important;
            animation: none !important;
          }
        }
      `}</style>

            <div className="max-w-6xl mx-auto  text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                    Our Core Services <br />

                </h2>
                <p className="lg:text-base text-sm px-4 sm:px-8 mt-2">
                    We are driven by a passion to deliver excellence through continuous
                    innovation and cutting-edge technology — creating intelligent,
                    scalable, and future-ready solutions that empower businesses,
                    transform industries, and inspire progress across the digital
                    landscape.
                </p>
            </div>

            {/* 3 Columns Grid System */}
            <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-0  lg:px-4">
                {services.map(({ title, description, Icon }, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => replay(index)}
                        className="group flex lg:gap-5 gap-2 items-start bg-transparent p-2 lg:p-4 rounded-xl transition-all duration-300 ease-out  hover:bg-white hover:-translate-y-1 hover:shadow-[0_28px_40px_-14px_rgba(196,138,24,0.35)]"
                    >
                        {/* Custom Icon Container */}
                        <div className="flex-shrink-0 pt-1">
                            <div
                                key={`${inView ? "in" : "out"}-${animGen[index]}`}
                                className={`w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-neutral-800 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${inView ? "is-visible" : ""
                                    }`}
                            >
                                <Icon className="w-12 h-12 svg-animate" />
                            </div>
                        </div>

                        {/* Typography Content */}
                        <div className="flex flex-col items-start text-left">
                            <h3 className="mb-2 text-sm lg:text-[21px] font-bold text-[#1c1d20] tracking-tight transition-colors duration-200 group-hover:text-[#C48A18]">
                                {title}
                            </h3>
                            <p className="text-xs lg:text-base  leading-[1.65] text-gray-500 font-normal mb-3.5 max-w-[280px]">
                                {description}
                            </p>
                            <a
                                href="#"
                                className="text-[14px] font-bold text-[#C48A18] inline-flex items-center gap-1 transition-all duration-200 group-hover:gap-2 hover:underline"
                            >
                                Discover now <span className="text-[15px] font-normal">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Action Footer Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <button className="shine-btn relative overflow-hidden uppercase
                bg-gradient-to-r
                from-[#C48A18]
                to-[#E6B33C]
                px-5
                xl:px-6
                2xl:px-8
                py-3
                xl:py-3.5
                text-sm
                xl:text-base
                font-semibold
                text-black
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-[#B57A0C]
                hover:to-[#D69D20]">
                    Talk to a consultant
                </button>
                <button className="shine-btn  w-full sm:w-auto px-7 py-3.5 text-[14px] font-bold text-[#C48A18] bg-transparent  border border-[#C48A18]/30 hover:border-[#C48A18] hover:bg-[#C48A18]/05 transition-all">
                    Contact us now
                </button>
            </div>
        </section>
    );
};