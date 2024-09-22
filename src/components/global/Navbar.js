"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import useScreenType from "react-screentype-hook";

// import asset
import logo from "/public/assets/landing/niki1.png";
import { RiMenu4Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { navbar_list } from "@/matadatass/navbar_list";

export default function Navbar() {
  const screenType = useScreenType();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={twMerge(
        "w-full h-[80px]",
        isScrolled ? "bg-black shadow-xl" : "bg-transparent",
        "fixed p-4 lg:px-8 z-100 duration-200"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full relative">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <button
            className="flex items-center gap-x-3"
            onClick={() => router.push("/")}
          >
            <div className="w-8 aspect-square relative">
              <Image src={logo} alt="logo" fill draggable={false} />
            </div>
            <span className="font-bold text-[22px] text-white">EventApaYa</span>
          </button>
        </div>

        {/* Navbar List - Centered */}
        {!screenType.isMobile && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
            {navbar_list.map((item, index) => (
              <button
                key={index}
                className={twMerge(
                  "font-medium text-[16px]",
                  pathname === item.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}

        {/* Login Button and Mobile Menu Icon */}
        <div className="flex-shrink-0">
          {screenType.isMobile ? (
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <RiMenu4Fill
                className={`w-[24px] h-[24px] text-white ${
                  isMobileMenuOpen ? "hidden" : ""
                }`}
              />
              <HiX
                className={`w-[24px] h-[24px] text-white ${
                  isMobileMenuOpen ? "" : "hidden"
                }`}
              />
            </button>
          ) : (
            <button
              className="bg-white text-black font-medium text-[16px] px-6 py-2 rounded"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {screenType.isMobile && (
        <div
          className={`absolute top-[80px] left-0 w-full bg-black ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {navbar_list.map((item, index) => (
            <button
              key={index}
              className="w-full py-3 text-left px-4 text-white font-medium text-[16px] hover:bg-gray-800"
              onClick={() => {
                router.push(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
          <button
            className="w-full py-3 text-left px-4 text-white font-medium text-[16px] hover:bg-gray-800"
            onClick={() => {
              router.push("/login");
              setIsMobileMenuOpen(false);
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
