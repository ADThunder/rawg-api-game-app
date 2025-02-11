import styled from "styled-components";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRating = ({ rating }) => {
  const starts = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <li key={idx}>
        {rating >= idx + 1 ? (
          <BsStarFill />
        ) : rating >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });

  return (
    <StarRatingWrapper className="rating d-flex align-items-start text-green">
      {starts}
    </StarRatingWrapper>
  );
};

export default StarRating;

const StarRatingWrapper = styled.ul`
  position: absolute;
  right: 18px;
  bottom: 10px;
  z-index: 1;

  li {
    padding: 0 2px;
    font-size: 14px;
  }
`;
