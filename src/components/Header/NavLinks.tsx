/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Icon from "../Adapters/Icon";
import Link from "next/link";

export const navLinks = [
  {
    route: "/",
    name: "HOME",
  },
  {
    route: "/terrenos",
    name: "TERRENOS",
  },
  {
    route: "/a-nexx-land",
    name: "A NEXXLAND",
  },
  {
    route: "/como-comprar",
    name: "COMO COMPRAR?",
  },
  {
    route: "/faq",
    name: "FAQ",
  },
  {
    route: "/contato",
    name: "CONTATO",
  },
];

export default function NavLinks() {
  return (
    <>
      <div className="flex gap-4">
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.route}>
              <span className="text-white text-sm xl:text-base cursor-pointer transition-all hover:text-brand-yellow-50 link-effect">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href={"/login"}>
            <button className="text-white relative border border-brand-yellow-100 rounded-full p-3 transition duration-700 ease-in-out hover:scale-95 active:scale-90 hover:bg-brand-yellow-100">
              <Icon
                icon="fluent:cart-20-filled"
                className="text-white text-3xl"
              />
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 w-8 h-8">
                <span className="text-xs xl:text-sm text-brand-yellow-50 font-bold">
                  0
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
