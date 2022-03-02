// API key
const API_KEY = `d8cc4a908660de936d01ff41f8d81944`;

// get city name from the search bar
const searchTemp = () => {
  const cityName = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

//global function for fetch city name and tempareture
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

//get city name & fetch temparature
const displayTemp = (temp) => {
  setInnerText('city', temp.name);
  setInnerText('fetch-temp', temp.main.temp);
  setInnerText('temp-condition', temp.weather[0].main);

  //set weather dynamic icon
  const iconUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  const iconWeather = document.getElementById('weather-icon');
  iconWeather.setAttribute('src', iconUrl);
};
