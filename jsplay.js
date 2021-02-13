let carType = {
    model: "",
    color: "",
    price: 0
};


let listOfModels = ["Opel Astra", "Opel Crossland", "Opel Grandland", "Opel Corsa"];
let listOfColors = ["red", "blue", "black", "white"];
let priceRange = [12000, 25000];

function createRandomListOfCars(numberOfCars, models, colors, range ){
    let cars = [];
    for (var i=1; i<=numberOfCars; i++){
        let car = Object.create(carType);
        let randomModelIndex = getRandomInt(0, models.length);
        car.model = models[randomModelIndex];
        let randomColorIndex = getRandomInt(0, colors.length); 
        car.color = colors[randomColorIndex];
        car.price = getRandomInt(range[0], range[1]);
        cars.push(car);
    }
    console.log(cars);
    return cars;
}

createRandomListOfCars(10, listOfModels, listOfColors, priceRange);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  function giveCarsToOwners(owners, cars){
    if(owners.length>cars.length){
        console.log("Not enough cars for everybody");
    }else{
        // for(var i=0; i<owners.length;i++){
        //     let randomCarIndex = getRandomInt(0, cars.length)
        //     console.log(owners[i]+" got the "+cars[randomCarIndex].color+" "+cars[randomCarIndex].model);
        //     cars.splice(randomCarIndex,1);    
        //     console.log(cars);
        // }
        owners.forEach(owner => {
    
            let randomCarIndex = getRandomInt(0, cars.length);
            if (owner.budget>=cars[randomCarIndex].price){
            console.log(owner.name+" got the "+cars[randomCarIndex].color+" "+cars[randomCarIndex].model);
            cars.splice(randomCarIndex,1);    
            console.log(cars);
            }
        });

    }        
  }

  let owners = [
      {name:"George",
       budget:15000 
      },
      {name:"Efs",
       budget:15000 
      },
      {name:"JTouni",
       budget:25000 
      }
    ];

  giveCarsToOwners(owners, createRandomListOfCars(10, listOfModels, listOfColors, priceRange));

//   function takeThingsToCounter(pragma){
//       standUp();
//       getTheThing(pragma);
//       goToCounter();
//       dropTheThing(pragma);
//       getBackToCouch();
//       sitDown();
//   }

//   let pragma = "xtena";
//   takeThingsToCounter(pragma);
//   takeThingsToCounter("remote");