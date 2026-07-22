import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

interface SolutionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
}

const solutionsData: SolutionItem[] = [
  {
    id: 1,
    title: "E-Commerce Solutions",
    description:
      "Scalable e-commerce platforms, secure payment gateway integrations, and personalized shopping experiences to drive sales.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
    path: "/solution/ecommerce",
  },
  {
    id: 2,
    title: "Education & EdTech",
    description:
      "Interactive Learning Management Systems (LMS), virtual classrooms, and smart administrative tools for educational institutions.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
    path: "/solution/education",
  },
  {
    id: 3,
    title: "Travel & Hospitality",
    description:
      "Comprehensive booking engines, reservation management systems, and tailored customer engagement solutions for tourism.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=400",
    path: "/solution/travel-hospitality",
  },
  {
    id: 4,
    title: "Social Networking",
    description:
      "Custom social networking engines, real-time messaging, content sharing channels, and community management platforms.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=400",
    path: "/solution/social-networking",
  },
  {
    id: 5,
    title: "Healthcare Solutions",
    description:
      "HIPAA-compliant telemedicine apps, Electronic Health Records (EHR) management, and patient care management tools.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
    path: "/solution/healthcare",
  },
  {
    id: 6,
    title: "Real Estate Tech",
    description:
      "Property listing platforms, virtual tour integrations, and automated CRM tools for realtors and buyers.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
    path: "/solution/real-estate",
  },
  {
    id: 7,
    title: "Construction Tech",
    description:
      "Project management, site monitoring, resource allocation software, and safety compliance platforms for construction sites.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
    path: "/solution/construction",
  },
  {
    id: 8,
    title: "Logistics & Supply Chain",
    description:
      "End-to-end fleet tracking systems, automated warehouse management, and optimized delivery route planning.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
    path: "/solution/logistics",
  },
  {
    id: 9,
    title: "Smart Manufacturing",
    description:
      "Industry 4.0 automation software, IoT-driven equipment monitoring, and enterprise inventory management systems.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    path: "/solution/manufacturing",
  },
  {
    id: 10,
    title: "Media & Entertainment",
    description:
      "High-bandwidth video streaming portals, digital rights management, and engaging content publishing platforms.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
    path: "/solution/media-entertainment",
  },
];

const SolutionsGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-yellow-100/5 via-amber-50/40 to-white">
      {/* Container with max-w-[1600px] */}
      <div className="max-w-[1600px] mx-auto">
        {/* Main Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-[#1c1d20] leading-tight">
            Enterprise Software Development Services
          </h2>
          <p className="lg:text-base 2xl:text-lg text-sm px-4 sm:px-8 mt-3 text-gray-700 max-w-4xl mx-auto">
            Empower your business growth with enterprise-grade,
            industry-specific software solutions engineered to solve your unique
            operational challenges.
          </p>
        </div>

        {/* Cards Grid: Supports 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (1536px+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 gap-y-16">
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white p-5 pt-5 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center shadow-sm"
            >
              {/* Image Box */}
              <div className="w-full h-60 mb-8 shadow-md overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d29b38] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-black text-md leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Hover / Bottom Dynamic Link Button */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <Link to={item.path}>
                  <button
                    aria-label={item.title}
                    className="shine-btn group/btn flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-[#d29b38] text-[#d29b38] hover:text-white shadow-md transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                      Learn More
                    </span>
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transform -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;