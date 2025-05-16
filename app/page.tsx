"use client";

import { useRouter } from "next/navigation";
import PortfolioBanner from "./components/Banner";
// import { useRouter } from "next/router"; // Import useRouter for navigation
import { TbSquareRoundedArrowRight } from "react-icons/tb";

export default function Home() {
  const router = useRouter();

  const goToNextPage = () => {
    router.push("/about"); // Navigate to the next page (replace with your desired route)
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Left Arrow for Previous Page */}
      {/* <button
        style={{
          position: "absolute",
          left: "10px",
          top: "40vh",
          transform: "translateY(-50%)",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={goToPreviousPage}
      >
        &#8592; 
      </button> */}

      {/* Right Arrow for Next Page */}

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={goToNextPage}
      >
        <TbSquareRoundedArrowRight size={32} />
      </button>

      <PortfolioBanner />
    </div>
  );
}
