<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",()=>{

const cityInput=document.getElementById("city-input");
const getWeatherBtn=document.getElementById("get-weather-btn");
const errorMessage=document.getElementById("error-message");
const weatherInfo=document.getElementById("weather-info");
const cityNameDisplay=document.getElementById("city-name");
const temperatureDisplay=document.getElementById("temperature");
const descriptionDisplay=document.getElementById("description");
const API_KEY="dc8fc2482bfc46d8cc2d20756579937c";

getWeatherBtn.addEventListener("click", async()=>{
    const city=cityInput.value.trim();
    if(!city) return;

    try{
      const weatherData=  await fetchWeatherData(city);
      displayWeatherData(weatherData);
    }catch(error){
        showError();
    }
})

async function fetchWeatherData(city){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const response=await fetch(url);
if(!response.ok){
    throw new Error("City Not Found");
}
const data=await response.json();
return data;

}


function displayWeatherData(Data){
    const {name, main, weather}=Data;
    cityNameDisplay.textContent=name;
    temperatureDisplay.textContent=`Temperature : ${main.temp}`;
    descriptionDisplay.textContent=`Weather : ${weather[0].description}`;
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add("hidden");

}
function showError(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
}
=======
document.addEventListener("DOMContentLoaded",()=>{

const cityInput=document.getElementById("city-input");
const getWeatherBtn=document.getElementById("get-weather-btn");
const errorMessage=document.getElementById("error-message");
const weatherInfo=document.getElementById("weather-info");
const cityNameDisplay=document.getElementById("city-name");
const temperatureDisplay=document.getElementById("temperature");
const descriptionDisplay=document.getElementById("description");
const API_KEY="dc8fc2482bfc46d8cc2d20756579937c";

getWeatherBtn.addEventListener("click", async()=>{
    const city=cityInput.value.trim();
    if(!city) return;

    try{
      const weatherData=  await fetchWeatherData(city);
      displayWeatherData(weatherData);
    }catch(error){
        showError();
    }
})

async function fetchWeatherData(city){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const response=await fetch(url);
if(!response.ok){
    throw new Error("City Not Found");
}
const data=await response.json();
return data;

}


function displayWeatherData(Data){
    const {name, main, weather}=Data;
    cityNameDisplay.textContent=name;
    temperatureDisplay.textContent=`Temperature : ${main.temp}`;
    descriptionDisplay.textContent=`Weather : ${weather[0].description}`;
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add("hidden");

}
function showError(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
}
>>>>>>> b7a0c6352471123da59dafb20c4214442ce7639c
})