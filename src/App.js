import { useEffect, useState } from "react";
import { getCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    getCountry()
      .then(res=>{
        setCountries(res.data);
      })
  },[])

    return <div>
      <CountrySelector countries = {countries}/>
      <Highlight/>
      <Summary/>
    </div>
}

export default App;
