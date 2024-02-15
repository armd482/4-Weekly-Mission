import { useEffect, useState } from "react";
import "../style/card.css";
import { formatDate, getTimeDifference } from "../util";
function Card() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        if (response.ok) {
          setItems(data.folder.links);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <form className="searchLink-container">
        <input
          className="search-link"
          placeholder="링크를 검색해 보세요."
        ></input>
      </form>
      <div className="cardImg-grid">
        {items &&
          items.map((item, index) => (
            <div className="card-container" key={index}>
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
    </div>
  );
}
export default Card;
