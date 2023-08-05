var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

async function search(query) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=c2f3b820dd164516b7892729230508&q=${query}&days=3`
  );
  if (response.ok && 400 != response.status) {
    let data = await response.json();
    displayCurrent(data.location, data.current),
    displayAnother(data.forecast.forecastday);
  }
}

document.getElementById('search').addEventListener('keyup', (event) => {
  search(event.target.value);
});



function displayCurrent(location, current) {
  if (null != current) {
    var date = new Date(current.last_updated.replace(' ', 'T'));
    let html = `
    <div class="today forecast">
        <div class="forecast-header" id="today">
            <div class="day">${days[date.getDay()]}</div>
            <div class=" date">${date.getDate() + monthNames[date.getMonth()]}</div>
        </div>
        <div class="forecast-content" id="current">
            <div class="location">${location.name}</div>
            <div class="degree">
                <div class="num">${current.temp_c}<sup>o</sup>C</div>
                <div class="forecast-icon">
                    <img src="https:${current.condition.icon}" alt="" width=90>
                </div>
            </div>
            <div class="custom">${current.condition.text}</div>
            <span><img src="img/umberella.png" alt="">20%</span>
            <span><img src="img/wind.png" alt="">18km/h</span>
            <span><img src="img/compass.png" alt="">East</span>
        </div>
    </div>`;
    document.getElementById('forecast').innerHTML = html;
  }
}

function displayAnother(forecastDays) {
  let html = '';
  for (let i = 1; i < forecastDays.length; i++)
    html += `
  <div class="forecast">
      <div class="forecast-header">
          <div class="day">${days[new Date(forecastDays[i].date.replace(' ', 'T')).getDay()]}</div>
      </div>
      <div class="forecast-content">
          <div class="forecast-icon">
              <img src="https:${forecastDays[i].day.condition.icon}" alt="" width=48>
          </div>
          <div class="degree">${forecastDays[i].day.maxtemp_c}<sup>o</sup>C</div>
          <small>${forecastDays[i].day.mintemp_c}<sup>o</sup></small>
          <div class="custom">${forecastDays[i].day.condition.text}</div>
      </div>
  </div>`;
  document.getElementById('forecast').innerHTML += html;
}

search('cairo');
