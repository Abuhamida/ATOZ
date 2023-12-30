"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export default function Rating({ rating }: { rating: number }) {
  const isInteger = Number.isInteger(rating);

  const stars = [];

  for (let index = 0; index < Math.floor(rating); index++) {
    stars.push(<FontAwesomeIcon key={index} icon={faStar} color="#6eb2e2" />);
  }

  return (
    <div className="stars">
      {stars}
      {isInteger ? null : (
        <FontAwesomeIcon icon={faStarHalfAlt} color="#6eb2e2"></FontAwesomeIcon>
      )}
    </div>
  );
}
