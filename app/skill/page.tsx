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

  

  return (<>
  <div style={{ position: "relative" }}>
      {/* Left Arrow for Previous Page */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={goToPreviousPage}
      >
        <TbSquareRoundedArrowLeft size={32} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={goToNextPage}
      >
        <TbSquareRoundedArrowRight size={32} />
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