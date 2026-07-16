import {
  FacebookLogo,
  XLogo,
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
  GithubLogoIcon,
  BehanceLogoIcon,
  DribbbleLogoIcon,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#000] text-white">
      {/* Background Shape */}
      <div className="absolute left-0 top-0 h-60 w-96 bg-[radial-gradient(circle_at_top_left,rgb(255, 219, 76),transparent_100%)]"></div>

      <div className="mx-auto w-full max-w-[1600px] px-8 xl:px-12">
        {/* ================= Newsletter ================= */}

        <div className="flex flex-col items-center justify-between gap-10 py-14 lg:flex-row">
          {/* Left */}
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:text-left">
            {/* Logo */}
            <img
              src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
              alt="Logo"
              className="h-14 w-auto object-contain sm:h-16"
            />

            {/* Divider */}
            <div className="hidden h-16 w-[2px] bg-[#E6B33C] lg:block" />

            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                News Subscription
              </h2>

              <p className="mt-2 text-sm text-white sm:text-base lg:mt-3">
                Get Latest Deals from Waker's Inbox & Subscribe Now
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex w-full flex-col gap-4 md:flex-row lg:w-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="h-14 w-full  border border-gray-700 bg-transparent px-6 pr-14 outline-none placeholder:text-gray-400 md:w-[380px]"
              />

              <EnvelopeSimple
                size={22}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#E6B33C]"
              />
            </div>

            <button
              className="shine-btn relative overflow-hidden uppercase
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
                hover:to-[#D69D20]"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-gray-800"></div>

        {/* ================= Footer Grid Start ================= */}

        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* About Company */}

          <div>
            <h3 className="text-2xl font-semibold uppercase">About Company</h3>

            <div className="mt-5 h-[2px] w-24 bg-[#E6B33C]"></div>

            <p className="mt-8 leading-8 text-gray-400">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered users via
              team driven solutions.
            </p>

            <div className="mt-8 flex gap-4">
              {[FacebookLogo, LinkedinLogo, DribbbleLogoIcon, BehanceLogoIcon, GithubLogoIcon].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-600 transition hover:border-[#6c4cff] hover:bg-[#6c4cff]"
                  >
                    <Icon size={16} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* IT Services */}

          <div>
            <h3 className="text-2xl font-semibold uppercase">Pages</h3>

            <div className="mt-5 h-[2px] w-24 bg-[#E6B33C]"></div>

            <ul className="mt-8 space-y-5">
              {[
                "Home",
                "About Us",
                "Services",
                "Solutions",
                "Careers",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex cursor-pointer items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  <span className="text-[#E6B33C] transition group-hover:translate-x-1">
                    →
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font uppercase">Quick Links</h3>

            <div className="mt-5 h-[2px] w-24 bg-[#E6B33C]"></div>

            <ul className="mt-8 space-y-5">
              {[
                "Cookie Policy",
                "Environmental Policy",
                "Grievance Policy",
                "Information Security Policy",
                "Intellectual Property Policy",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex cursor-pointer items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  <span className="text-[#E6B33C] transition group-hover:translate-x-1">
                    →
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          

          {/* Recent Posts */}

          <div>
            <h3 className="text-2xl font-semibold uppercase">Recent Posts</h3>

            <div className="mt-5 h-[2px] w-24 bg-[#E6B33C]"></div>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200"
                  alt=""
                  className="h-20 w-20 object-cover"
                />

                <div>
                  <p className="text-sm text-[#E6B33C]">15 March, 2025</p>

                  <h4 className="mt-2 cursor-pointer text-md font-semibold leading-7 transition hover:text-[#6c4cff]">
                    Transforming Businesses Through Technology
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200"
                  alt=""
                  className="h-20 w-20  object-cover"
                />

                <div>
                  <p className="text-sm text-[#E6B33C]">28 March, 2025</p>

                  <h4 className="mt-2 cursor-pointer text-md font-semibold leading-7 transition hover:text-[#6c4cff]">
                    Creative Solutions For Modern Startups
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center lg:flex-row">
          <p className="text-gray-400 text-sm">
            © 2026{" "}
            <span className="text-[#E6B33C] font-semibold">
              Ahaan Software Consulting LLP.{" "}
            </span>
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" className="transition hover:text-[#6c4cff]">
              Privacy Policy
            </a>

            <span className="text-gray-700">|</span>

            <a href="#" className="transition hover:text-[#6c4cff]">
              Terms & Conditions
            </a>

          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#6c4cff]/20 blur-[140px]"></div>

      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#6c4cff]/10 blur-[140px]"></div>
    </footer>
  );
};
