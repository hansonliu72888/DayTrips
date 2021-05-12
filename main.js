const $ = document.querySelector.bind(document);
document.addEventListener("DOMContentLoaded", init);

// Input
let locationInput;

// Text
let currentLocation;

function init() {
  // Initialize elements
  const submitBtn = $("button#submit");
  locationInput = $('input[list="locations"]');
  currentLocation = $("p#yeet");

  submitBtn.addEventListener("click", updateLocation);
}

function updateLocation() {
  // Change the text to match the value of the input (the selected location)
  currentLocation.innerText = locationInput.value;
}

function searchBar() {
  document.getElementById("demo").style.visibility = "visible";
}

function printStartLocation() {
  var location = document.getElementById("start").value;
  console.log(location);
  const startlocation = document.getElementById("startlocation");
  startlocation.innerHTML = location;
}

function printEndLocation() {
  var location = document.getElementById("end").value;
  console.log(location);
  const endlocation = document.getElementById("endlocation");
  endlocation.innerHTML = location;
}

var origin1 = "Art Gallery Of Ontario";
console.log(origin1);
var destinationA = "CF Toronto Eaton Centre";

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: "DRIVING"
  },
  callback
);

function callback(response, status) {
  if (status == "OK") {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}

console.log(distance);
console.log(duration);
