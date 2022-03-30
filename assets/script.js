function getApi(){
let url="https://dog.ceo/api/breeds/image/random"
let response=""
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
  for (let i = 0; i < data.length; i++){
 
  document.createElement(Image);
   figure = data[i].html_url;
        figure.display(data);
      
      }
    });

  }
  //console.log(getApi)
getApi()


// google map JS
// Initialize and add the map
function initMap() {
  // The location of 
  const Arizona  = { lat: 34.09343148219766, lng: -111.5585171177053 };
  // The map, centered at Arizona 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Arizona,
  });
  // The marker, positioned at Arizona 
  const marker = new google.maps.Marker({
    position: Arizona,
    map: map,
  });
}
// The location of AZ
const Arizona  = { lat: 34.09343148219766, lng: -111.5585171177053};
// The map, centered at AZ
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: Arizona,
});

// The marker, positioned at Phoenix
const marker = new google.maps.Marker({
  position: Phoenix,
  map: map,
});

