var config = {
    apiKey: "AIzaSyBUsd-bvcFtIVDjsEmMQWly1UfvuQ67mUg",
    authDomain: "trainhomework-71766.firebaseapp.com",
    databaseURL: "https://trainhomework-71766.firebaseio.com",
    projectId: "trainhomework-71766",
    storageBucket: "trainhomework-71766.appspot.com",
    messagingSenderId: "498222620961"
};

firebase.initializeApp(config);
let database = firebase.database();

$("#mybutt").on("click", function () {
    let train = $("#traininput").val().trim();
    let place = $("#placeinput").val().trim();
    let time = $("#timeinput").val().trim();
    let freq = $("#freqinput").val().trim();
    let trainObj = {
        name: train,
        destination: place,
        firstArrival: time,
        frequency: freq,
    }
    database.ref("trains").push(trainObj);

    $("#traininput").val("");
    $("#placeinput").val("");
    $("#timeinput").val("");
    $("#freqinput").val("");




})

// var tFrequency = 3;
// var firstTime = "03:30";
// var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
// console.log(firstTimeConverted);
// var currentTime = moment();
// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);
// var tRemainder = diffTime % tFrequency;
// console.log(tRemainder);
// var tMinutesTillTrain = tFrequency - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

database.ref("trains").on("child_added", function (snap) {
    let tName = snap.val().name;
    let tDes = snap.val().destination;
    let tFA = snap.val().firstArrival;
    let tfre = snap.val().frequency;

    let pleasentTime = moment(tFA, "HH:mm").format("HH:mm");
    console.log(pleasentTime);

    let faYear = moment(pleasentTime, "HH:mm").subtract(1, "years");
    let subTime = moment().diff(moment(faYear), "minutes");
    let remainder = subTime % tfre;
    let tillTrain = tfre - remainder;

    let next = moment().add(tillTrain,"minutes");
    next = moment(next).format("HH:mm")
    
    let newRow = $("<tr>").append(
        $("<td>").text(tName),
        $("<td>").text(tDes),
        $("<td>").text(tfre),
        $("<td>").text(next),
        $("<td>").text(tillTrain)
    )
    $("table").append(newRow);

})