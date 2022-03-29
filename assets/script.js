response = document.getElementById('response')

function getApi(){
let url = "https://dog.ceo/api/breeds/image/random/13";


fetch(url)
.then(function (response) {
  return response.json();
})


.then(function (data) {
  // console.log(data)
  for (let i = 0; i < data.length; i++){

 console.log(data[i])


  let i1 = document.createElement('img');
      i1.textContent = data[i].message;
  //  console.log(data[i].message)

   response.append(i1);  
      }
    });

 }

console.log(getApi)
 getApi()



 


 // fetch(url)
  // .then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error("NETWORK RESPONSE ERROR");
  //   }
  // })
  // .then(data => {
  //   console.log(data.message);
  //   displayImg(data)
  // })

  // console.log(data.message);