"use strict";

class Car {
  make: string = "";
  model: string = "";
  price: number = 0;
  mileage: number = 0;
  year: number = 0;
  color: string = "";
  seats: number = 0;
  previousOwners: number = 0;

  constructor(
    make: string,
    model: string,
    price: number,
    mileage: number,
    year: number,
    color: string,
    seats: number,
    previousOwners: number
  ) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.mileage = mileage;
    this.year = year;
    this.color = color;
    this.seats = seats;
    this.previousOwners = previousOwners;
  }
}

// car makes
let carMakes: any = {
  Buggati: [],
  Lamborghini: [],
  Ferrari: [],
  Mercedes: [],
  RollsRoyce: [],
};
carMakes.Buggati = [
  "Centodieci",
  "Pur Sport",
  "La Voiture Noire",
  "Divo",
  "Chiron Sport",
];
carMakes.Lamborghini = ["Huracan", "Aventador", "Urus"];
carMakes.Ferrari = ["GTC4", "F8", "Roma", "812", "Portofino"];
carMakes.RollsRoyce = ["Cullinan", "Wraith", "Ghost", "Phantom", "Dawn"];
carMakes.Mercedes = [
  "Benz A-Class",
  "Benz CLA",
  "Benz S-Class",
  "Benz AMG GT",
  "Benz C-Class",
];
carMakes.McLaren = ["620R", "720S", "570S", "GT", "Senna"];

let cars: any[];
// cars = JSON.parse(localStorage.getItem("cars")!);
// if (cars == null) {
cars = carGenerator(carMakes, 20);
saveNewCar();
cars.push(new Car("Honda", "New One", 1241313, 2141, 312, "green", 1, 1));

// }

let pageHolder: any = document.getElementById("page");

let saveButton: any = document.getElementById("save");
saveButton.addEventListener("click", addingANewCar);

renderingCars();

// enables car saving
function saveNewCar() {
  let carsString = JSON.stringify(cars);
  localStorage.setItem("cars", carsString);
}

// filterByPrice () => {
//   let priceFilter = cars.filter((c)=> c.colors ===)
// }
function renderingCars() {
  // clears the html page
  pageHolder.innerHTML = "";

  for (let i = 0; i < cars.length; i++) {
    let carCard = document.createElement("div");
    carCard.classList.add("carCard");
    pageHolder.appendChild(carCard);

    let heading = document.createElement("h1");
    heading.innerHTML = cars[i].make + " " + cars[i].model;
    carCard.appendChild(heading);

    let image = document.createElement("img");
    image.src = cars[i].image;
    carCard.appendChild(image);
    image.style.width = "80%";

    let price = document.createElement("p");
    price.innerHTML = "Price: £" + cars[i].price;
    carCard.appendChild(price);

    let year = document.createElement("p");
    year.innerHTML = "Year: " + cars[i].year;
    carCard.appendChild(year);

    let mileage = document.createElement("p");
    mileage.innerHTML = "Mileage: " + cars[i].mileage;
    carCard.appendChild(mileage);

    let seats = document.createElement("p");
    seats.innerHTML = "Seats: " + cars[i].seats;
    carCard.appendChild(seats);

    let owners = document.createElement("p");
    owners.innerHTML = "Previous Owners: " + cars[i].owners;
    carCard.appendChild(owners);

    let condition = document.createElement("p");
    condition.innerHTML = "Condition: " + cars[i].condition;
    carCard.appendChild(condition);

    let color = document.createElement("div");
    color.classList.add("colorBox");
    carCard.appendChild(color);
    color.style.backgroundColor = cars[i].color;
    color.innerHTML = "Color: " + cars[i].color;

    let btn = document.createElement("button");
    btn.classList.add("delete");
    btn.innerHTML = "Delete car";
    carCard.appendChild(btn);
    btn.onclick = function () {
      carCard.remove();
      cars.splice(this.dataset.index, 1);
      saveNewCar();
    };
  }
}

function addingANewCar() {
  let make = (<HTMLInputElement>document.getElementById("make")).value;
  let model = (<HTMLInputElement>document.getElementById("model")).value;
  let price = (<HTMLInputElement>document.getElementById("price")).value;
  let mileage = (<HTMLInputElement>document.getElementById("mileage")).value;
  let year = (<HTMLInputElement>document.getElementById("year")).value;
  let color = (<HTMLInputElement>document.getElementById("color")).value;
  let seats = (<HTMLInputElement>document.getElementById("seats")).value;
  let owners = (<HTMLInputElement>document.getElementById("owners")).value;
  let condition = (<HTMLInputElement>document.getElementById("condition"))
    .value;

  let car: any = {
    make: make,
    model: model,
    price: price,
    year: year,
    color: color,
    mileage: mileage,
    seats: seats,
    owners: owners,
  };
  cars.push(car);

  renderingCars();
  saveNewCar();
}

function carGenerator(
  theCarMake: {
    [x: string]: any;
    Buggati?: string[];
    Lamborghini?: any[];
    Ferrari?: any[];
    Mercedes?: any[];
  },
  carNumber: number
) {
  // random color array for newly generated cars
  let colors = [
    "Crimson",
    "Lime",
    "Coral",
    "Blue",
    "Plum",
    "Ivary",
    "Maroon",
    "Purple",
    "Gold",
    "Cyan",
    "Aquamarine",
    "Fuchsia",
    "Magenta",
    "Olive",
    "Yellow",
    "Beige",
    "Indigo",
    "Tan",
    "Teal",
    "Silver",
    "Peach",
  ];
  // random picture array for newly generated cars
  let imageDisplay = [];
  imageDisplay.push("/images/matt.jpg");
  imageDisplay.push("/images/ma858.jpg");
  imageDisplay.push("/images/Ferraris.jpg");
  imageDisplay.push("/images/EuCars.png");
  imageDisplay.push("/images/b14.jpg");
  imageDisplay.push("/images/97-audi.jpg");
  imageDisplay.push("/images/20-4.jpg");
  imageDisplay.push("/images/m707.jpg");
  imageDisplay.push("/images/la00-0e.jpg");
  imageDisplay.push("/images/new1384.jpg");
  imageDisplay.push("/images/new45da.jfif");
  imageDisplay.push("/images/new4x683.jpg");
  imageDisplay.push("/images/newb5u61.jpg");
  imageDisplay.push("/images/GTA0-1024x576.jpg");
  imageDisplay.push("/images/GTAars.jpg");
  imageDisplay.push("/images/GTAault.jpg");
  imageDisplay.push("./images/GTAhh1e.jpg");
  imageDisplay.push("C:/Users/delz/Desktop/proj/Car Database/images/GTAhmarine-cost.JPG");

  // two functions to generate random figures for the car description
  function generateStrings(avaliableList: string | any[]) {
    let j = Math.floor(Math.random() * avaliableList.length);
    return avaliableList[j];
  }

  function numberMultiplier(val: number) {
    return Math.floor(Math.random() * val) + 1;
  }

  let cars = [];
  for (let i = 0; i < carNumber; i++) {
    let make = generateStrings(Object.keys(theCarMake));
    let model = generateStrings(theCarMake[make]);
    cars.push({
      make: make,
      model: model,
      price: numberMultiplier(20000) * 10,
      mileage: numberMultiplier(300000),
      seats: numberMultiplier(4),
      year: numberMultiplier(40) * 120,
      color: generateStrings(colors),
      image: generateStrings(imageDisplay),
      owners: numberMultiplier(2),
    });
  }
  return cars;
}
