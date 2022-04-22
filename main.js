//멘트 정리
let rainMent = '';

//지역
let whereLoca = '';
//온도
let nowTemp = 0;
//체감온도
let feelTemp = 0;
//최저기온
let minTemp = 0;
//최고기온
let maxTemp = 0;
//강수량
let rainFall = 0;
//흐림맑음 알기위한
let cloud = 0;

//날씨api 불러오는 함수
const getWeather = async() =>{
    let url= new URL(`https://api.openweathermap.org/data/2.5/weather?&q=seoul&units=metric&appid=ef710ba10aec5ee8c5ce8f984a15dff0`);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    nowTemp = Math.round(data.main.temp);
    feelTemp = Math.round(data.main.feels_like);
    
    if(data.rain){
        rainFall = Object.values(data.rain);
    }else{
        rainFall = 0;
    }
    
    cloud = data.clouds.all;
    whereLoca = data.name;
    minTemp = Math.round(data.main.temp_min);
    maxTemp = Math.round(data.main.temp_max);
    
    console.log("현재지역은",whereLoca);
    console.log("현재온도는",nowTemp,"°");
    console.log("체감온도는",feelTemp,"°");
    console.log("강수량은",rainFall);
    console.log("현재 구름은",cloud,"%");
    console.log("오늘의 최저기온은",minTemp,"°","최고기온은",maxTemp,"°");
    
    render();
}

getWeather();




//보여주는 함수
const render = () =>{
    let ondoHTML = '';

    ondoHTML = `<p id="now-city">${whereLoca}은 지금!</p> 
    <p id="now-ondo">${nowTemp}°</p>`;

    document.getElementById("ondo-thread").innerHTML = ondoHTML;


    if(rainFall == 0){
        rainMent = "🌞 맑고 화창해요!"
    }else if(0<rainFall<=10){
        rainMent = "💧 약한 비가 내려요!"
    }else if(10<rainFall<=29){
        rainMent = "☂ 우산 꼭 챙기세요!"
    }else if(29<rainFall<=50){
        rainMent = "☔ 비가 많이 와요!"
    }else if(50<rainFall){
        rainMent = "🌀 하늘이 미쳤어요!"
    }
    
    let rainHTML = '';
    rainHTML = `<p class="left">강수량</p>
    <p>${rainFall}mm</p>
    <p>${rainMent}</p>`;

    document.querySelector(".rainFall").innerHTML = rainHTML;

    let feelHTML = '';
    feelHTML = `<p class="left">체감온도</p>
    <p>${feelTemp}°</p>
    <p>실제온도와 비슷</p>`;
    document.querySelector(".feelOndo").innerHTML = feelHTML;

}




