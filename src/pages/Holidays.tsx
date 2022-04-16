import { ChakraProvider, Container } from "@chakra-ui/react";
import HolidaysForm from "../components/HolidaysForm";
import HolidaysList from "../components/HolidaysList";

function Holidays() {
  return (
    <ChakraProvider>
      <Container maxW='container.xl'>
        <h1 className="page-header">Holidays</h1>
        <HolidaysForm />
        <HolidaysList />
      </Container>
    </ChakraProvider>
  )
}

export default Holidays;
