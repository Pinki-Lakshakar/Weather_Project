let search = document.querySelector("#search");

search.addEventListener("keyup",(e) =>{
    if(e.keyCode===13) {
        let city = e.target.value;
        getWeather(city);
    }
});

//console.log(search);

//  https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=10ebf0c8dfff99c303fe61a654ae3910

  async function getWeather(city){
     const api_key= "10ebf0c8dfff99c303fe61a654ae3910";
     let BASE_URL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        try{
            let res = await window.fetch(BASE_URL);
            let data = await res.json();
            console.log(data);

            //clouds and description 
            let weatherData = data.weather;
            //console.log(weatherData);
            let cloudOutPut =[];
            let tempData =Math.floor(data.main.temp-273);
            let time=new Date(data.timezone).getTime();

            for (let x of weatherData){
                //console.log(x.icon);
                cloudOutPut +=
                
                `<div>
                    <img src="http://openweathermap.org/img/wn/${x.icon}@2x.png" />
                    <h1>${x.main}</h1>
                    <h6> ${data.name}</h6>
                    <h5> ${ x.description}</h5>
            <h1 class="fonts-weight-bold">${ tempData/*data.main.temp - 273*/}&deg;C</h1>*/
                    
                </div>
                <div>
                <h1>Feels Like ${data.main.feel_like}</h1>
                <h6> humidity ${data.main.humidity}</h6>
                <h5> pressure ${ data.main.pressure}</h5>
                <h1 class="font-weight-bold">Min Temp ${data.main.temp_max}&deg;C</h1>
                <h1 class="font-weight-bold">Max Temp ${data.main.temp_min}&deg;C</h1>
                <h1 class="font-weight-bold">time zone ${time}</h1>
                </div>
            `;
              
               // console.log(x.id);
                //console.log(x.icon);
               // console.log(x.description);
            }
            document.getElementById('cloudTemplate').innerHTML = cloudOutPut;
            //console.log(weatherData);
        }
         catch(error){
            console.log(error);
        }
        // console.log(api_key,city);

     
    }

    /*search.addEventListener("keyup",(e) =>{
        if(e.keyCode===13) {
            let city = e.target.value;
            getWeather(city);
        }
    });*/
    