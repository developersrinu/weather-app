


let inputEle = document.getElementById('location-input');
let tempEle = document.getElementById('temp-value');
let locEle = document.getElementById('location');
let weatherdescEle = document.getElementById('weather-desc');
let btnEle = document.getElementById('btn');

const apiKey = 'b9a9713e9e34c22980bc6593e02e1279';

btnEle.addEventListener('click', function() {
    if (inputEle.value === "") {
        alert("Enter your pincode");
    } else {
        let code = "IN";

        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${inputEle.value},${code}&appid=${apiKey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                const { name } = data;
                const { feels_like} = data.main;
                const { description } = data.weather[0];
                tempEle.innerText = Math.floor(feels_like - 273);
                locEle.className = 'cc';
                locEle.innerText = name;
                weatherdescEle.innerText = description;


            })
            .catch(error => {
                alert("Error occurred while fetching weather data");
                console.error(error);
            });
    }
});
