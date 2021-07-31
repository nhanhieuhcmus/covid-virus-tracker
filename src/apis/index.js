import axios from "axios";

// export const getCountries = () =>
//     axios.get("https://api.covid19api.com/countries");

// new api from disease.sh
export const getCountries = () =>
    axios.get("https://disease.sh/v3/covid-19/countries");

// new api from disease.sh
export const getReportByCountry = country => axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);

// export const getHistoricalCountry = (country) => axios.get(`https://disease.sh/v3/covid-19/historical/${country}`);

export const getHistoricalCountry = (country) =>
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);