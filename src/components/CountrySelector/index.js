import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

function CountrySelector({value, handleOnChange, countries}) {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>
                Select a country
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: "country",
                    if: "country-selector",
                }}
            >
                {countries.map(country=><option value={country.ISO2.toLowerCase()} key={country.ISO2}>{country.Country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountrySelector;
