import React, { useEffect, useState } from 'react'
import './playMovie.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import server from '../../../axios'


function PlayMovie(trailer) {
  

  return (
    <div className='container-playMovie'>
    <ReactPlayer
    url={trailer.trailer}
    controls
    />

    
       
    </div>
  )
}

export default PlayMovie