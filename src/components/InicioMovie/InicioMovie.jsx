import React, { useEffect, useState } from "react";
import "./inicioMovie.css";
import server from "../../../axios";
import { Link as Anchor } from "react-router-dom";
import { Card, Form, FormControl } from "react-bootstrap";
import NotFound from "../NotFound/NotFound";
function InicioMovie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState("");

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

  const searchItem = (event) => {
    setItem(event.target.value);
  };

  const dataFiltered = movie.filter((movie) =>
    movie.title.toLowerCase().startsWith(item.toLowerCase())
  );

  console.log(dataFiltered);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  console.log(movie);

  return (
    <div className="container-inicioMovies">
      <div className="search-input">
        <Form inline="true" className="input">
          <FormControl
            type="text"
            placeholder="Search movie..."
            className="lg-3 input-search "
            onChange={searchItem}
          />
        </Form>
      </div>
      <div className="cards-movies">
        {dataFiltered.length === 0 ? (
          <NotFound/>
        ) : (
          dataFiltered.map((movie, index) => (
            <Card key={index} className="card-s m-4 card-movie">
              <Card.Img
                variant="top"
                src={movie.image}
                style={{ height: "200px", objectFit: "cover" }}
                className="img-card"
              />
              <Card.Body>
                <Card.Title className="title-card">{movie.title}</Card.Title>

                <Anchor
                  to={`/${movie.title}`}
                  className="btn-movie"
                  variant="primary"
                >
                  Ver más
                </Anchor>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default InicioMovie;
