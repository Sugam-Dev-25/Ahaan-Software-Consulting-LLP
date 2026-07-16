import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  SortAscendingIcon,
  X,
  PhoneOutgoingIcon,
  MapPinIcon,
  AlarmIcon,
} from "@phosphor-icons/react";

import { MobileSidebar } from "./MobileSidebar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "IT Services", path: "/services" },
    { name: "Case Studies", path: "/case-study" },
    { name: "Solution", path: "/solution" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">

      {/* ================= TOP HEADER ================= */}

      <div className="hidden xl:block border-b border-gray-200">

        <div className="mx-auto flex h-28 max-w-[1600px] items-center justify-between px-6 2xl:px-10">

          {/* Logo */}

          <img
            src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
            alt="Logo"
            className="h-14 object-contain"
          />

          {/* Right */}

          <div className="flex items-center">

            {/* Phone */}

            <div className="flex items-center gap-4 px-7">

              <PhoneOutgoingIcon
                size={38}
                weight="light"
                className="text-[#CE8827]"
              />

              <div>

                <h5 className="text-[17px] font-semibold">
                  +1-646-575-9575
                </h5>

                <p className="text-gray-500">
                  support@ahaansoftware.com
                </p>

              </div>

            </div>

            <div className="h-14 w-px bg-gray-300" />

            {/* Address */}

            <div className="flex items-center gap-4 px-7">

              <MapPinIcon
                size={38}
                weight="light"
                className="text-[#CE8827]"
              />

              <div>

                <h5 className="text-[17px] font-semibold">
                  Bengal Eco Intelligent Park
                </h5>

                <p className="text-gray-500">
                  Sector-V, Kolkata
                </p>

              </div>

            </div>

            <div className="h-14 w-px bg-gray-300" />

            {/* Time */}

            <div className="flex items-center gap-4 px-7">

              <AlarmIcon
                size={38}
                weight="light"
                className="text-[#CE8827]"
              />

              <div>

                <h5 className="text-[17px] font-semibold">
                  10:00AM - 8:00PM
                </h5>

                <p className="text-gray-500">
                  Monday to Friday
                </p>

              </div>

            </div>

            {/* Social */}

            <div className="ml-7 flex items-center gap-5">

              <InstagramLogo
                size={28}
                weight="fill"
                className="cursor-pointer transition hover:text-[#CE8827]"
              />

              <FacebookLogo
                size={28}
                weight="fill"
                className="cursor-pointer transition hover:text-[#CE8827]"
              />

              <LinkedinLogo
                size={28}
                weight="fill"
                className="cursor-pointer transition hover:text-[#CE8827]"
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="bg-[#161616] shadow-lg">

        <div className="mx-auto max-w-[1600px] px-4 lg:px-6 2xl:px-10">

          <div className="flex h-20 items-center justify-between">

            {/* ================= MOBILE HEADER ================= */}

            <div className="flex w-full items-center justify-between xl:hidden">

              {/* Logo */}

              <img
                src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
                alt="logo"
                className="h-10"
              />

              {/* Right */}

              <div className="flex items-center gap-2">

                <NavLink
                  to="/contact"
                  className=" bg-gradient-to-r from-[#C48A18] to-[#E6B33C] px-3 py-3 text-[12px] font-semibold text-black"
                >
                  Free Discover Call
                </NavLink>

                <a
                  href="tel:+16465759575"
                  className="flex h-10 w-10 items-center justify-center  bg-gradient-to-r from-[#C48A18] to-[#E6B33C] text-black shadow-lg transition hover:scale-105"
                >
                  <PhoneOutgoingIcon
                    size={28}
                    weight="light"
                  />
                </a>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex h-10 w-10 items-center justify-center  text-white "
                >
                  {menuOpen ? (
                    <X size={32} weight="light" />
                  ) : (
                    <SortAscendingIcon size={32} weight="light" />
                  )}
                </button>

              </div>

            </div>

            {/* ================= DESKTOP HEADER START ================= */}

            <div className="hidden w-full items-center justify-between xl:flex">

                            <ul className="flex items-center gap-6 2xl:gap-10">

                {menus.map((menu) => (
                  <li key={menu.path}>

                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        `relative py-8 text-[14px] xl:text-[15px] 2xl:text-[16px]
                        font-medium uppercase tracking-wide
                        transition-all duration-300

                        ${
                          isActive
                            ? "text-[#CE8827]"
                            : "text-white hover:text-[#CE8827]"
                        }

                        after:absolute
                        after:left-1/2
                        after:-translate-x-1/2
                        after:bottom-[20px]
                        after:h-[3px]
                        after:bg-[#CE8827]
                        after:rounded-full
                        after:transition-all
                        after:duration-300

                        ${
                          isActive
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full"
                        }
                        `
                      }
                    >
                      {menu.name}
                    </NavLink>

                  </li>
                ))}

              </ul>

              {/* CTA */}

              <NavLink
                to="/contact"
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
                Book A Free Discovery Call
              </NavLink>

            </div>

          </div>

        </div>

        {/* Mobile Sidebar */}

        <MobileSidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menus={menus}
        />

      </nav>

    </header>

  );
};