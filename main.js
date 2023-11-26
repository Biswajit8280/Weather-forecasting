const apiKey="338828df4a5e15246081d002990e3628";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response= await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C ";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        { 
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png?ga=GA1.2.1405065847.1695582887";
        }
        else if(data.weather[0].main == "Clear")
        { 
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png?ga=GA1.2.1405065847.1695582887";
        }
        else if(data.weather[0].main == "Rain")
        { 
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146860.png?ga=GA1.2.1405065847.1695582887";
        }
        else if(data.weather[0].main == "Drizzle")
        { 
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/12607/12607703.png?ga=GA1.2.1405065847.1695582887";
        }
        else if(data.weather[0].main == "Mist")
        { 
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4834/4834506.png?ga=GA1.1.1405065847.1695582887";
        }


    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=338828df4a5e15246081d002990e3628').then(response => response.json()).then(data => {
    for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    for(i = 0; i<5; i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
}

console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))





//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
if(day + d.getDay() > 6){
    return day + d.getDay() - 7;
}
else{
    return day + d.getDay();
}
}

for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}

}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})


const curDate = document.getElementById("date");


    const getCurrentDay = () => {
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

let currentTime = new Date();
let day = weekday[currentTime.getDay()];
return day;
};

const getCurrentTime = () => {
var months = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"June",
"July",
"Aug",
"Sept",
"Oct",
"Nov",
"Dec",
];

var now = new Date();
var month = months[now.getMonth() + 1];
var date = now.getDate();

let hours = now.getHours();
let mins = now.getMinutes();

let periods = "AM";

if (hours > 11) {
periods = "PM";
if (hours > 12) hours -= 12;
}
if (mins < 10) {
mins = "0" + mins;
}

return `${month} ${date} | ${hours}:${mins}${periods}`;
};

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();


//----------------------------------------------------5 days weather------------------------------------------------------------------//
//  https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=338828df4a5e15246081d002990e3628'   //





/* document.getElementById("day1Min").innerHTML = Math.round(data.list[0].main.temp_min - 273.15, -2);
document.getElementById("day2Min").innerHTML = Math.round(data.list[1].main.temp_min - 273.15, -2);
document.getElementById("day3Min").innerHTML = Math.round(data.list[2].main.temp_min - 273.15, -2);
document.getElementById("day4Min").innerHTML = Math.round(data.list[3].main.temp_min - 273.15, -2);
document.getElementById("day5Min").innerHTML = Math.round(data.list[4].main.temp_min - 273.15, -2);

document.getElementById("day1Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day2Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day3Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day4Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day5Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);

document.getElementById("img1").src = "http://openweathermap.org/img/wn/"+
data.list[0].weather[0].icon
+".png";
document.getElementById("img2").src = "http://openweathermap.org/img/wn/"+
data.list[1].weather[0].icon
+".png";
document.getElementById("img3").src = "http://openweathermap.org/img/wn/"+
data.list[2].weather[0].icon
+".png";
document.getElementById("img4").src = "http://openweathermap.org/img/wn/"+
data.list[3].weather[0].icon
+".png";
document.getElementById("img5").src = "http://openweathermap.org/img/wn/"+
data.list[4].weather[0].icon
+".png";


document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
document.getElementById("day5").innerHTML = weekday[CheckDay(4)];

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";  */