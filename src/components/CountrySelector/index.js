import { FormControl, InputLabel, makeStyles, NativeSelect } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme)=>({
    formControl: {
        margin: `${theme.spacing(3)}px 0`
    }
}))

function CountrySelector({ value, handleOnChange, countries }) {
    const styles = useStyles();
    return (
        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="country-selector" shrink>
                Select a country
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: "country",
                    id: "country-selector",
                }}
            >
                {countries.map((country) => (
                    <option
                        value={country.ISO2.toLowerCase()}
                        key={country.ISO2}
                    >
                        {country.Country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}

export default CountrySelector;
