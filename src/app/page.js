"use client";
import CarriersInput from "@/components/CarriersInput";
import CountriesInput from "@/components/CountriesInput";
import ServicesInput from "@/components/ServicesInput";
const HomePage = () => {
  return (
    <div className="w-4/5 mx-auto text-center mt-10 text-gray-700">
      <h2 className="text-3xl font-bold ">International Coverage</h2>
      <p>
        You can calculate the international rate of the Sundarban Courier
        Service (Pvt.) Ltd. here
      </p>
      <CountriesInput />

      <ServicesInput />

      <CarriersInput />

      <div>
        <button>Calculate</button>
      </div>
    </div>
  );
};

export default HomePage;
