import '../NetflixSeries.css'
export const NetflixSeriesCard = (props)=>{
  const {curEle}=props;
    return (<div className='NetflixSeriesCard'>
        <div>
          <img src={curEle.img_url} className='NetflixSeriesCardImage' alt='Image'/>
        </div>
        <div className='NetflixSeriesCardContent'>
          <h3>Name : {curEle.name}</h3>
          <h3>Rating : <span className={`span ${curEle.rating>8.5?'RatingSpan':'RatingSpan1'}`}>{curEle.rating}</span></h3>
          <p>Summary : {curEle.description}</p>
          <p>Genre : {curEle.genre}</p>
          <a href={props.curEle.watch_url} target='_blank'>
            <button className={curEle.rating>8.5?'NetflixSeriesCardButton':'NetflixSeriesCardButton1'}>Watch Now!</button>
          </a>
        </div>
      </div>)
}