import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
// import { Link } from "react-router-dom";

const Body = () => {
  const [ResList, setResList] = useState(resList);
  // filteredReslist is used for copy of resList so when i filter the restraurents,it is filtered from resList but the changes are made to filteredResList and it is mapped and when again searched ,it is searched from main list not copy.
  const [filteredResList, setFilteredResList] = useState(resList);
  const [searchValue, setSearchValue] = useState("");
  // higher order function
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  if (ResList.length === 0) {
    return <Shimmer />;
  } //fake ui(shimmer ui will be displayed)

  // useEffect(() => {
  //   fetchedDataFromSwiggy();
  // }, []);

  // const fetchedDataFromSwiggy = async () => {
  //   const dataFetched = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/mapi/homepage/getCards?lat=13.0318628&lng=80.03823059999999"
  //   );
  //   const json = await dataFetched.json();
  // SetResList(json); and useState([])
  //   console.log(json);
  // };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>OOPS!!!You're offline!!!</h1>;
  }
  return (
    <div className="body">
      <div className="search flex  p-3 m-1">
        <input
          className="input-search border border-black m-2"
          placeholder=" Search For Hotel"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn px-4 py-1 m-2 rounded-lg bg-gray-200"
          onClick={() => {
            const searchedByFilter = ResList.filter((res) => {
              return res.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredResList(searchedByFilter);
          }}
        >
          Search
        </button>
        {/* filter button */}
        <div className="filter flex">
          <button
            className="filter-btn px-4 py-1 m-2  rounded-lg bg-gray-200"
            onClick={() => {
              const filtredRes = ResList.filter((datas) => datas.rating > 4);
              setFilteredResList(filtredRes);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        
      </div>

      <div className="res-container flex flex-wrap">
        {/* map(data,index) ,here we can use index as key={index} */}
        {filteredResList.map((data) => (
          <Link
            to={"/restaurants/" + data.id}
            key={data.id}
            className="link-body"
          >
            {/* if promoted is true then display enhanced component if not normal component */}
            {data.promoted ? (
              <RestaurentCardPromoted resData={data} />
            ) : (
              <RestaurentCard resData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
