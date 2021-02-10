
let dog0 = {   // <<< is this the right way?
    name:"",
    breed:""
};

let dogs = [];

function createDog(){
    // Got the input from html
    let nameFromInput  = document.getElementById("dogName").value;
    let breedFromInput = document.getElementById("dogBreed").value;
    // Created a new dog
    let newDog = Object.create(dog0);
    newDog.name = nameFromInput;
    newDog.breed = breedFromInput;
    // added the new dog to the list
    dogs.push(newDog);
} 

// The following needs some fixing
function showDogs(){
    for(var i=0; i<dogs.length; i++){
        let dog = dogs[i].name+" of breed:"+dogs[i].breed;
        var node = document.createElement("LI"); // <li></li>
        var textnode = document.createTextNode(dog); // "Stark of breed: Tskyli"
        node.appendChild(textnode);
        document.getElementById("dogs").appendChild(node);
    
    }

}

