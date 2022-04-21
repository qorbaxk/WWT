//날씨api 불러오는 함수
const getWeather = async() =>{
    let url= new URL(`https://api.openweathermap.org/data/2.5/weather?q=jeonju&units=metric&appid=ef710ba10aec5ee8c5ce8f984a15dff0`);
    

    let response = await fetch(url);
    
    let data = await response.json();
    console.log(data);
    

}

getWeather();