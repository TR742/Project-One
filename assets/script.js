// Fetching API and responding the request in JSON
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()})
  .then( function(data) {
    console.log(data)
    console.log(data.message)
    for(let i=0; i < data.message.length; i++){
// Dynamically creating a carousel element with images are iterated and appended to
      let images = document.querySelector(".carousel-item");
      console.log(images)
    // console.log(data)
    let imgList = document.createElement('img');
    imgList.src = data.message[i];
    images.appendChild(imgList);
    }
  })





                         // SECOND API CALL//

                         
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



    

