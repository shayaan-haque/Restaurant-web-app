import { FETCH_MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurant = (resid) => {
  const [restaurant, setrestaurant] = useState({});
  useEffect(() => {
    getRestaurantDetails();
  }, [resid]);

  async function getRestaurantDetails() {
    const Data = await fetch(FETCH_MENU_URL + resid);
    const json = await Data.json();
    setrestaurant(json);
  }
  return restaurant;
};

export default useRestaurant;
