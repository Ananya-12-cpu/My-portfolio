"use client";

import Image from "next/image";
import React from "react";
import { OutlineButton, SolidButton } from "./Buttons";
import { useRouter } from "next/navigation";

function PortfolioBanner() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Hey, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Ananya
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Crafting Engaging Digital Experiences. Transform your vision into
              reality with beautifully designed, high-performance websites.
              Whether it&apos;s a sleek portfolio, an e-commerce platform, or a
              business solution, I specialize in creating seamless digital
              experiences across all devices. Let&apos;s collaborate and build
              something amazing!
            </p>
            {/* Buttons Section */}
            <div className="flex flex-wrap gap-4 pt-4">
              <OutlineButton
                text="My Skills"
                RenderFunction={() => router.push("/skill")}
              />
            
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="/images/user.png"
              alt="Picture of the author"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioBanner;
