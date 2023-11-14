import React, { useEffect, useState } from "react";
import './showMovie.css'
import { useParams } from "react-router-dom";
import server from "../../../axios";
import {Link as  Anchor } from "react-router-dom";


function ShowMovie() {
  const { title } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    server
      .get("/movies/")
      .then((res) => {
        setMovie(res.data.response);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  }, []);

  const uniqueMovie = movie.find((movie) => movie.title == title);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="showMovie-container">
        <Anchor to={"/"}>Volver </Anchor>
      <img src={uniqueMovie.image} alt="" />
    </div>
  );
}

export default ShowMovie;
