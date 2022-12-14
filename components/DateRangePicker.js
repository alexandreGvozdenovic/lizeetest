import { useState } from "react";
import DatePicker from "react-datepicker";
import { Box, Text, Button, Separator } from "./shared";

export default function DateRangePicker({ ...props }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <>
      <Box
        bg="white"
        flexDirection="row"
        alignSelf="start"
        px={5}
        py={4}
        borderRadius={16}
        {...props}
      >
        <Box mr={{ xs: 0, lg: 70 }}>
          <Text>Start date</Text>
          <DatePicker
            placeholderText="Select a date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </Box>
        <Separator axe="vertical" mr={5} />
        <Box mr={{ xs: 2, lg: 70 }}>
          <Text>End date</Text>
          <DatePicker
            placeholderText="Select a date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Box>
        <Button display={{ xs: "none", lg: "flex" }}>Search</Button>
      </Box>
      <Button display={{ xs: "flex", lg: "none" }} maxWidth={420} mt={2}>
        Search
      </Button>
    </>
  );
}
