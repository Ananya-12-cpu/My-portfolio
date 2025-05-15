 

'use client'

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
        style={{
          position: "absolute",
          right: "10px",
          top: "40vh",
          transform: "translateY(-50%)",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={()=>goToNextPage()}
      >
        <TbSquareRoundedArrowRight/>
        {/* Right Arrow Symbol */}
      </button>

      <PortfolioBanner />
    
    </div>
  );
}
