// Fetching API and responding the request in JSON
fetch("https://dog.ceo/api/breeds/image/random/2")
  .then(function(response){
    return response.json()})
  .then( function(data) {
    console.log(data)
    console.log(data.message)
    for(let i=0; i < data.message.length; i++){
// Dynamically creating a carousel element with images are iterated and appended to
      let images = document.querySelector(".carousel-inner");
      console.log(images)
    // console.log(data)
    let imgList = document.createElement('img');
    imgList.src = data.message[i];
    images.appendChild(imgList);
    }
  });

  function slideright() {
    if(document.getElementById("carouselslider").style.left = "0%")
    {
      var push = "-100%";
    }
    else if(document.getElementById("#carouselExampleIndicators").style.left = "-100%")
    {
      var push = "-200%";        
    }
    else if(document.getElementById("#carouselExampleIndicators").style.left = "-200%")
    {
      var push = "-300%";        
    }
    else if(document.getElementById("#carouselExampleIndicators").style.left = "-300%")
    {
      var push = "-400%";        
    }
    document.getElementById("#carouselExampleIndicators").style.left = push; 
  }




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

