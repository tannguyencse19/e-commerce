import React from "react";

const useFetch = (link) => {
  const [Products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (!link) return;

    setIsLoading(true);

    fetch(link)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => {
        setIsError(true);
        // throw err;
      })
      .finally(() => setIsLoading(false));
  }, [link])

  return [Products, isLoading, isError];
};

export default useFetch;
