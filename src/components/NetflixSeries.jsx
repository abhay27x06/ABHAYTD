import React from 'react'
import './NetflixSeries.css'
import seriesData from "../apis/seriesData.json"
import { NetflixSeriesCard } from './Cards/NetflixSeriesCard'
export const NetflixSeries = () => {
  return (
    <div className='NetflixSeries'>
      {seriesData.map((curEle, key)=>{
        return <NetflixSeriesCard curEle={curEle} key={curEle.id}/>
      })
    }
    </div>
  )
}