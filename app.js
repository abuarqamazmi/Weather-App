let btn =document.getElementById("search");
let city_name= document.getElementById("city_name");
let humidity= document.getElementById("humidity");
let temp=document.getElementById("temp");
let min_temp=document.getElementById("mintemp");
let max_temp=document.getElementById("maxtemp");
let wind=document.getElementById("wind");
let cty=document.getElementById("city");
let empty_city=document.getElementById("empty");

console.log(city_name);
btn.addEventListener("click", async function(e){
	let city = city_name.value;
	let data= await  fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23
		`);
        city_name.value="";
 let weather=  await data.json();
 console.log(city);
 if(weather.message=="city not found")
 {
    document.getElementById("notFound").style.display="block";
    document.getElementById("result").style.display="none"; 
    document.getElementById("empty").style.display="none"; 
 }else if(city==""){
    document.getElementById("notFound").style.display="none";
    document.getElementById("result").style.display="none"; 
    document.getElementById("empty").style.display="block"; 
 }else{
    document.getElementById("notFound").style.display="none";
    document.getElementById("result").style.display="block"; 
    document.getElementById("empty").style.display="none"; 
 document.getElementById("result").style.transition="all 0.5s ease-out";
 cty.textContent=city.toUpperCase();
temp.textContent=weather.main.temp +" C";
wind.textContent=weather.wind.speed +" m/s";
humidity.textContent= weather.main.humidity;
min_temp.textContent=weather.main.temp_min+" C";
max_temp.textContent=weather.main.temp_max+ " C";
 }
}); 

