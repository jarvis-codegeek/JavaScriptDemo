function getWeather(city) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, city]);
        } else {
          reject(`error occured while fetching details about ${city}`);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  
    promise.then(function(response) {
      console.log(response);
    }).catch(error => console.log(error))
  }