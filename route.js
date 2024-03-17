let dataList = [
  "Історичний музей",
  "Університет",
  "Пушкінська",
  "Київська",
  "Академіка Барабашова",
  "Академіка Павлова",
  "Студентська",
  "Героїв Праці",
];
let route = [];
function rideOnMetro(listOfStations) {
  for (let i = 0; i < listOfStations.length; i++) {
    route.push(listOfStations[i]);
    alert(route);
  }
  let MovingOn = confirm("Driving back?");
  if (MovingOn == true) {
    for (let i = route.length - 1; i >= 0; i--) {
      route.pop();
      alert(route);
    }
    alert("You arrived. Thank you for using our services");
  } else if (MovingOn == false) {
    alert("You arrived. Thank you for using our services");
  }
}
rideOnMetro(dataList);
