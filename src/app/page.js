"use client";

import CarriersInput from "@/components/CarriersInput";
import CountriesInput from "@/components/CountriesInput";
import ServicesInput from "@/components/ServicesInput";
import { fetchGetCalculateRate } from "@/utils/graphqlAPI";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const HomePage = () => {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [carrier, setCarrier] = useState("");
  const [weight, setWeight] = useState("");
  const [dataVariables, setDataVariables] = useState({});
  const [rate, setRate] = useState(-1);

  // calculate rate handler
  const calculateRate = () => {
    if (country && service && carrier && weight) {
      setDataVariables({
        country,
        service,
        carrier,
        weight: parseFloat(weight),
      });
    } else {
      toast.warning("Please fill all the fields", {
        position: "top-center",
      });
    }
  };

  // post rate variables
  useEffect(() => {
    fetchGetCalculateRate(dataVariables)
      .then((res) => {
        setRate(res.data.data.getRate.result);
      })
      .catch((err) => console.log("err", err));
  }, [dataVariables]);

  return (
    <div className="md:px-[10%] px-[5%] min-h-[calc(100vh-4.2rem)] z-20 mx-auto text-center pt-10 text-gray-700 flex flex-col justify-between">
      <main>
        <h2 className="text-3xl font-bold ">International Coverage</h2>
        <p>
          You can calculate the Sundarban Courier Service (Pvt.) Ltd.
          international rate here.
        </p>

        {/* input group start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start md:gap-10 gap-5 my-8">
          <CountriesInput setCountry={setCountry} />

          <ServicesInput setService={setService} />

          <CarriersInput setCarrier={setCarrier} />

          <div className="w-full">
            <TextField
              className="w-full"
              onChange={(e) => setWeight(e.target.value)}
              label="Weight"
              variant="outlined"
              type="number"
              // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <FormHelperText className="ml-3">
              *weight in kilograms
            </FormHelperText>
          </div>
        </div>
        {/* input group end */}

        {(rate === null || rate === 0) && (
          <p className="text-rose-600 font-semibold text-2xl">
            This Service is not available
          </p>
        )}
        {rate > 0 && (
          <p className="text-orange-500 font-semibold text-2xl">
            Rate: {rate} BDT
          </p>
        )}

        <div>
          <Button
            variant="contained"
            className="bg-[#1976D2] text-lg px-10 py-3 rounded-md text-white mt-5"
            onClick={calculateRate}
          >
            Calculate
          </Button>
        </div>
      </main>
      <footer>
        <p className="text-sm mb-5">
          *Rates can be changed depending on currency conversion rate and fuel
          price. Please contact our customer service at{" "}
          <span className="text-blue-600 hover:underline">09612003003</span> for
          more information
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
