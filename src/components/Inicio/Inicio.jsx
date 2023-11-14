
import CarouselMovies from '../CarouselMovies/CarouselMovies'

import '../Inicio/inicio.css'
import MovieCarousel from '../Top10Peliculas/Top10Peliculas'

function Inicio() {
  return (
    <div className='inicio-container'>
        <CarouselMovies/>
        <MovieCarousel/>
    </div>
  )
}

export default Inicio