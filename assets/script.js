function getApi() {
  let url = "https://dog.ceo/api/breeds/image/random"
  let response = ""
  // fetch (queryUrl);

  // $.ajax({
  //     url: queryUrl,
  //     method: "GET"
  //   })
  //     // Store all of the retrieved data inside of an object called "weather"
  //     .then(function(image) {
  //       // Log the queryUrl
  //       console.log(queryUrl);
  //     })
  //       // Log the resulting object
  //       console.log(queryUrl);
  fetch(url)
    .then(function (response) {
      return response.json();
    })


    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.length; i++) {

        document.createElement(Image);
        figure = data[i].html_url;
        figure.display(data);

      }
    });

}

// this is just the defualt location for the example from google it needs to be changed to Arizona after we get it to work
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}