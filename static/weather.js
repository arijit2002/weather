let weather={
    "key":"ae64ce08dc2556b33696747bf643780f",
    fetchweather:function(city)
    {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.key
            ).then((response)=>response.json()
            ).then((data)=>this.displayweather(data))
    },
    displayweather:function(data){
        const {name}=data;
        const {humidity}=data.main;
        const {temp}=data.main;
        const {description}=data.weather[0];
        const {speed}=data.wind;
        console.log(name,temp,description,humidity,speed);
        document.querySelector(".name").innerText=name;
        document.querySelector(".temp").innerText="Temperature: "+temp +" °C";
        document.querySelector(".description").innerText="Description: "+description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".speed").innerText="Wind Speed: "+speed+" km/hr";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search:function(){
        //console.log("inside search")
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".sb").addEventListener("click",function(){
    //console.log("outside")
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keyup', function (e) {
    if (e.key == "Enter") {
    //console.log("outside")
    weather.search();
    }
});