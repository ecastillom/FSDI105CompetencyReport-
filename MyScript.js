// Object Literal Class

const Salon = {
    Name:"The Happy Dog",
    Phone: "664-123-45-67",
    Address:{
        Street: "Evergreen Terrace",
        NumberS: "742 "

    },

    WorkingHours:{
        Days:"Mon-Fri",
        Open:"9:00 AM",
        Close: "5:00 PM"
    },

    Pets:[]


}


console.log(Salon);

let {Name, Phone, Address:{Street,NumberS},WorkingHours:{Days, Open, Close}} = Salon;

document.querySelector('.info').innerHTML=`Contact Us ${Phone}, ${Street} ${NumberS} <br> Open ${Days} From: ${Open} To: ${Close}`;

//Object Constructor
var c=0;

class Pet{
    constructor(Name, Age, Gender, Breed, Service, OwnerName, OwnerContact){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Breed = Breed;
        this.Service = Service;
        this.OwnerName = OwnerName;
        this.OwnerContact = OwnerContact;
        this.Hunger = 10;
        this.Happiness = 5;
        this.id="Pet"+c;
        c++;
    }

    OwnerInfo = function(){
        console.log("Owner Name: " + this.OwnerName + " \n" + "Contact Phone: " + this.OwnerContact);
    }

    Feed = function(){
        this.Hunger -= 5;
        this.Happiness += 5;
        console.log("Feeding...");
    }

    Status = function(){
        console.log("Hunger: " + this.Hunger + "\n" + "Happiness: " + this.Happiness);
    }
}

// const Pet1 = new Pet("Salchichon",12,"Male","Salchicha","Shower","Efren","6641234567");
// const Pet2 = new Pet("Frida",12,"Female","Electrical","Hair Cut","Estephanie","6649876543");
// const Pet3 = new Pet("Feyin",5,"Male","Schnauzer","Shower","Erik","6647894561");


// Pet1.OwnerInfo();
// Pet2.OwnerInfo();
// Pet3.OwnerInfo();

// console.log(Pet1);
// console.log(Pet2);
// console.log(Pet3);

// Pet1.Status();
// Pet1.Feed();
// Pet1.Status();

// Salon.Pets.push(Pet1);
// Salon.Pets.push(Pet2);
// Salon.Pets.push(Pet3);

var txtName = document.getElementById("txtName");
var txtAge = document.getElementById("txtAge");
var txtGender = document.getElementById("txtGender");
var txtBreed = document.getElementById("txtBreed");
var ddlService = document.getElementById("ddlService");
var txtOwnerName = document.getElementById("txtOwnerName");
var txtOwnerContact = document.getElementById("txtOwnerContact");

function Register(){
    // console.log(txtName.value);
    // console.log(txtAge.value);
    // console.log(ddlGender.value);
    // console.log(txtBreed.value);
    // console.log(ddlService.value);
    // console.log(txtOwnerName.value);
    // console.log(txtOwnerContact.value);

    const thePet = new Pet(txtName.value, txtAge.value, ddlGender.value, txtBreed.value, ddlService.value, txtOwnerName.value, txtOwnerContact.value);

    Salon.Pets.push(thePet);

    alert("You registered a new pet");
    Display(thePet);
    clear();
}

function clear(){
    txtName.value = ""; 
    txtAge.value = "";
    ddlGender.value = "";
    txtBreed.value = "";
    ddlService.value = "";
    txtOwnerName.value = "";
    txtOwnerContact.value = "";
}

function Display(PetSave){
    var tBody = document.getElementById("rowPet");

    var row = `<tr id="${PetSave.id}">
    <td> ${PetSave.Name} </td>
    <td> ${PetSave.Age} </td>
    <td> ${PetSave.Gender} </td>
    <td> ${PetSave.Breed} </td>
    <td> ${PetSave.Service} </td>
    <td> ${PetSave.OwnerName} </td>
    <td> ${PetSave.OwnerContact} </td>
    <td> <button onclick='DeletePet("${PetSave.id}")'>Delete</button></td>
    </tr>
    `;

    tBody.innerHTML+=row;
}


function DeletePet(PetID){
    var tr = document.getElementById(PetID);
    var indexDelete;

    // Search the pet using the id

    for (x=0; x < Salon.Pets.length; x++){
        var Selected = Salon.Pets[x];

        if(Selected.id === PetID){
            indexDelete = x;
        }

    }


    Salon.Pets.splice(indexDelete,1);
    tr.remove();
}

function Search(){
    var ss = document.getElementById("PetSearch").value;

    var searchString = ss.toLowerCase();

    for(var x=0; x<Salon.Pets.length;x++){
        var SearchPet = Salon.Pets[x];

        if(searchString == SearchPet.Name.toLowerCase() || searchString == SearchPet.id){
            document.getElementById("Pet"+x).setAttribute("class","selected");

        }
    }
}

