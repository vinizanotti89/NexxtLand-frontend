"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../Buttons/Button";
import SwiperLands from "../Swipers/SwiperLands";
import { Fade } from "react-awesome-reveal";

export default function SectionLand() {
  return (
    <div className="bg-white py-10 md:py-20 lg:block hidden">
      <div className="main_container">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-start justify-between">
            <div>
            <Fade direction="up" duration={2000}>
              <h2 className="text-2xl md:text-3xl lg:mr-10 lg:text-3xl text-brand-black-50 font-black mb-4 text-center md:text-start uppercase">
                REALIZE SEU SONHO DE INVESTIR NOS ESTADOS UNIDOS TERRENOS NA
                FLÓRIDA AO SEU ALCANCE
              </h2>
            </Fade>

            <p className=" text-zinc-500 max-w-full md:max-w-[85%] mb-10 text-center md:text-start">
              Veja os mais variados tipos terrenos disponíveis para você que
              sonha em ter seu investimento nos EUA
            </p>
            </div>
            <Link href="/terrenos" passHref legacyBehavior>
              <Button variant="outlinedGold">VEJA MAIS</Button>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-8 hidden md:block">
            <Fade duration={2000}>
              <SwiperLands />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
