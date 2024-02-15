import { useState } from "react";
import { CardContent } from "../CardContent/CardContent";
import CardImage from "../CardImage/CardImage";
import Card from "../CardWrapper/CardWrapper";

const OnlyCard = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <a href={items.url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage items={items} isZoomedIn={isHovered} />
        <CardContent items={items} isZoomedIn={isHovered} />
      </Card>
    </a>
  );
};

export default OnlyCard;
