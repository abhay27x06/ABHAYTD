import React, { useEffect, useState } from 'react'
import "./Pikachu.css"
const Pikachu = () => {
    const [pikachuData, setPikachuData]=useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const fetchData=()=>{
        fetch(API).then((res)=>res.json()).then((res)=>setPikachuData(res)).catch((e)=>console.log(e));
    }
    useEffect(()=>{
        fetchData();
    }, []);
    if (pikachuData) {
        return (
          <div className='parDiv'>
              <div className='pikachuDiv'>
                  <div className='pikachuImageDiv'>
                  <img src={pikachuData.sprites.other.dream_world.front_default} alt={pikachuData.name} className='pikachuImage'/>
                  </div>
                  <h3 className='nameHead'>
                      {pikachuData.name}
                  </h3>
              </div>
          </div>
        )
    }
}

export default Pikachu