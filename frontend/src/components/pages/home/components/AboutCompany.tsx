import { CheckCircleIcon } from "@phosphor-icons/react";

const features = [
  "Custom Website Development",
  "Business Web Applications",
  "Android & iOS App Development",
  "E-Commerce Solutions",
  "UI / UX Design",
  "SEO & Performance Optimization",
];

export const AboutCompany = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-28 lg:pb-24 lg:pt-36">
      {/* ================= Background Watermark ================= */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center px-4">
        <h1
          className="select-none text-center font-black uppercase tracking-[0.08em] text-[#000000]"
          style={{
            fontSize: "clamp(55px, 8.9vw, 170px)",
            lineHeight: 0.9,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          AHAAN SOFTWARE
        </h1>
      </div>

      {/* Left Ring */}
      <div className="absolute -left-28 bottom-0 h-[280px] w-[280px] rounded-full border-[45px] border-[#D4AF37]/10" />

      {/* Gold Glow */}
      <div className="absolute left-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ================= Image ================= */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
                alt="Ahaan Software"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[520px]"
              />
            </div>

            {/* Glow */}
            <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

            {/* Dot Pattern */}
            <div className="absolute -right-6 bottom-8 grid grid-cols-6 gap-2">
              {[...Array(36)].map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"
                />
              ))}
            </div>
          </div>

          {/* ================= Content ================= */}
          <div>
            <h2 className="relative z-20 text-3xl font-extrabold leading-tight text-[#1c1d20] sm:text-4xl">
              Your Trusted Partner In Software Development
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-700 lg:text-base">
              <span className="font-semibold text-black">Ahaan Software</span>{" "}
              delivers innovative digital solutions that help businesses
              establish a strong online presence and accelerate growth.
              <br />
              We specialize in custom websites, scalable web applications,
              mobile apps, eCommerce platforms, UI/UX design, and business
              software. Our team combines creativity with cutting-edge
              technology to build secure, fast, and future-ready solutions
              tailored to your business goals.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-white">
                    <CheckCircleIcon size={16} weight="bold" />
                  </div>

                  <span className="text-[15px] font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="shine-btn group mt-10 inline-flex items-center gap-3  bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Dots */}
      <div className="absolute bottom-20 right-12 hidden grid-cols-6 gap-2 md:grid">
        {[...Array(36)].map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        ))}
      </div>
    </section>
  );
};