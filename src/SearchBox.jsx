import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    async function getWeatherInfo(){
        try{
            const request = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const response = await request.json();
            console.log(response);
            const result = {
                city : response.name,
                temp: response.main.temp,
                tempMin: response.main.temp_min,
                tempMax: response.main.temp_max,
                humidity: response.main.humidity,
                feelsLike: response.main.feels_like,
                weather: response.weather[0].description,
            }
            console.log(result);
            return result;
            setError(false);
        }catch(err){
            throw err;
        }
        
    }


  function changeHandler(event) {
    setCity(event.target.value);
    // console.log(city);
  }

  async function submitHandler(event){
    try{
        event.preventDefault();
        console.log(city);
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
    }catch{
        setError(true)
    }
  }

  return (
    <div className="main">

      <form onSubmit={submitHandler}>
        <div className="search">
            <label>Search for weather :</label>
            <TextField
            id="city"
            label="city"
            variant="outlined"
            required
            value={city}
            onChange={changeHandler}
            />
            <Button variant="contained" type="submit">Search</Button>
        </div>
      </form>
      {
        error && <p style={{color: "red"}}>No such Place found</p>
      }
    </div>
  );
}
