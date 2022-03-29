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