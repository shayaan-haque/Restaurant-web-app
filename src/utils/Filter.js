export function filterData(searchText, Restaurants) {
  const ans = Restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return ans;
}
