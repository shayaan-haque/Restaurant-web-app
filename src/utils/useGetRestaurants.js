import { useEffect, useState } from "react";
import { REACT_APP_RESTAURANT_URL } from "./constants";
const useGetRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(REACT_APP_RESTAURANT_URL);
        if (!response.ok) throw new Error("Failed to fetch");

        const json = await response.json();
        setRestaurants(
          json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return restaurants;
};

export default useGetRestaurants;
