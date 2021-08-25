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

document.getElementById("Welcome_User").innerHTML = "Welcome " + localStorage.getItem("User");
getData();

function Addroom() {
      var roomname = document.getElementById("ROOM").value;
      firebase.database().ref("/").child(roomname).update(
            {
                  purpose: "Adding room name"
            }
      );
      localStorage.setItem("ROOM_Name", roomname);
      window.location = "kwitter_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name : ", Room_names);
                  var htmlData = "";
                  htmlData = htmlData + '<div class="data" id=' + Room_names + ' onclick="goTochat(this.id)">' + "#" + Room_names + '</div> <hr>';
                  document.getElementById("output").innerHTML += htmlData;
                  //End code
            });
      });
}
getData();

function LogOut() {
      localStorage.removeItem("User");
      window.location = "index.html";
}

function goTochat(name) {
      localStorage.setItem("Room_name", name);
      window.location = "CHATroom.html"
}