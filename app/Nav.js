"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "./logo.svg"


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bgimage flex items-center justify-between  py-8 px-10">
      <a href="/">
      <Image src={Logo} alt="logo" width={100} height={100} />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="text-black flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://wa.me/qr/N5YM5AJBRZ3ZF1">Still Bored?</a>
              </li>
              
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="https://wa.me/qr/N5YM5AJBRZ3ZF1">Still Bored?</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
