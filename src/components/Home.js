import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { useHistory } from 'react-router';

function Home() {
  const history = useHistory()
  const [data, setData] = useState();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    setData(user)
  }, [data])

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    if(!user){
      history.push("/login")
    }
  }, [history])
  

  const [viewport, setViewport] = useState({
    latitude: 12.9716,
    longitude:  77.5946,
   
    width:"100vw",
    height:"100vh",
    zoom: 10,
  });
    
    return (
      <div>
      <ReactMapGL {...viewport}
     mapboxApiAccessToken={
       "pk.eyJ1Ijoic3VyYWpqaGExMjMiLCJhIjoiY2t0cHN5OGZ1MGRrdjJ1bnE4b3I0aGNqdCJ9.kU8IL1Gjf-60vzIMyV_tcQ"
     }
     mapStyle="mapbox://styles/mapbox/streets-v11"
     onViewportChange={(viewport) => setViewport(viewport)}
      >
 
      </ReactMapGL>
   </div>
    )
}

export default Home
