import { useParams } from "react-router-dom";
import { CDN_IMG } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurant = useRestaurant(resid);

  return !restaurant?.data ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col border w-96">
      <h1 className="font-bold">
        {restaurant.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h1>{restaurant.data?.cards[2]?.card?.card?.info?.city}</h1>
      <img
        className="w-96 h-80"
        src={
          CDN_IMG +
          restaurant.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <h2>{restaurant.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
    </div>
  );
};

export default RestaurantMenu;
