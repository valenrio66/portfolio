"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
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

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

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
      {/* Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50"
      >
        <Disclosure
          as="nav"
          className="bg-gray-900/80 backdrop-blur-md border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
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

              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex shrink-0 items-center">
                  <Image
                    src="/logo-vr.png"
                    alt="VR Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>

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
      </motion.div>

      {/* Hero Section */}
      <div
        id="home"
        className="w-full min-h-screen flex flex-col md:flex-row items-center bg-gray-900 text-white pt-10 md:pt-0 overflow-hidden"
      >
        <div className="flex-1 p-6 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-amber-500 mb-2 font-semibold tracking-wide"
          >
            Hello, My Name Is
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Valen Rionald
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8"
          >
            Backend Developer | Golang, Python, PHP | Scalable APIs, Database
            Optimization, System Integration.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="flex-1 flex flex-col justify-center items-center p-6 order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-amber-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              alt="Valen Rionald"
              src="valen.jpg"
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <SectionWrapper id="about">
        <AboutMe />
      </SectionWrapper>

      {/* Resume Section */}
      <SectionWrapper id="resume">
        <Resume />
      </SectionWrapper>

      {/* Contact Me Section */}
      <SectionWrapper id="contact">
        <ContactMe />
      </SectionWrapper>
    </>
  );
}
