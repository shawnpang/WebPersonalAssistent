window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription =document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');




  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const apiKey = "bb765d3b591668c9b8988b811ae10a85"
      const api =
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          console.log(data);

          //Set DOM elements from weather api
          locationTimezone.textContent = data.name;
          temperatureDegree.textContent = data.main.temp;
          temperatureDescription.textContent =
                        data.weather[0].main + "/"+ data.weather[0].description;
          icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById('weather-icon').src=icon;
        });
    })




  }else{
    alert("We will not be able to continue without the permission")
  }


})
