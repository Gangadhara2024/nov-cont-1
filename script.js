let arr = [
    { id: 1, name: 'john', age: 28, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
]


function PrintDeveloper() {
       for(let developer of arr){
        console.log(developer);
       }
    }

function addData() {
    let name = prompt("Enter name");
    let age = prompt("Enter age");
    let profession = prompt("Enter profession");

    let newData = { name: name, age:parseInt(age), profession:profession}
    console.log(newData);
}

function removeAdmin() {
    
}

function concatenateArray() {
   let dummyArray = [
      {name: "rahul", age: "25", profession: "developer"},
      {name: "ankit", age: "29", profession: "SDE"}
   ]
   let resultArray = arr.concat(dummyArray);
   console.log("concatenate Array :", resultArray);
}

function averageAge() {
   for(let i=0; i<arr.length; i++){
        arr[i].age;
   }
   let age = console.log("average :", arr[0].age/3 + arr[1].age/3 + arr[2].age/3);
 }

 function checkAgeAbove25() {
    for(let j=0; j<arr.length; j++){
        if(arr[j].age > 25){
            console.log("above 25");
        }
        else{
            console.log("below 25");
        }
    }
 }

 function uniqueProfessions() {
        for(let p=0; p<arr.length; p++){
             let unique = arr[p].profession;
             console.log(unique);
        }
 }

 function sortByAge() {
        arr.sort((a, b) => a.age - b.age);
        console.log("sorted by age :", arr);
 }

 function updateJohnsProfession() {
     for(let n=0; n<arr.length; n++){

        let update = arr[0].profession = "manager";
         console.log(arr[n]);

     }
     
 }

 function getTotalProfessions() {
     let developers = arr.filter(dev => dev.profession === "developer");
     let admins = arr.filter(dev => dev.profession === "admin");

     console.log(`total developers : ${developers.length}, ${admins.length}`);
    }
