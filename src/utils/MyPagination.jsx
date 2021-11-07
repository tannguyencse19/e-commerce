import {
  Button,
  IconButton,
  Select,
  NumberInput,
  NumberInputField,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyPagination = ({ items, setCurrentItems }) => {
  const [lastPage, setLastPage] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [startOffset, setStartOffSet] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  React.useEffect(() => {
    const endOffset = startOffset + itemsPerPage;
    console.log(`Loading items from ${startOffset} to ${endOffset}`);
    setCurrentItems(items.slice(startOffset, endOffset));
    setLastPage(Math.ceil(items.length / itemsPerPage));
  }, [startOffset, itemsPerPage]);

  const handlePageClick = (value) => {
    // console.log(`page request: ${value}, current page: ${currentPage}`);
    if (!isNaN(value) && value >= 0 && value < lastPage) {
      setCurrentPage(value);
      const newOffset = (value * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${value}, which is offset ${newOffset}`
      );
      setStartOffSet(newOffset);
    } else console.log(`handlePageClick value: ${value}`);
  };

  const handleSetItemsPerPage = ({ target: { value } }) => {
    handlePageClick(0);
    if (!isNaN(parseInt(value))) {
      setItemsPerPage(parseInt(value));
    }
  };

  const handleGoTo = (e) => {
    if (e.key === "Enter") {
      const value = parseInt(e.target.value);
      handlePageClick(value - 1);
    }
  };

  return (
    <HStack spacing="3">
      <PageButton
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        lastPage={lastPage}
        numberPageAhead={4}
      />
      <Select defaultValue="5" onChange={handleSetItemsPerPage}>
        {[5, 10, 15, 20].map((el) => (
          <option key={`${el}-per-page`} value={el}>
            {el}/Page
          </option>
        ))}
      </Select>
      <Text>Go to:</Text>
      <NumberInput
        max={lastPage}
        min={0}
        maxW="20"
        variant="filled"
        onKeyDown={handleGoTo}
      >
        <NumberInputField />
      </NumberInput>
    </HStack>
  );
};

const PageButton = ({
  currentPage,
  lastPage,
  handlePageClick,
  numberPageAhead,
}) => {
  const render = [];

  if (currentPage - 1 >= 0) {
    render.push(
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => handlePageClick(currentPage - 1)}
        key={`prev-page-${currentPage - 1}`}
      />
    );
  }

  if (currentPage > 2) {
    render.push(
      <React.Fragment key={`first-page`}>
        <Button onClick={() => handlePageClick(0)}>1</Button>
        <FontAwesomeIcon icon={faEllipsisH} color="gray" />
      </React.Fragment>
    );
  }

  let startIdx;
  let endIdx;
  if (currentPage - 1 >= 0) {
    startIdx = currentPage - 1;
    endIdx =
      startIdx + numberPageAhead < lastPage
        ? startIdx + numberPageAhead
        : lastPage;
  } else {
    startIdx = 0;
    endIdx = lastPage >= numberPageAhead ? numberPageAhead : lastPage;
  }
  if (
    currentPage + numberPageAhead >= lastPage &&
    lastPage - numberPageAhead >= 0
  ) {
    startIdx = lastPage - numberPageAhead;
    endIdx = lastPage;
  }

  for (let idx = startIdx; idx < endIdx; idx++) {
    const offset = idx + 1;
    render.push(
      <Button
        key={`page-${offset}`}
        onClick={() => handlePageClick(idx)}
        colorScheme={idx === currentPage ? "messenger" : "gray"}
      >
        {offset}
      </Button>
    );
  }

  if (endIdx < lastPage) {
    render.push(
      <React.Fragment key={`last-page-${lastPage}`}>
        <FontAwesomeIcon icon={faEllipsisH} color="gray" />
        <Button onClick={() => handlePageClick(lastPage - 1)}>
          {lastPage}
        </Button>
      </React.Fragment>
    );
  }

  if (currentPage + 1 < lastPage) {
    render.push(
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={() => handlePageClick(currentPage + 1)}
        key={`prev-page-${currentPage + 1}`}
      />
    );
  }
  return render;
};

export default MyPagination;
