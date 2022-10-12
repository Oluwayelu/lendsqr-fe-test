import type { FC } from "react";

type Props = {
  image: string;
  title: string;
  content: number;
  imgColor: string;
};

const Card: FC<Props> = ({ image, title, content, imgColor }) => {
  return (
    <div className="card">
      <div className="card-icon" style={{ backgroundColor: imgColor + "10" }}>
        <img className="icon" src={image} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default Card;

