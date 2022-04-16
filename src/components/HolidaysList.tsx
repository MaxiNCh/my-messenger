import { Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCountry, selectError, selectHolidays } from "../store/holidays/selectors";
import { parse, format } from "date-fns";

type Holiday = {
  date: string,
  name: string,
  localName: string
}

function HolidaysList() {
  const country = useSelector(selectCountry);
  const error = useSelector(selectError);
  const holidays: Holiday[] = useSelector(selectHolidays);

  const convertDate = (date: string) => {
    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());

    return format(parsedDate, 'LLLL, do');
  }

  const showHolidays = holidays && holidays.length > 0;

  if (error) {
    return <h2 className="header-2 error-message">{error}</h2>
  }

  if (!showHolidays) {
    return null;
  }

  return (
    <TableContainer mt="2rem">
      <h2 className="header-2">Holidays in {country}</h2>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Local name</Th>
          </Tr>
          {holidays.map(({ date, name, localName }, idx) => (
            <Tr key={idx}>
              <Td>{convertDate(date)}</Td>
              <Td>{name}</Td>
              <Td>{localName}</Td>
            </Tr>
          ))}
        </Thead>
      </Table>
    </TableContainer>
  );
}

export default HolidaysList;
