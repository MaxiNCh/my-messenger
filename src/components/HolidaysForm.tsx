import { Button } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryToFetch } from "../store/holidays/actionCreators";
import { fetchHolidays } from "../store/holidays/routines";
import { countries } from "../utils/countries";
import FormCountryInput from "./FormCountryInput";
import FormYearSelect from "./FormYearSelect";

function HolidaysForm() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  }

  const handleCountryChange = (country: string) => {
    setCountry(country);
  }

  function getCountryCode(countryName: string) {
    return countries.find(({ name }) => name === countryName)?.code;
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    dispatch(setCountryToFetch(country));
    dispatch(fetchHolidays({ countryCode: getCountryCode(country), year }));
  }

  const isYearEmpty = year === '' && showErrors;
  const isCountryEmpty = country === '' && showErrors


  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <FormCountryInput handleChange={handleCountryChange} countries={countries} showError={isCountryEmpty} />
      <FormYearSelect year={year} handleChange={handleYearChange} showError={isYearEmpty} />
      <Button type="submit" colorScheme="purple">Submit</Button>
    </form>
  )
}

export default HolidaysForm;
