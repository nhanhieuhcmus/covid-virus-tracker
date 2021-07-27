import axios from "axios";

export const getCountry = () =>
    axios.get("https://api.covid19api.com/countries");
