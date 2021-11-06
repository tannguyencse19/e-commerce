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
        currentItems.map((item, idx) => (
          <h3 key={`item-${idx}`}>Item #{item}</h3>
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
    const value = parseInt(target.getAttribute("value"));
    // console.log(`page request: ${value}, current page: ${currentPage}`);
    if (!isNaN(value) && value >= 0 && value < lastPage) {
      setCurrentPage(value);
      const newOffset = (value * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${value}, which is offset ${newOffset}`
      );
      setStartOffSet(newOffset);
    }
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
            <option key={`${el}-per-page`} value={el}>
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

  if (currentPage - 1 >= 0) {
    const prevPage = currentPage - 1;
    render.push(
      <IconButton
        icon={<ChevronLeftIcon />}
        value={prevPage}
        onClick={handlePageClick}
        key={`prev-page-${prevPage}`}
      />
    );
  }

  let startIdx;
  let endIdx;
  if (currentPage - 1 >= 0) {
    startIdx = currentPage - 1;
    endIdx = startIdx + 5;
  } else {
    startIdx = 0;
    endIdx = 5;
  }
  if (currentPage + 3 >= lastPage) {
    startIdx = lastPage - 5;
    endIdx = lastPage;
  }

  for (let idx = startIdx; idx < endIdx; idx++) {
    const offset = idx + 1;
    render.push(
      <Button
        key={`page-${offset}`}
        onClick={handlePageClick}
        value={idx}
        colorScheme={idx === currentPage ? "yellow" : "gray"}
      >
        {offset}
      </Button>
    );
  }

  if (endIdx < lastPage) {
    const offset = lastPage - 1;
    render.push(
      <React.Fragment key={`last-page-${lastPage}`}>
        <FontAwesomeIcon icon={faEllipsisH} color="gray" />
        <Button onClick={handlePageClick} value={offset}>
          {lastPage}
        </Button>
      </React.Fragment>
    );
  }

  if (currentPage + 1 < lastPage) {
    const nextPage = currentPage + 1;
    render.push(
      <IconButton
        icon={<ChevronRightIcon />}
        value={nextPage}
        onClick={handlePageClick}
        key={`next-page-${nextPage}`}
      />
    );
  }
  return render;
};

export default MyPagination;
