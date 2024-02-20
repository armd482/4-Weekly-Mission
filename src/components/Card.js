import styles from "./css/Card.module.css";

const SAMPLE_IMAGE_URL = "/images/sample_image.svg";

const Card = ({ cardImage, cardTime, cardDescription }) => {
  const imageSrc = cardImage || SAMPLE_IMAGE_URL;

  return (
    <div className={styles.Card}>
      <div className={styles.card_image_container}>
        <img src={imageSrc} alt="card profile" className={styles.card_image} />
        <img
          src="/icons/star_icon.svg"
          alt="add this link to favorite"
          className={styles.star_icon}
        />
      </div>
      <div className={styles.card_txt}>
        <div className={styles.card_option_container}>
          <span className="font-thin font-13px" style={{ color: "#666666" }}>
            {cardTime["timeDifference"]}
          </span>
          <img src="/icons/kebab_icon.svg" alt="view more options" />
        </div>

        <div className={`${styles.card_contents} font-thin font-16px`}>
          {cardDescription}
        </div>
        <div className="font-thin font-14px" style={{ color: "#333333" }}>
          {cardTime["createdDateString"]}
        </div>
      </div>
    </div>
  );
};

export default Card;
