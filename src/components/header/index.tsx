"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Mobile from "./partials/mobile";
import classNames from "classnames";
import Desktop from "./partials/desktop";
import Link from "next/link";

export default function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setScrollingDown(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 
                 w-full lg:px-container backdrop-blur-sm bg-black/60 shadow-md z-10 rounded-xl 
                 transition-transform duration-300 
                 ${scrollingDown ? "translate-y-[-400%]" : "translate-y-0"}`}
    >
      <div className="relative w-full flex flex-row justify-between items-start p-3">
        <span className="cursor-pointer">
          <Link href="/">
            <Image
              width={70}
              height={70}
              src="/internationalsLogo.webp"
              alt=""
            />
          </Link>
        </span>
        <div className="w-full mt-5 flex flex-col justify-center items-center lg:items-end">
          <div className="w-full flex flex-col items-end lg:hidden">
            <label
              htmlFor="menu"
              className="cursor-pointer flex justify-end items-end"
              onClick={handleToggle}
            >
              <div
                className={classNames(
                  "tham tham-e-squeeze tham-w-8",
                  { "tham-active": opened },
                  ""
                )}
              >
                <div className="tham-box">
                  <div className="tham-inner bg-white" />
                </div>
              </div>
            </label>
            <input
              id="menu"
              name="menu"
              type="checkbox"
              placeholder="menu"
              className="peer/menu hidden"
            />
            <Mobile handleClickClose={() => setOpened(false)} />
          </div>
          <div className="hidden lg:flex">
            <Desktop />
          </div>
        </div>
      </div>
    </div>
  );
}
