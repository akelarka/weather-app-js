fetch('http://api.openweathermap.org/data/2.5/weather?id=709493&appid=1d2d9d201c6d0402f102fd362030acb0')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });

// {
//         "id": 709493,
//         "name": "Dubrovytsya",
//         "state": "",
//         "country": "UA",
//         "coord": {
//             "lon": 26.565029,
//             "lat": 51.574379
//         }
//     },

