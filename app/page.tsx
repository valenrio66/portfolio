"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Contact Me", href: "#contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 300;

      const sections = ["home", "about", "resume", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- NAVBAR PORTFOLIO --- */}
      <Disclosure
        as="nav"
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Tombol Menu Mobile (Hamburger) */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>

            {/* Logo & Menu Desktop */}
            <div className="flex flex-1 items-center justify-between sm:items-stretch">
              <div className="flex shrink-0 items-center">
                <Image
                  src="/logo-vr.png" // Path ke file di folder public
                  alt="VR Logo" // Alt text untuk aksesibilitas
                  width={40} // Lebar dasar (untuk aspek rasio)
                  height={40} // Tinggi dasar (sesuai h-10 = 40px)
                  className="h-10 w-auto object-contain" // Styling agar ukurannya pas di navbar
                  priority // Agar logo diload duluan (karena di atas layar/LCP)
                />
              </div>

              {/* Menu Link (Desktop) */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => {
                    const isActive =
                      activeSection === item.href.replace("#", "");

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive
                            ? "bg-gray-800 text-amber-500"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile (Dropdown saat klik hamburger) */}
        <DisclosurePanel className="sm:hidden bg-gray-900 border-b border-white/10">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    isActive
                      ? "bg-gray-800 text-amber-500"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* --- HERO SECTION RESPONSIVE --- */}
      {/* 1. flex-col: Mobile (Atas Bawah)
          2. md:flex-row: Laptop (Kiri Kanan)
      */}
      <div
        id="home"
        className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gray-900 text-white pt-10 md:pt-0"
      >
        {/* TEXT SECTION */}
        {/* Mobile: p-6, Text Center, Items Center */}
        {/* Desktop: p-16, Text Left, Items Start */}
        <div className="flex-1 p-6 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h2 className="text-lg md:text-xl text-amber-500 mb-2 font-semibold tracking-wide">
            Hello, My Name Is
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Valen Rionald
          </h1>
          <h3 className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            Backend Developer | Golang, Python, PHP | Scalable APIs, Database
            Optimization, System Integration.
          </h3>
          <a
            href="#contact"
            className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-amber-500/25"
          >
            Contact Me
          </a>
        </div>

        {/* IMAGE SECTION */}
        {/* order-1 md:order-2: Di Mobile gambar di atas text (opsional, hapus order-* jika ingin text dulu) */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 order-1 md:order-2">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-amber-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              alt="Valen Rionald"
              src="valen.jpg"
              // size-150 ganti jadi w-64 h-64 (Mobile) dan md:w-96 md:h-96 (Laptop)
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div id="about">
        <AboutMe />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}
