import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";
import "./Character.css";

const Character = () => {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);
  console.log({ error, data, loading });
  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Spinner</div>;
  return (
    <div className="Character">
      <img src={data.character.image} alt="" width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((ep) => {
            return (
              <div>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
