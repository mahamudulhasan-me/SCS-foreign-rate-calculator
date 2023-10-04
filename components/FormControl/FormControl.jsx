// import fetchRates from "@/utils/getRate";
// import { Button } from "@mui/material";
// import Image from "next/image";
// import { useState } from "react";
// import taka from "../../assets/taka.png";
// import CarriersInput from "./CarriersInput";
// import CountryInput from "./CountryInput";
// import ServiceInput from "./ServiceInput";
// import WeightInput from "./WeightInput";

// const FormControl = () => {
//   const [variablesData, setVariablesData] = useState({});
//   async function getServerSideProps() {
//     const variablesData = {
//       country: "", // initial values for your input fields
//       service: "",
//       carrier: "",
//       weight: 0,
//     };

//     const rates = await fetchRates(variablesData);

//     return {
//       props: {
//         initialRates: rates,
//       },
//     };
//   }

//   return (
//     <div className="md:px-[10%] px-[5%] h-[calc(100vh-4.2rem)] z-20 mx-auto pt-10 text-gray-800">
//       <h2 className="text-2xl font-semibold text-slate-800 my-4 ">
//         International Coverage
//       </h2>

//       <form onSubmit={handleFormSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start md:gap-10 gap-5">
//           <CountryInput setCountry={setCountry} />
//           <ServiceInput setService={setService} />
//           <CarriersInput setCarrier={setCarrier} />
//           <WeightInput setWeight={setWeight} />
//         </div>
//         <div className="grid grid-cols-2 justify-center items-center bg-[#E3F2FC] rounded-md w-fit mx-auto p-4 mt-20 gap-5">
//           <Button
//             type="submit"
//             className="bg-[#0C4A9A] hover:bg-[#3C74BD] text-white font-semibold py-2 px-4"
//           >
//             Calculate
//           </Button>
//           <div className="flex items-center">
//             <Image src={taka} alt="taka" width={20} height={20}></Image>
//             {loading ? (
//               <p>Loading</p>
//             ) : (
//               <span className="font-bold text-[#08919E] text-2xl">
//                 {rates || 0}
//               </span>
//             )}
//           </div>
//         </div>
//       </form>
//       <button onClick={() => refetch()}>refetch</button>
//     </div>
//   );
// };

// export default FormControl;
