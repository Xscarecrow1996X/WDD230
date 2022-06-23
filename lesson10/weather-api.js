const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=318b4d20506cf8ad502829d2accf0043";

async function apiFetch() { 
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        } else {
            throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

// function displayResults(data)

//     {
//         // console.log(jsObject);
//         document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);

//         const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
//         const desc = jsObject.weather[0].description;
//         document.querySelector('#icon-src').textContent = iconsrc;
//         document.querySelector('#weathericon').setAttribute('src', iconsrc);
//         document.querySelector('#weathericon').setAttribute('alt', desc);
//         document.querySelector('figcaption').textContent = desc;
//     };

apiFetch();