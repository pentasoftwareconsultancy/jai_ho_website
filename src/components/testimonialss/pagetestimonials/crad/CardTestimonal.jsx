// import React from "react";
// import styles from "./Cardtimonial.module.css";

// const cardData = [
//   { id: 1, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",text: "Card 90", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
//   { id: 2, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",text: "Card 1", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
//   { id: 3, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",text: "Card 1", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
  
// ];
// const cardDatas = [
//   { id: 1, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 1" },
//   { id: 2, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 2" },
//   { id: 3, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 3" },
  
// ];
// const Cards = () => {
//   return (
//     <>
//       <div className={styles.box}>
//  <h1><a href="/Testimonaltext">see all</a></h1>
//       </div>
//       <a href="/Testimonaltext">
//     <div className={styles.cardContainer}>
//       {cardData.map((card) => (
//         <div key={card.id} className={styles.card}>
//           <img src={card.image} alt={`Card ${card.id}`} />
//           <div className={styles.cardText}>{card.text}</div>
//         </div>
//       ))}
//     </div>
//      <div className={styles.cardContainer}>
//      {cardDatas.map((card) => (
//        <div key={card.id} className={styles.card}>
//          <img src={card.image} alt={`Card ${card.id}`} />
//          <div className={styles.cardText}>{card.text}</div>
//        </div>
//      ))}
//    </div></a>
//      </>
//   );
// };

// export default Cards;


// import React from "react";
// import styles from "./Cardtimonial.module.css";

// const cardData = [
//   { id: 1, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 90", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
//   { id: 2, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 1", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
//   { id: 3, image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg", text: "Card 2", title: "Noteworthy technology acquisitions 2021", description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
// ];

// const Cards = () => {
//   return (
//     <>
//       <div className={styles.box}>
//         <h1>
//           <a href="/Testimonaltext">See All</a>
//         </h1>
//       </div>

//       <div className={styles.cardContainer}>
//         {cardData.map((card) => (
//           <a key={card.id} href="/Testimonaltext" className={styles.cardLink}>
//             <div className={styles.card}>
//               <img src={card.image} alt={`Card ${card.id}`} />
//               <div className={styles.cardText}>
//                 <h3>{card.text}</h3>
//                 <p>{card.title}</p>
//                 <p className={styles.description}>{card.description}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>


//       <div className={styles.cardContainer}>
//         {cardData.map((card) => (
//           <a key={card.id} href="/Testimonaltext" className={styles.cardLink}>
//             <div className={styles.card}>
//               <img src={card.image} alt={`Card ${card.id}`} />
//               <div className={styles.cardText}>
//                 <h3>{card.text}</h3>
//                 <p>{card.title}</p>
//                 <p className={styles.description}>{card.description}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Cards;




import React from "react";
import styles from "./Cardtimonial.module.css";

const cardData = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",
    text: "Card 90",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",
    text: "Card 1",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/81LYRQ2hOtL.jpg",
    text: "Card 2",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  
];

const Cards = () => {
  return (
    <>
      <div className={styles.box}>
        <h1>
          <a href="/Testimonaltext">See All</a>
        </h1>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <a key={card.id} href="/Testimonaltext" className={styles.cardLink}>
            <div className={styles.card}>
              <img src={card.image} alt={`Card ${card.id}`} className={styles.cardImage} />
              <div className={styles.cardText}>
                <h3>{card.text}</h3>
                <p>{card.title}</p>
                <p className={styles.description}>{card.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
<br></br>
<br></br>
      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <a key={card.id} href="/Testimonaltext" className={styles.cardLink}>
            <div className={styles.card}>
              <img src={card.image} alt={`Card ${card.id}`} className={styles.cardImage} />
              <div className={styles.cardText}>
                <h3>{card.text}</h3>
                <p>{card.title}</p>
                <p className={styles.description}>{card.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Cards;
