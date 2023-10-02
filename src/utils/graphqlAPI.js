import axios from "axios";

const endPoint = "https://api-party-dashboard.sundarban.delivery/graphql";

const headers = {
  "Content-Type": "application/json",
};

// get countries query
const GetCountries = `{
  getCountries {
    result {
      list {
        name
      }
    }
  }
}`;
const countryQuery = {
  operationName: "GetCountries",
  query: `query GetCountries ${GetCountries}`,
  variables: {},
};

// get Service Query
const GetServices = `{
  getServices {
    result {
      list {
        name
      }
    }
  }
}`;
const serviceQuery = {
  operationName: "GetServices",
  query: `query GetServices ${GetServices}`,
  variables: {},
};

// get carrier Query
const GetCarriers = ` {
  getCarriers {
    result {
      list {
        name
      }
    }
  }
}`;
const carriersQuery = {
  operationName: "GetCarriers",
  query: `query GetCarriers ${GetCarriers}`,
  variables: {},
};

// calculate rate

const GetRate = `($country: String!, $service: String!, $carrier: String!, $weight: Float!) {
  getRate(country: $country, service: $service, carrier: $carrier, weight: $weight) {
    result
  }
}`;

export const fetchGetCalculateRate = (variables) => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: {
      operationName: "GetRate",
      query: `query GetRate ${GetRate}`,
      variables,
    },
    headers: headers,
  });
  return response;
};
export const fetchGetCountriesName = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: countryQuery,
    headers: headers,
  });
  return response;
};
export const fetchGetServices = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: serviceQuery,
    headers: headers,
  });
  return response;
};
export const fetchGetCarriers = () => {
  const response = axios({
    url: endPoint,
    method: "post",
    data: carriersQuery,
    headers: headers,
  });
  return response;
};
