import React, { useEffect, useState } from 'react'
import "./Pikachu.css"
const Pikachu = () => {
    const [pikachuData, setPikachuData]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const fetchData=async ()=>{
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPikachuData(data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    }, []);
    if (loading) {
        return (
            <div>
                <h3>
                    Loading...
                </h3>
            </div>
        );
    }
    console.log(error);
    
    if (error) {
        return (
            <div>
                <h3>Error : {error.message}</h3>
            </div>
        )
    }
    if (pikachuData) {
        return (
          <div className='pikachuDivPar'>
              <div className='pikachuDiv'>
                  <div className='pikachuImageDiv'>
                  <img src={pikachuData.sprites.other.dream_world.front_default} alt={pikachuData.name} className='pikachuImage'/>
                  </div>
                  <h3 className='nameHead'>
                      {pikachuData.name}
                  </h3>
              </div>
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