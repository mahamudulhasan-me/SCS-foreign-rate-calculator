// pages/rates.js
import CarriersInput from "@/components/FormControl/CarriersInput";
import CountryInput from "@/components/FormControl/CountryInput";
import ServiceInput from "@/components/FormControl/ServiceInput";
import WeightInput from "@/components/FormControl/WeightInput";
import fetchRates from "@/utils/getRate";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { ScaleLoader } from "react-spinners";
import { FaChevronCircleRight } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import taka from "../assets/taka.png";

const GetRate = ({ initialRates }) => {
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [carrier, setCarrier] = useState("");
  const [weight, setWeight] = useState(0);
  const [rates, setRates] = useState(initialRates); // State to hold rates
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // State to show loading
  const [activeOnChangeResult, setActiveOnChangeResult] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (country && service && carrier && weight) {
      if (weight < 0) {
        setWeight(0);
        toast.warning("Weight must be greater than 0");
        return;
      }
      fetchRatesAndUpdateState();
      setActiveOnChangeResult(true);
    } else {
      toast.warning("Please fill all the fields");
    }
  };
  // useEffect to fetch rates whenever input values change
  useEffect(() => {
    if (activeOnChangeResult) {
      if (weight < 0) {
        toast.warning("Weight must be greater than 0");
      } else {
        fetchRatesAndUpdateState();
      }
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
          <WeightInput weight={weight} setWeight={setWeight} />
        </div>
        <div className="flex lg:w-1/3 md:w-1/2 w-full h-28 items-center bg-[#E3F2FC] rounded-md  mx-auto p-4 mt-20 gap-5">
          <Button
            type="submit"
            className="bg-[#0C4A9A] hover:bg-[#3C74BD] text-white font-semibold py-2 px-4"
          >
            Get Rate
          </Button>

          <div>
            {error ? (
              <span className="text-sm text-rose-600">{error}</span>
            ) : (
              <div className="flex items-center h-10">
                <Image src={taka} alt="taka" width={20} height={20}></Image>

                {loading ? (
                  <p>
                    <PulseLoader color="#36d7b7" size={10} />
                  </p>
                ) : (
                  <span className="font-bold text-[#08919E] text-2xl">
                    {rates || 0}
                  </span>
                )}
              </div>
            )}
            <div className="flex h-5 items-center gap-3 mt-4 text-gray-700">
              <p>View Details</p>{" "}
              <FaChevronCircleRight size={25} color="#08919E" />
            </div>
          </div>
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
export default GetRate;
