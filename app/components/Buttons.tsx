"use client";

import React from "react";
type buttonProps = {
  text: string;
  RenderFunction?: () => void;
};

function SolidButton({ text, RenderFunction }: buttonProps) {
  return (
    <>
      <div
        className="relative inline-block text-lg group cursor-pointer"
        onClick={RenderFunction}
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-indigo-400 rounded-lg bg-indigo-400 group-hover:text-indigo-600 group-hover:bg-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-indigo-600 transition-colors duration-300 ease-out group-hover:bg-white"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
          <span className="relative">{text}</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg group-hover:bg-white group-hover:mb-0 group-hover:mr-0"></span>
      </div>
    </>
  );
}
function SoftButton({ text, RenderFunction }: buttonProps) {
  return (
    <button
      onClick={RenderFunction}
      className="bg-indigo-200 text-white px-6 py-2 rounded-lg hover:bg-indigo-300"
    >
      {text}
    </button>
  );
}
function OutlineButton({ text, RenderFunction }: buttonProps) {
  return (
    <>
      <div
        className="relative inline-block text-lg group cursor-pointer"
        onClick={RenderFunction}
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-indigo-600 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
          <span className="relative">{text}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </div>
    </>
  );
}

function GlowButton({ text, RenderFunction }: buttonProps) {
  return (
    <button
      onClick={RenderFunction}
      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono-ai text-sm font-medium text-cyan-100 bg-white/5 border border-cyan-400/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_25px_-4px_rgba(34,211,238,0.7)]"
    >
      {text}
    </button>
  );
}

function GhostButton({ text, RenderFunction }: buttonProps) {
  return (
    <button
      onClick={RenderFunction}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono-ai text-sm font-medium text-gray-300 border border-white/10 transition-all duration-300 hover:border-white/30 hover:text-white"
    >
      {text}
    </button>
  );
}

export { SolidButton, SoftButton, OutlineButton, GlowButton, GhostButton };
