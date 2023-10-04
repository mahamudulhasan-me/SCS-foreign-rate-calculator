// pages/rates.js
import CarriersInput from "@/components/FormControl/CarriersInput";
import CountryInput from "@/components/FormControl/CountryInput";
import ServiceInput from "@/components/FormControl/ServiceInput";
import WeightInput from "@/components/FormControl/WeightInput";
import fetchRates from "@/utils/getRate";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import taka from "../assets/taka.png";

const Rates = ({ initialRates }) => {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [carrier, setCarrier] = useState("");
  const [weight, setWeight] = useState(0);
  const [rates, setRates] = useState(initialRates); // State to hold rates
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // State to show loading
  const [activeOnChangeResult, setActiveOnChangeResult] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Fetch rates based on form input values
    const variablesData = {
      country,
      service,
      carrier,
      weight: parseFloat(weight),
    };

    try {
      const fetchedRates = await fetchRates(variablesData);

      // Check if the response is null or empty
      if (fetchedRates) {
        setRates(fetchedRates);
        setError("");
      } else {
        setError("Service Not Available");
        setRates(initialRates);
      }
    } catch (error) {
      setError("Service Not Available");
      setRates(initialRates);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (either success or error)
    }
    setActiveOnChangeResult(true);
  };

  const fetchRatesAndUpdateState = async () => {
    // Fetch rates based on form input values
    const variablesData = {
      country,
      service,
      carrier,
      weight: parseFloat(weight),
    };

    try {
      const fetchedRates = await fetchRates(variablesData);

      // Check if the response is null or empty
      if (fetchedRates) {
        setRates(fetchedRates);
        setError("");
      } else {
        setError("Service Not Available");
        setRates(initialRates);
      }
    } catch (error) {
      setError(
        error.message == "Response not successful: Received status code 400"
          ? setRates(0)
          : setLoading(true)
      );

      setRates(initialRates);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (either success or error)
    }
  };

  // useEffect to fetch rates whenever input values change
  useEffect(() => {
    if (activeOnChangeResult) {
      fetchRatesAndUpdateState();
    }
    setLoading(activeOnChangeResult);
  }, [country, service, carrier, weight]);
  return (
    <div className="md:px-[10%] px-[5%] h-[calc(100vh-4.2rem)] z-20 mx-auto pt-10 text-gray-800">
      <h2 className="text-2xl font-semibold text-slate-800 my-4 ">
        International Coverage
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start md:gap-10 gap-5">
          <CountryInput setCountry={setCountry} />
          <ServiceInput setService={setService} />
          <CarriersInput setCarrier={setCarrier} />
          <WeightInput setWeight={setWeight} />
        </div>
        <div className="grid grid-cols-2 justify-center items-center bg-[#E3F2FC] rounded-md w-fit mx-auto p-4 mt-20 gap-5">
          <Button
            type="submit"
            className="bg-[#0C4A9A] hover:bg-[#3C74BD] text-white font-semibold py-2 px-4"
          >
            Calculate
          </Button>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span className="text-sm text-rose-600">{error}</span>
          ) : (
            <>
              <div className="flex items-center">
                <Image src={taka} alt="taka" width={20} height={20}></Image>

                <span className="font-bold text-[#08919E] text-2xl">
                  {rates}
                </span>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export async function getServerSideProps() {
  const variablesData = {
    country: "", // initial values for your input fields
    service: "",
    carrier: "",
    weight: 0,
  };

  const initialRates = await fetchRates(variablesData);

  return {
    props: {
      initialRates,
    },
  };
}
export default Rates;
