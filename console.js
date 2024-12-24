const apiKey = "5eb3056586714e856876a8006bfbf928";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let weatherImg = document.getElementById("weatherImg");
let cityTemp = document.getElementById("cityTemp");
let cityPlace = document.getElementById("place");
let speed = document.getElementById("speed");
let humidity = document.getElementById("humidity");
let speedType = document.getElementById("speedType");
let humidityRange = document.getElementById("humidityRange");
let humImg = document.getElementById("humImg");
let searchBtn = document.getElementById("btn");
let windImg = document.getElementById("windImg");
let valid  = document.getElementById("validity");
function checkWeather(){
    let cityName = document.getElementById("searchBar").value;
     if(cityName===""){
        valid.style.display = "block";
        valid.innerHTML="please enter city name!!";
        return;
     }
   fetch(apiUrl+cityName+ `&appid=${apiKey}`).then(response => response.json()).then(weatherData=>{
     if(weatherData.cod !== 200){
        valid.style.display = "block";
        valid.innerHTML="please enter valid city name!!";
        return;
     }
      else{
        valid.style.display = "none";
      }
    cityPlace.innerHTML = weatherData.name;
    cityTemp.innerHTML = Math.round(weatherData.main.temp)+"°C";
    speed.innerHTML= weatherData.wind.speed +" km/h";
    humidityRange.innerHTML=weatherData.main.humidity+"%";
    let weatherType = weatherData.weather[0].main.toLowerCase();
    weatherImg.src = `images/${weatherType}.png`;
    humidity.innerHTML="Humididty";
    speedType.innerHTML ="Wind Speed";
    humImg.src="images/humidity.png";
    windImg.src="images/wind.png";

   });
}


searchBtn.addEventListener("click",checkWeather);

searchBtn.addEventListener("click",()=>{
    let ele= document.getElementsByClassName("updateDisplay");
    ele.style.display = "block";

});


