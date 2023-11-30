import { useEffect, useState } from "react";
import "./showMovie.css";
import { useParams } from "react-router-dom";
import server from "../../../axios";
import { Link as Anchor } from "react-router-dom";

import ReactPlayer from "react-player";

function ShowMovie() {
  const { title } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMovie, setIsOpenMovie] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Click");
  };
  const toggleMenuMovie = () => {
    setIsOpenMovie(!isOpenMovie);
    console.log("Click");
  };

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

  if (!uniqueMovie) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (uniqueMovie.trailer == undefined) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  console.log(uniqueMovie.trailer);

  return (
    <div className="showMovie-container">
      <div className="container-btn-volver">
        <Anchor className="btn-movie-detail" to={"/"}>
          Volver
        </Anchor>
      </div>
      <div className="info-movie-detail">
        <img src={uniqueMovie.image} alt="" />
        <div className="container-trailer-movie">
          
            <button onClick={toggleMenu} className="btn-movie">
              {isOpen ? "Cerrar trailer" : "Ver trailer"}
            </button>
            {isOpen && (
              <ReactPlayer
                url={uniqueMovie.trailer}
                controls
                playing
                width={640}
                height={360}
              />
            )}
          

          
            <button onClick={toggleMenuMovie} className="btn-movie">
              {isOpenMovie ? "Cerrar película" : "Ver película"}
            </button>
            {isOpenMovie && (
              <ReactPlayer url={uniqueMovie.movie} controls playing />
            )}
          
        </div>
        <div className="container-description">
          <h3>Descripción</h3>
          <p>{uniqueMovie.description}</p>
        </div>
        <div className="container-actors">
          <h3>Reparto</h3>
          {uniqueMovie.actors.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowMovie;
