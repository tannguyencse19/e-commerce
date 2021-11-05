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
import React from "react";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const MyPagination = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = React.useState(null);
  const [lastPage, setLastPage] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [startOffset, setStartOffSet] = React.useState(0);

  React.useEffect(() => {
    const endOffset = startOffset + itemsPerPage;
    console.log(`Loading items from ${startOffset} to ${endOffset}`);
    setCurrentItems(items.slice(startOffset, endOffset));
    setLastPage(Math.ceil(items.length / itemsPerPage));
  }, [startOffset, itemsPerPage]);

  const handlePageClick = React.useCallback(({ target }) => {
    let value = parseInt(target.getAttribute("value"));
    if (isNaN(value)) value = currentPage;

    setCurrentPage(value);
    const newOffset = (value * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${value}, which is offset ${newOffset}`
    );
    setStartOffSet(newOffset);
  }, []);

  return (
    <>
      <Items currentItems={currentItems} />
      <Grid
        autoFlow="column"
        justifyContent="center"
        gap="5"
        alignItems="center"
      >
        <PageButton
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          lastPage={lastPage}
        />

        <Select placeholder="10/Page">
          {[5, 10, 15, 20].map((el) => (
            <option key={el} value={el}>
              {el}/Page
            </option>
          ))}
        </Select>
        <Text>Go to:</Text>
        <NumberInput max={lastPage} min={0} maxW="20" variant="filled">
          <NumberInputField />
        </NumberInput>
      </Grid>
    </>
  );
};

const PageButton = ({ currentPage, lastPage, handlePageClick }) => {
  const render = [];
  let startIdx = 0;

  const prevPage = currentPage - 1 >= 0 ? currentPage - 1 : 0;
  render.push(
    <IconButton
      icon={<ChevronLeftIcon />}
      value={prevPage}
      onClick={handlePageClick}
    />
  );

  if (currentPage - 1 >= 0) startIdx = currentPage - 1;
  if (currentPage - 2 >= lastPage - 5) startIdx = lastPage - 5;

  for (let idx = startIdx; idx < startIdx + 5 && idx < lastPage; idx++) {
    //offset by 1
    const offset = idx + 1;
    render.push(
      <Button key={idx} onClick={handlePageClick} value={idx}>
        {offset}
      </Button>
    );
  }
  if (startIdx + 5 < lastPage) {
    render.push(
      <>
        <FontAwesomeIcon icon={faEllipsisH} color="gray" />
        <Button onClick={handlePageClick} value={lastPage - 1}>
          {lastPage}
        </Button>
      </>
    );
  }

  const nextPage = currentPage + 1 < lastPage ? currentPage + 1 : lastPage - 1;
  render.push(
    <IconButton
      icon={<ChevronRightIcon />}
      value={nextPage}
      onClick={handlePageClick}
    />
  );
  return render;
};

export default MyPagination;
