import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Select } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';
import { getPrevCurrNextYears } from '../utils/date';

const years = getPrevCurrNextYears();

interface FormYearSelectProps {
  year: string,
  handleChange: ChangeEventHandler
  showError: boolean,
}

function FormYearSelect({ year, handleChange, showError }: FormYearSelectProps) {
  return (
    <FormControl isInvalid={showError} mb="2rem">
      <FormLabel htmlFor='year' color='#9c27b0'>Year</FormLabel>
      <Select id='year' focusBorderColor='#9c27b0' value={year} onChange={handleChange}>
        <option></option>
        {years.map((year) => (<option key={year}>{year}</option>))}
      </Select>
      {
        !showError
          ? (<FormHelperText>Select year</FormHelperText>)
          : (<FormErrorMessage>Year is required</FormErrorMessage>)
      }
    </FormControl >
  )
}

export default FormYearSelect;
