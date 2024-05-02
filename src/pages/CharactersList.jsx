import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();
  if (loading) {
    return <div>Spinner ...</div>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
