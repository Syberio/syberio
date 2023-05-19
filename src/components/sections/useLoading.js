import { useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = (isLoading) => {
    setLoading(isLoading);
  };

  return { loading, showLoader };
};