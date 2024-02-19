import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

export default function Card({ links }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/folder');
        setCardData(response.data.folder.links);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {cardData.map(link => (
        <div key={link.id} className="card">
          <img className="cardImage" src={link.imageSource} alt={link.title} />
          <div className="cardTextArea">
            <div className="uploadTime">{link.createdAt}</div>
            <div className="cardText">{link.description}</div>
            <div className="uploadDate">{link.createdAt}</div>
          </div>
        </div>
      ))}
    </>
  );
}

// import card1 from './images/card1.png';
// import card2 from './images/card2.png';
// import card3 from './images/card3.png';
// import card4 from './images/card4.png';
// import card5 from './images/card5.png';
// import card6 from './images/card6.png';
// import card7 from './images/card7.png';
// import card8 from './images/card8.png';
// import card9 from './images/card9.png';
// import './Card.css';

// const CARD_IMAGES = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
// export default function Card({ num = 1 }) {
//   const src = CARD_IMAGES[num - 1];
//   const alt = `card${num}`;
//   return (
//     <div className="card">
//       <img src={src} alt={alt} />
//       <div className="cardTextArea">
//         <p className="uploadTime">10 minutes ago</p>
//         <p className="cardText">Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat....</p>
//         <p className="uploadDate">2023. 3. 15</p>
//       </div>
//     </div>
//   );
// }
