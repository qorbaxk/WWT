//지역

//온도
let nowTemp = 0;
//체감온도
let feelTemp = 0;
//강수량
let rainFall = 0;


//날씨api 불러오는 함수
const getWeather = async() =>{
    let url= new URL(`https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=ef710ba10aec5ee8c5ce8f984a15dff0`);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    nowTemp = data.main.temp;
    feelTemp = data.main.feels_like;
    rainFall = data.rain;
    
    console.log("현재온도는",Math.round(nowTemp),"°");
    console.log("체감온도는",Math.round(feelTemp),"°");
    console.log("강수량은",rainFall);


}

getWeather();