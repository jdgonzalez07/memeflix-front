import  { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import server from '../../../axios';
import './top10Peliculas.css'
import { Link as Anchor } from "react-router-dom";

const MovieCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true)

 
  useEffect(() => {
    server.get("/movies/")
      .then((res) => {
        setMovie(res.data.response);
        setLoading(false); // Cambia el estado después de completar la solicitud
      })
      .catch((error) => {
        console.log(error); // Maneja errores aquí
        setLoading(false); // Asegúrate de que se cambie el estado en caso de error
      });
  }, []);
  
  console.log(movie)

  if (loading) {
    // Muestra un loader mientras los datos se están cargando
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }


  return (
    <div className="movie-carousel">
      <h2>Películas Populares</h2>
      <Slider {...settings}>
        {movie.map((movie, index) => (
          <div key={index} className="movie-card">
            
            <img src={movie.image} alt={movie.title} />
            <h4>{movie.title}</h4>
            <Anchor className='btn-movie' to={`/${movie.title}`}>Ver mas</Anchor>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
