//  url ="https://dog.ceo/api/breeds/image/random/13";


fetch("https://dog.ceo/api/breeds/image/random/13")
  .then(function(response){
    return response.json()})

  .then( function(data) {
        
    console.log(data)
    console.log(data.message)
    for(let i=0; i < data.message.length; i++){

      let images = document.querySelector('#response')
      console.log(images)
    // console.log(data)
    let imgList = document.createElement('img');
    imgList.src = data.message[i];
    images.appendChild(imgList);
    }
  })

  

 









// function getApi(){
// response = document.querySelector('response')
// requestUrl = 'https://dog.ceo/api/breeds/image/random/13'

//  fetch(requestUrl)
// .then(function (response) {
//   return response.json();
//   console.log(response)
// })
// }


// // let url="https://dog.ceo/api/breeds/image/random/13"

// // fetch(url)
// // .then(function (response) {
// //   return response.json();
// // })
// // .then((data) => alert("HEY TAYLOR", response.json(data)))


//   // console.log(data)

// // })

// // console.log(data.message)

// // .then(function (data) {
// //   // console.log(data)
// //   for (let i = 0; i < data.length; i++){

// //   }
// // })}
// //  getApi()



// //   let i1 = document.createElement('img');
// //       i1.textContent = data[i].message;
// //   //  console.log(data[i].message)

// //    response.append(i1);  
// //       }
// //     });

// //  }

// // console.log(getApi)
// //  getApi()



 


//  // fetch(url)
//   // .then((response) => {
//   //   if (response.ok) {
//   //     return response.json();
//   //   } else {
//   //     throw new Error("NETWORK RESPONSE ERROR");
//   //   }
//   // })
