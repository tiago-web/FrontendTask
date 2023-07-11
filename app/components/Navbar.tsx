"use client";
import Image from "next/image";

import whiteLogo from "@/app/imgs/white-logo.svg";
import viewIcon from "@/app/imgs/view.svg";

import hamburgerIcon from "@/app/imgs/hamburger.svg";
import { useCallback, useEffect, useState } from "react";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    function onResize() {
      setOpenMobileMenu(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setOpenMobileMenu((prevState) => !prevState);
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-[#665AEF] to-[#FC364C]  ${
        openMobileMenu ? "h-64" : "h-24"
      }`}
    >
      <div
        className={`w-full bg-black flex px-8 py-6 justify-between ${
          openMobileMenu && "h-60"
        }`}
      >
        <Image
          className={`${openMobileMenu ? "hidden" : "w-48"}`}
          src={whiteLogo}
          alt="logo-img"
        />

        <div className="space-x-7 items-center w-full hidden sm:flex">
          <div className="flex w-full md:ml-24 ml-4">
            <Image
              className="w-10 rounded-l-md bg-neutral-800 p-2 pl-3"
              src={viewIcon}
              alt="view-icon"
            />
            <input
              type="text"
              className="rounded-r-md bg-neutral-800 flex-1 w-full px-1 py-2 outline-none"
              placeholder="Lorem ipsum"
            />
          </div>

          <nav className="space-x-7">
            <a href="#" className="hover:text-zinc-400">
              Lorem
            </a>
            <a href="#" className="hover:text-zinc-400">
              Lorem
            </a>
            <a href="#" className="hover:text-zinc-400">
              Lorem
            </a>
          </nav>
        </div>

        <div
          className={`flex sm:hidden fill-white stroke-slate-50 text-white ${
            openMobileMenu ? "pt-3" : "py-3"
          } w-full`}
        >
          {!openMobileMenu && (
            <Image
              className="fill-white text-white stroke-slate-50 w-6 cursor-pointer ml-auto"
              src={hamburgerIcon}
              alt="hamburger-icon"
              onClick={toggleMobileMenu}
            />
          )}

          {openMobileMenu && (
            <div className="flex flex-col space-y-3 w-full">
              {/* todo: replace with close icon */}
              <div className="flex w-full items-center mb-4">
                <Image className={`w-48`} src={whiteLogo} alt="logo" />
                <Image
                  className="fill-white text-white stroke-slate-50 w-6 cursor-pointer ml-auto"
                  src={hamburgerIcon}
                  alt="hamburger-icon"
                  onClick={toggleMobileMenu}
                />
              </div>

              <div className="flex w-full ">
                <Image
                  className="w-10 rounded-l-md bg-neutral-800 p-2 pl-3"
                  src={viewIcon}
                  alt="view-icon"
                />
                <input
                  type="text"
                  className="rounded-r-md bg-neutral-800 flex-1 w-full px-1 py-2 outline-none"
                  placeholder="Lorem ipsum"
                />
              </div>

              <a href="#" className="hover:text-zinc-400">
                Lorem
              </a>
              <a href="#" className="hover:text-zinc-400">
                Lorem
              </a>
              <a href="#" className="hover:text-zinc-400">
                Lorem
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
