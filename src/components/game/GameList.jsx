import styled from "styled-components";
import GameItem from "./GameItem";

const GameList = ({ games, sliceValue = games.length }) => {
  return (
    <GameListWrapper>
      <div className="card-list">
        {games?.slice(0, sliceValue).map((item) => (
          <GameItem key={item.id} gameItem={item} />
        ))}
      </div>
    </GameListWrapper>
  );
};

export default GameList;

const GameListWrapper = styled.div``;
