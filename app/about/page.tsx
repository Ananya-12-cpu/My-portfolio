"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbSquareRoundedArrowRight ,TbSquareRoundedArrowLeft} from "react-icons/tb";

function AboutPage() {
  const router = useRouter();


 // Handlers for navigation
 const goToPreviousPage = () => {
  router.push("/"); 
};

const goToNextPage = () => {
  router.push("/skill"); 
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

        {/* <div className="flex justify-center items-center"> */}
        <div className="p-4">
          <div className="text-center text-5xl mb-10 "> About Me</div>
          <div className=" my-5">
            <p className="mt-4 text-gray-700">
              I am a self-taught Frontend Web Developer from India. About three
              years ago is when I started my learning journey on how to make the
              web stunning and responsive. I have always been a curious
              individual, which is why I’d love to collaborate and do some
              real-world projects in order to flourish my skills.
            </p>
            <p className="mt-4 text-gray-700">
              My journey began with a strong curiosity about how the web works,
              and this curiosity grew into a love for coding. Over the years, I
              have honed my skills in JavaScript, React, Next.js, CSS, and other
              modern web technologies. I believe in writing clean, maintainable
              code and continuously improving my development process.
              {/* I'm not perfect, however. I'm very far from perfection, yet I'm
            resilient, assertive and stubborn, and I find learning a fascinating
            process. I am currently learning about PWAs and my future plan is to
            learn about ML for Web Performance. */}
            </p>
          </div>
        </div>
      </div>
    
    </div>






















      
    </div>
  );
}

export default AboutPage;
