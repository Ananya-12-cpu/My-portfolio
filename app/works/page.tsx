"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbSquareRoundedArrowRight ,TbSquareRoundedArrowLeft} from "react-icons/tb";

function Work() {
  const router = useRouter();


  // Handlers for navigation
  const goToPreviousPage = () => {
   router.push("/skill"); 
 };
 
 const goToNextPage = () => {
  router.push("/contact"); 
 };
 
  return (
    <div>
        <div style={{ position: "relative" }}>
      {/* Left Arrow for Previous Page */}
      <button
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
      <TbSquareRoundedArrowLeft/>
      </button>
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
        onClick={goToNextPage}
      >
        <TbSquareRoundedArrowRight/>
        {/* Right Arrow Symbol */}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
        <div className="flex flex-col justify-center">
          <Image
            src="/images/about.png"
            width={1440}
            height={300}
            alt="Picture of the author"
          />
        </div>

       
       
        <div className="p-4">
          <div className="text-center text-5xl mb-10 "> My Work</div>
          <div className=" my-5">
            <p className="mt-4 text-gray-700">
            I am currently working on some Projects, which I will upload to my
  portfolio as soon as they are done. Here are a few little demos:
  Notifications demo, A calculator, A fictional tour&apos;s site (Work in Progress).
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Work;
