"use client";

import Image from "next/image";
import React from "react";
import { OutlineButton, SolidButton } from "./Buttons";
import { useRouter } from "next/navigation";

function PortfolioBanner() {
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Hey, I&apos;m <span className="text-indigo-600">Ananya</span>
          </h1>
          <p className="mt-6 text-gray-400 text-sm max-w-lg">
            Crafting Engaging Digital Experiences. Transform your vision into
            reality with beautifully designed, high-performance websites.
            Whether it&apos;s a sleek portfolio, an e-commerce platform, or a
            business solution, I specialize in creating seamless digital
            experiences across all devices. Let&apos;s collaborate and build
            something amazing!
          </p>
          {/* Buttons Section */}
          <div className="mt-10 space-x-4">
         
         
             {/* <a href="/resume.pdf" download>
              <SolidButton text="Get Resume" />
            </a> */}
            <OutlineButton
              text="My Skills"
              RenderFunction={() => router.push("/skill")}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/user.png"
            width={1440}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioBanner;
