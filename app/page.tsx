import Image from "next/image";

import header from "@/app/imgs/header.png";
import user from "@/app/imgs/user.svg";

import graph from "@/app/imgs/graph.svg";
import system from "@/app/imgs/system.svg";
import tag from "@/app/imgs/tag.svg";

import discord from "@/app/imgs/discord.svg";
import link from "@/app/imgs/link.svg";
import twitter from "@/app/imgs/twitter.svg";
import instagram from "@/app/imgs/instagram.svg";

import grayLogo from "@/app/imgs/gray-logo.svg";

import { AccordionItem } from "./components/AccordionItem";
import { Navbar } from "./components/Navbar";
import { data } from "./constants";

export default function Home() {
  return (
    <main className="bg-black min-h-screen h-auto text-zinc-50 flex flex-col">
      <Navbar />

      <div className="relative w-auto h-auto overflow-hidden">
        <div className="p-8 relative z-50 text-center justify-center flex flex-col">
          <Image className="w-full mx-auto" src={header} alt="header-img" />
          <Image
            className="w-16 md:w-24 lg:w-36 mx-auto -mt-7 sm:-mt-10 md:-mt-14 lg:-mt-16"
            src={user}
            alt="user-img"
          />
          <div className="mb-11">
            <h1 className="text-5xl font-bold mt-4 mb-3">Lorem ipsum</h1>
            <div className="flex justify-center mb-2">
              <p>Created by:</p>
              <span className="text-red-500 ml-2">Tiago Soriano</span>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div className="mb-11 md:flex-col grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl sm:mx-auto">
            <div className=" rounded-md bg-neutral-900 bg-opacity-75 px-6 py-2 flex items-center">
              <Image className="w-5 mr-2" src={graph} alt="graph-icon" />
              <p>Lorem ipsum</p>
            </div>
            <div className="rounded-md bg-black px-6 py-2 flex items-center">
              <Image className="w-5 mr-2" src={system} alt="system-icon" />
              <p>Lorem ipsum</p>
            </div>
            <div className="rounded-md bg-neutral-900 bg-opacity-75 px-6 py-2 flex items-center">
              <Image className="w-5 mr-2" src={tag} alt="tag-icon" />
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:mx-10">
            <AccordionItem>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-8 mb-5 w-full md:w-2/3">
                  <a
                    href="#"
                    className="py-2 flex items-center cursor-pointer "
                  >
                    <Image className="w-7 mr-2" src={link} alt="link-icon" />
                    <p className="text-red-500 hover:text-red-700">
                      Lorem ipsum.com
                    </p>
                  </a>
                  <a href="#" className="py-2 flex items-center cursor-pointer">
                    <Image
                      className="w-7 mr-2"
                      src={discord}
                      alt="discord-icon"
                    />
                    <p className="text-red-500 hover:text-red-700">
                      @Lorem ipsum
                    </p>
                  </a>
                  <a href="#" className="py-2 flex items-center cursor-pointer">
                    <Image
                      className="w-7 mr-2"
                      src={instagram}
                      alt="instagram-icon"
                    />
                    <p className="text-red-500 hover:text-red-700">
                      @Lorem ipsum
                    </p>
                  </a>
                  <a href="#" className="py-2 flex items-center cursor-pointer">
                    <Image
                      className="w-7 mr-2"
                      src={twitter}
                      alt="twitter-icon"
                    />
                    <p className="hover:text-zinc-400">@Lorem ipsum</p>
                  </a>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem showQuestionIcon>
              <div className="relative">
                <div className="bg-zinc-800 w-0.5 h-full absolute right-2 top-0"></div>

                <div className="overflow-auto h-80 grid grid-cols-1  md:grid-cols-3 gap-3 pr-5 relative">
                  {data.map((item) => (
                    <div
                      key={item.tag}
                      className={`bg-neutral-950 border-2 ${
                        item.isSelected
                          ? "border-red-500"
                          : "border-neutral-950"
                      } rounded-md p-3 h-min text-center overflow-clip`}
                    >
                      <p className="text-zinc-500">{item.tag}</p>
                      <p className="font-bold text-xl">{item.title}</p>
                      <p className="text-zinc-500">{item.percentage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionItem>
            <div />
            <AccordionItem>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </AccordionItem>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#2E2D66] via-[#3A273F] to-[#181818] animate-gradient-x w-screen h-full absolute top-0 left-40"></div>
      </div>
      <footer className="h-52 justify-center flex">
        <Image className="w-56" src={grayLogo} alt="logo-img" />
      </footer>
    </main>
  );
}
