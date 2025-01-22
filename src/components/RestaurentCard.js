const RestaurentCard = ({ resData }) => {
  const { name, cuisine, time, url, rating } = resData;
  return (
    <div className="res-card m-4 p-4 w-[300px] h-[450px] shadow-xl">
      <img src={url} className="res-logo h-[300px]"></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisine}</h4>
      <h3>{time} Mins</h3>
      <h3>{rating} stars</h3>
    </div>
  );
};

// Higher order component
export const withPromotedLabel=(RestaurentCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}
export default RestaurentCard;
