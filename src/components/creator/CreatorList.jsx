import styled from "styled-components";
import CreatorItem from "./CreatorItem";

const CreatorList = ({ creators }) => {
  return (
    <CreatorListWrapper>
      <div className="card-list">
        {creators?.map((item) => (
          <CreatorItem key={item.id} creatorItem={item} />
        ))}
      </div>
    </CreatorListWrapper>
  );
};

export default CreatorList;

const CreatorListWrapper = styled.div`
  margin-top: 140px;
`;
