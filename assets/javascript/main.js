var config = {
    apiKey: "AIzaSyBUsd-bvcFtIVDjsEmMQWly1UfvuQ67mUg",
    authDomain: "trainhomework-71766.firebaseapp.com",
    databaseURL: "https://trainhomework-71766.firebaseio.com",
    projectId: "trainhomework-71766",
    storageBucket: "trainhomework-71766.appspot.com",
    messagingSenderId: "498222620961"
};

firebase.initializeApp(config);


let database =firebase.database();
let num = 0;
let train = {
    name:"Fast one",
    fast: "speed",
    
}

$("#myButt").on("click",function(){
    
    database.ref("objects").set(train)
})


database.ref("objects").on("value",function(snap){
    snap.val();
    console.log(database);
})


// // database.ref("trainNames").set(train);
// database.ref().on("click" ,function(snap){

//     console.log("print on load");
//     // num = snap.val().trainNames.number;

// });
// console.log(num);