var firebaseConfig = {
      apiKey: "AIzaSyBrJ783VGVItFPvHyLbzyafs_FoohsbwA8",
      authDomain: "kwitter-my-app.firebaseapp.com",
      databaseURL: "https://kwitter-my-app-default-rtdb.firebaseio.com",
      projectId: "kwitter-my-app",
      storageBucket: "kwitter-my-app.appspot.com",
      messagingSenderId: "397355335003",
      appId: "1:397355335003:web:78ffaec8db9c452d672e7e",
      measurementId: "G-P9VTHR5T4L"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names);
row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoom_names(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoom_names(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}