import { useEffect, useState, useTransition } from "react";
import "./carouselMovies.css";
import server from "../../../axios";
import { Carousel } from "react-bootstrap";

function CarouselMovies() {
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
  

  if (loading) {
    // Muestra un loader mientras los datos se están cargando
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container-infoMovies">
      <Carousel>
        {movie.map((movie, index) => (
          <Carousel.Item key={index}>
            <img
              className="img-carousel"
              src={movie.image} // Asegúrate de que tu API proporciona la propiedad 'image'
              alt={movie.title} // Asegúrate de que tu API proporciona la propiedad 'title'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselMovies;
{
  /* <ul style={{ listStyle: "none" }} key={index}>
          <li>{item.title}</li>
          <img
            style={{ height: "250px", objectFit: "cover" }}
            src={item.image}
            alt="img"
          />
        </ul> */
}
