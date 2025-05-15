// pages/index.js
'use client'
import { useRouter } from 'next/navigation';
import BarChart from '../components/BarChart';
import { TbSquareRoundedArrowRight ,TbSquareRoundedArrowLeft} from "react-icons/tb";

function SkillPage() {
  const router = useRouter();


  // Handlers for navigation
  const goToPreviousPage = () => {
   router.push("/about"); 
 };
 
 const goToNextPage = () => {
  router.push("/works"); 
 };
 
  // Data for the chart
  const data = {
    labels: ['React Js', 'Next Js', 'JavaScript','TypeScript', 'HTML', 'CSS','Bootstrap'],
    datasets: [
      {
        label: 'My Skills',
        data: [10, 10, 8,5, 8, 5,9],
        backgroundColor: '#5a67d0',
        borderColor: '#5a67d0',
        borderWidth: 1,
        
      },
    ],
  };

  // Chart options
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Monthly Sales Chart',
  //     },
  //   },
  // };

  return (<>
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


      <div className='flex flex-row min-h-screen justify-center items-center'>
 <div className='h-[70%] w-[70%]'>
      {/* <h1>Bar Chart Example</h1> */}
      <BarChart data={data}
      
      //  options={options}
        />
    </div>
    </div>


      </div>
    
   
 </> );
}
export default SkillPage