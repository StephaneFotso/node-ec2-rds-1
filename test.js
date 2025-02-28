// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:3000/api/items/3");
// request.send();
// request.addEventListener("load", function (e) {
//   console.log(request.responseText); // check the result, it's an array containing an object

//   // 5.let's convert our data to a JSON document

//   // const data = JSON.parse(this.responseText);// data here is an Array
//   // console.log(data);
// });

const getDBData = function (id) {
  fetch(`http://localhost:3000/api/items/${id}`)
    .then(function (response) {
      //console.log(response);

      // to read data from the body, we need to call the json() method on the response
      // But the json method is also an Asynchronous function, so we need
      // to handle that promise also by calling the then() method once egain
      return response.json();
    })
    .then(function (data) {
      console.log(data.response);
    });
};

getDBData(2);
