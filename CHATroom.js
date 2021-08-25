var firebaseConfig = {
    apiKey: "AIzaSyBH6G8EPj76Zt8BR0SMDPGXwllocZykzUA",
    authDomain: "c94y-20a73.firebaseapp.com",
    databaseURL: "https://c94y-20a73-default-rtdb.firebaseio.com",
    projectId: "c94y-20a73",
    storageBucket: "c94y-20a73.appspot.com",
    messagingSenderId: "336973871516",
    appId: "1:336973871516:web:a0c676c61d88e332e53059",
    measurementId: "G-HDK8Z1KKYM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("User");
var roomNAME = localStorage.getItem("Room_name");
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

            }
        });
    });
}
getData();


function send() {
    var message = document.getElementById("Message").value;
    firebase.database().ref(roomNAME).push({
        like: 0,
        name: username,
        message: message
    })
}