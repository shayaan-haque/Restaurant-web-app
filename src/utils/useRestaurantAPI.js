import { useEffect, useState } from "react";
import { REACT_APP_RESTAURANT_URL } from "./constants";

const useRestaurantAPI = () => {
  const [Restaurants, setRestaurants] = useState([]);
  async function getRestaurants() {
    const Data = await fetch(REACT_APP_RESTAURANT_URL);
    const json = await Data.json();
    setRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return Restaurants;
};

export default useRestaurantAPI;
