const weatherSection = document.querySelector('.weather');

export const renderSpinner = () => {
  const markup = `
  <div class="spinner">
      <img src="./images/weatherIcons/umbrella.png">
    </div> 
    `;
  weatherSection.insertAdjacentHTML('afterbegin', markup);
};

export const renderWeather = async ({
  icon,
  location,
  temp,
  feels_like,
  description,
}) => {
  weatherSection.firstElementChild.remove();
  weatherSection.insertAdjacentHTML(
    'afterbegin',
    `
<img
        class="weather-icon"
        src="./images/weatherIcons/${icon}.png"
        alt="weather icon"
      />

      <div class="weather-data">
        <p class="location">${location}</p>
        <p class="temp">${temp} °C / feels like ${feels_like} °C</p>
        <p class="condition">${description}</p>
      </div>
 `
  );
};
