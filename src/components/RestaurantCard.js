import { CDN_IMG } from "./config";
import userContext from "../utils/Usercontext";
import { useContext } from "react";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  avgRating,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="h-80 w-48 p-2 border bg-slate-100">
      <img
        className="h-44 w-44 rounded-lg"
        src={CDN_IMG + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <div className="break-words ">
        <h1 className="font-bold">{name}</h1>
        <h2> {cuisines}</h2>
        <h2>{costForTwoString}</h2>
        <h3 className="text-purple-700">{avgRating}</h3>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
      </div>
    </div>
  );
};
