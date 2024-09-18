import { useContext, useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Filter";
import useRestaurantAPI from "../utils/useRestaurantAPI";
import useIsOnline from "../utils/useIsOnline";
import userContext from "../utils/Usercontext";

const Body = () => {
  const { user,setuser } = useContext(userContext);
  const Restaurants = useRestaurantAPI();
  const [SearchText, setSearchText] = useState("");
  const [FilteredRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    setFilterRestaurants(filterData(SearchText, Restaurants));
  }, [SearchText, Restaurants]);

  const offline = useIsOnline();
  if (offline) {
    return <h1>Check your internet connection</h1>;
  }
  return Restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="bg-slate-100 ml-3 w-80 h-10 mt-1.5 border"
          placeholder="  Search the restaurant you want..."
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="p-2 m-2 bg-pink-300 rounded-2xl">Search</button>
        <input
          value={user.name}
          placeholder="hi"
          onChange={(e) => setuser({ ...user ,name: e.target.value})}
        />
         <input
          value={user.email}
          placeholder="hello"
          onChange={(e) => setuser({ ...user ,email: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {FilteredRestaurants.length > 0 ? (
          FilteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="w-44"
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        ) : (
          <h1>No Restaurant found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
