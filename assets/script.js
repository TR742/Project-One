// Fetching API and responding the request in JSON
fetch("https://dog.ceo/api/breeds/image/random/2")
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
  });





                         // SECOND API CALL Google Map//


function initMap() {
  const Arizona
    = { lat: 33.45, lng: -112.07 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Arizona
    ,
  });
  
  // The marker, positioned at the Phoenix metro 

  const marker = new google.maps.Marker({
    position: Phoenix
    ,
    map: map,
  });
};

