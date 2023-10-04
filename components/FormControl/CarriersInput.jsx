import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import taka from "../../assets/taka.png";
import CarriersInput from "./CarriersInput";
import CountryInput from "./CountryInput";
import ServiceInput from "./ServiceInput";
import WeightInput from "./WeightInput";

const GET_RATES = gql`
  query GetRate(
    $country: String!
    $service: String!
    $carrier: String!
    $weight: Float!
  ) {
    getRate(
      country: $country
      service: $service
      carrier: $carrier
      weight: $weight
    ) {
      result
    }
  }
`;

const FormControl = () => {
  const [variablesData, setVariablesData] = useState({});
  const { loading, error, data, refetch } = useQuery(GET_RATES, {
    variables: variablesData,
    fetchPolicy: "no-cache",
  });
  const rates = data?.getRate.result;

  useEffect(() => {
    // This effect will be triggered whenever variablesData changes.
    // You can use it to refetch the data without submitting the form.
    refetch();
  }, [variablesData, refetch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariablesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="md:px-[10%] px-[5%] h-[calc(100vh-4.2rem)] z-20 mx-auto pt-10 text-gray-800">
      <h2 className="text-2xl font-semibold text-slate-800 my-4 ">
        International Coverage
      </h2>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start md:gap-10 gap-5">
          <CountryInput name="country" onChange={handleInputChange} />
          <ServiceInput name="service" onChange={handleInputChange} />
          <CarriersInput name="carrier" onChange={handleInputChange} />
          <WeightInput name="weight" onChange={handleInputChange} />
        </div>
        <div className="grid grid-cols-2 justify-center items-center bg-[#E3F2FC] rounded-md w-fit mx-auto p-4 mt-20 gap-5">
          <Button
            type="button"
            className="bg-[#0C4A9A] hover:bg-[#3C74BD] text-white font-semibold py-2 px-4"
            onClick={() => refetch()}
          >
            Calculate
          </Button>
          <div className="flex items-center">
            <Image src={taka} alt="taka" width={20} height={20}></Image>
            <span className="font-bold text-[#08919E] text-2xl">
              {rates || 0}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormControl;
