import {
    useState,
    useEffect
} from 'react'
import React from 'react'
// import { useParams }  from "react-router-dom"

// fetch('http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?appid=816a5e33ed536fb2f0299d8e18ce0e0d')

// console.log(fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=816a5e33ed536fb2f0299d8e18ce0e0d'))

function Weather(props) {
    // const [weathers, setWeathers] = useState([])
  const [apiData, setApiData] = useState({});
const [getState, setGetState] = useState('Kabul');
const [state, setState] = useState('Kabul');

// const apiKey = process.env.OPENWEATHERMAP_API_KEY
// const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=816a5e33ed536fb2f0299d8e18ce0e0d'
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+ state + '&appid=816a5e33ed536fb2f0299d8e18ce0e0d' 

useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
}, [apiUrl]);


const inputHandler = (event) => {
  setGetState(event.target.value);
};

const submitHandler = () => {
  setState(getState);
};

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

return (
  <div className="App">
    <header className="d-flex justify-content-center align-items-center">
    </header>
    <div className="container">
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <div class="col-auto">
          <label for="location-name" class="col-form-label">
            Enter Location :
          </label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            id="location-name"
            class="form-control"
            onChange={inputHandler}
            value={getState}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={submitHandler}>
          Search
        </button>
      </div>

      <div className="card mt-3 mx-auto" style={{ width: '20vw', color:'black' }}>
        {apiData.main ? (
          <div class="card-body text-center">
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="h2">
              {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>{' '}
              <strong>{apiData.name}</strong>
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <i class="fas fa-temperature-low "></i>{' '}
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                  </strong>
                </p>
                <p>
                  <i className="fas fa-temperature-high"></i>{' '}
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  {' '}
                  <strong>{apiData.weather[0].main}</strong>
                </p>
                <p>
                  <strong>
                    {' '}
          {/*/ {countries.getName(apiData.sys.country, 'en', {select: 'official',})} */}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  </div>
);
















    // const params = useParams()
    // useEffect(() => {
        // const getWeather = async () => {
            //get data from API
        // const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=kabul&appid=816a5e33ed536fb2f0299d8e18ce0e0d').then((resp) => resp.json()).then((data) => setWeathers(data.weathers))
        // const data = await fetch('http://api.openweathermap.org/data/2.5/weather?id=1138958&appid=816a5e33ed536fb2f0299d8e18ce0e0d').then((resp) => resp.json()).then((data) => setWeathers(data.weathers))
            // console.log(data)
        // }
        // getWeather()
    // }, [])

    //render helper
    // const renderWeather = () => {
        // let elems = weathers.map((weather, index) => {
        // console.log("elems")
        // return ( <
        // li key = {
        // index
        // } >
//
        // {
        // weather.title
        // } <
        // /li>
        // )
        // })
        
        // return elems
    // }




    // return ( <
            // div >
            // <
            // h1 > Afghanistan Weather < /h1> {
            // renderWeather()
        // } <
        // /div>
// )
}


export default Weather;
