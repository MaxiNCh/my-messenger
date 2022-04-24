import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { countryType } from "../utils/countries";

interface FormCountryInputProps {
  countries: countryType[],
  handleChange: (country: string) => void,
  showError: boolean
}

function FormCountryInput({ countries, handleChange, showError }: FormCountryInputProps) {

  return (
    <FormControl isInvalid={showError} mb="1rem">
      <FormLabel htmlFor='country' color='#9c27b0'>Country</FormLabel>
      <AutoComplete onChange={handleChange} >
        <AutoCompleteInput focusBorderColor='#9c27b0' id='country' type='text' />
        <AutoCompleteList>
          {countries.map(({ name }, index) => (
            <AutoCompleteItem key={`country-${index}`} value={name} >
              {name}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      {!showError
        ? <FormHelperText>Select country</FormHelperText>
        : <FormErrorMessage>Country is required</FormErrorMessage>
      }
    </FormControl>
  )
}

export default FormCountryInput;
