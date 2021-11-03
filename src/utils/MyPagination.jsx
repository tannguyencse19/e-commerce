import { Grid, GridItem } from "@chakra-ui/layout";
import {
  Button,
  IconButton,
  Select,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const numOfPages = [1, 2, 3, 4, 5];

const MyPagination = () => {
  return (
    <Grid autoFlow="column" justifyContent="center" gap="5" alignItems="center">
      <IconButton icon={<ChevronLeftIcon />} />
      {numOfPages.map(
        (pageIdx, arrIdx) =>
          arrIdx < 3 && <Button key={pageIdx}>{pageIdx}</Button>
      )}
      <FontAwesomeIcon icon={faEllipsisH} color="gray" />
      <Button>{numOfPages[numOfPages.length - 1]}</Button>
      <IconButton icon={<ChevronRightIcon />} />
      <Select placeholder="10/Page">
        {[5, 10, 15, 20].map((el) => (
          <option value={el}>{el}/Page</option>
        ))}
      </Select>
      <Text>Go to:</Text>
      <NumberInput max={numOfPages[numOfPages.length - 1]} min={0} maxW="20" variant="filled">
        <NumberInputField />
      </NumberInput>
    </Grid>
  );
};

export default MyPagination;
