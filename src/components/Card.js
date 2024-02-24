import { useEffect, useState } from "react";
import "../style/card.css";
import { formatDate, getTimeDifference } from "../util";
import fetchData from "../api/FetchData";
function Card() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await fetchData("sample/folder");
      if (data) {
        setItems(data.folder.links);
      }
    };
    fetchCardData();
  }, []);

  return (
    <div className="cardImg-grid">
      {items &&
        items.map((item, id) => (
          <div className="card-container" key={id}>
            <a href={item.url}>
              <img className="cardImg" src={item.imageSource} alt="img"></img>
              <p className="timeDifference">
                {getTimeDifference(item.createdAt)}
              </p>
              <p className="item-description">{item.description}</p>
              <p>{formatDate(item.createdAt)}</p>
            </a>
          </div>
        ))}
    </div>
  );
}
export default Card;
