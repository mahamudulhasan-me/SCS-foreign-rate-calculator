"use client";
import CarriersInput from "@/components/CarriersInput";
import CountriesInput from "@/components/CountriesInput";
import ServicesInput from "@/components/ServicesInput";
import { fetchGetCalculateRate } from "@/utils/graphqlAPI";
import { FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [carrier, setCarrier] = useState("");
  const [weight, setWeight] = useState("");
  const [dataVariables, setDataVariables] = useState({});
  const [rate, setRate] = useState(null);

  const calculateRate = () => {
    setDataVariables({ country, service, carrier, weight: parseFloat(weight) });
  };

  useEffect(() => {
    fetchGetCalculateRate(dataVariables)
      .then((res) => {
        setRate(res.data.data.getRate.result);
      })
      .catch((err) => console.log("err", err));
  }, [dataVariables]);

  console.log(rate);
  return (
    <div className="w-4/5 mx-auto text-center mt-10 text-gray-700">
      <h2 className="text-3xl font-bold ">International Coverage</h2>
      <p>
        You can calculate the international rate of the Sundarban Courier
        Service (Pvt.) Ltd. here
      </p>
      <div className="flex justify-between items-start gap-10 my-8">
        <CountriesInput setCountry={setCountry} />

        <ServicesInput setService={setService} />

        <CarriersInput setCarrier={setCarrier} />
        <div className="w-full">
          <TextField
            onChange={(e) => setWeight(e.target.value)}
            label="Weight"
            variant="outlined"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <FormHelperText className="ml-3">*weight in kilograms</FormHelperText>
        </div>
      </div>

      <p
        className={`text-2xl  font-semibold  ${
          rate ? "text-orange-500" : "text-transparent"
        }`}
      >
        Rate: {rate} Taka
      </p>

      <div>
        <button
          className="bg-[#1976D2] text-lg px-8 py-3 rounded-md text-white mt-5"
          onClick={calculateRate}
        >
          Calculate
        </button>
      </div>
      <p className="text-sm absolute bottom-10 left-10 right-10">
        *Rates can be changed depending on currency conversion rate and fuel
        price. Please contact our customer service at{" "}
        <span className="text-blue-600 hover:underline">09612003003</span> for
        more information
      </p>
    </div>
  );
};

export default HomePage;
