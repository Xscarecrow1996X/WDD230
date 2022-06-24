// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=318b4d20506cf8ad502829d2accf0043";

// async function apiFetch() { 
//     try {
//         const response = await fetch(apiURL);
//         if (response.ok) {
//         const data = await response.json();
//         console.log(data); // this is for testing the call
//         displayResults(data);
//         } else {
//             throw Error(await response.text());
//     }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function  displayResults(weatherData) {
//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
//     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     const desc = weatherData.weather[0].description;
  
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = desc;
//   }

// apiFetch();


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);//

    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;
  });