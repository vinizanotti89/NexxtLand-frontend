"use client";
/* eslint-disable @next/next/no-img-element */
import TopBar from "./TopBar";
import NavLinks from "./NavLinks";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import { Container } from "../Partials/Container";
import useMenuHamburguerStore from "../../stores/useMenuHamburguerStore";
import { useEffect } from "react";
import Icon from "../Adapters/Icon";
import { Button } from "../Buttons/Button";

export function Header() {
  const { y } = useWindowScroll();
  const { setShowMenuHamburguer } = useMenuHamburguerStore();

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full h-[100px] lg:h-auto transition duration-700 ease-in-out py-4 ${
        y > 0
          ? "bg-black transition duration-700 ease-in-out"
          : "bg-gradient-to-b py-4 via-black/80 lg:via-black/70  lg:py-0 from-black to-transparent"
      } `}
    >
      <TopBar />
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/img/logo/logo-nexxland.png"
              alt="Logo NexxLand"
              className="py-3 transition duration-700 hidden lg:block ease-in-out cursor-pointer"
              style={{ height: y > 0 ? "3rem" : "4rem" }}
            />
            <img
              src="/img/logo/logo-reduzida.png"
              alt="logo para mobile"
              className="py-1 h-14 lg:hidden block transition duration-700 ease-in-out cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-8">
            <NavLinks />
            {/* <div className="hidden lg:flex">
              <Link href={"/login"}>
                <Button variant="outlinedWhite">ACESSAR PLATAFORMA</Button>
              </Link>
            </div> */}
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  );
}
