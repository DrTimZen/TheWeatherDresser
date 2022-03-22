import * as model from './model.js';
import { renderWeather, renderSpinner } from './view.js';

const loadWeather = async function () {
  try {
    renderSpinner();
    await model.getWeatherData();
    await renderWeather(model.weather);
  } catch (err) {
    console.error(err);
  }
};
loadWeather();
