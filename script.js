const city=document.querySelector(".city");
const cityName = document.querySelector(".city-name");
const temp=document.querySelector(".temp");
const climate=document.querySelector(".climate");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchBox =document.querySelector(".city");
const btn = document.getElementById("btn");
const weather=document.querySelector(".weather");
const apiKey ="c08be58ae5a18571c1fc6d2ebefce685";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const body=document.getElementsByTagName('body');
const error=document.querySelector(".error");
const desc=document.querySelector(".desc");
const maxTemp=document.querySelector(".max-temp");
const minTemp=document.querySelector(".min-temp");

async function findWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =await response.json();
    if(response.status==404 || searchBox.value==''){
        error.style.display="block";
        weather.style.display="none";
        document.body.style.backgroundColor = '#222';
    }
    else{
        console.log(data);

    weather.style.display="block";
    error.style.display="none";
    
    cityName.innerHTML=data.name;
    temp.innerHTML=data.main.temp + "°C";
    climate.innerHTML=data.weather[0].main;
    desc.innerHTML=data.weather[0].description;
    humidity.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + "Km/hr";
    maxTemp.innerHTML=data.main.temp_max + "°C";
    minTemp.innerHTML=data.main.temp_min + "°C";
    console.log(data.weather[0].main)
    if(data.weather[0].main=='Clear'){
        document.body.style.backgroundImage = "url('./images/clear.jpg')";
    }
    else if(data.weather[0].main=='Clouds'){
        document.body.style.backgroundImage = "url('./images/cloudy.jpg')";
    }
    else if(data.weather[0].main=='Drizzle'){
        document.body.style.backgroundImage = "url('./images/drizzling.jpg')";
    }
    else if(data.weather[0].main=='Mist'){
        document.body.style.backgroundImage = "url('./images/mist.jpg')";
    }
    else if(data.weather[0].main=='snow'){
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    }
    else if(data.weather[0].main=='Rain'){
        document.body.style.backgroundImage = "url('./images/rain.jpg')";
    }
    else if(data.weather[0].main=='Haze'){
        document.body.style.backgroundImage = "url('./images/haze.jpg')";
    }
    else{
        console.log("error");
    }
    
    }
    
}

btn.addEventListener('click',()=>{
    findWeather(searchBox.value)
    console.log(searchBox.value);
});

