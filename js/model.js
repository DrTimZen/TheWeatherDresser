export const weather = {};

export const getWeatherData = async function () {
  try {
    const position = await getCurrentPosition();
    const { latitude: lat, longitude: lon } = position.coords;

    const resLoc = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=de`
    );
    const { city: location } = await resLoc.json();

    const unit = 'metric';

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APP_KEY}&units=${unit}`
    );

    const weatherData = await weatherRes.json();
    console.log(weatherData);
    await createWeatherObj(weatherData);
  } catch (err) {
    console.log(err);
  }
};

const createWeatherObj = async function (data) {
  weather.location = data.name;
  weather.temp = data.main.temp;
  weather.feels_like = data.main.feels_like;
  weather.description = data.weather[0].description;
  weather.icon = data.weather[0].icon;
  console.log(weather);
};

const getCurrentPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    );
  });
};
