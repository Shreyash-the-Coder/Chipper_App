var firebaseConfig = {
  apiKey: "AIzaSyCUWughAtpnQCZP1K-8C3bwI4CuNE4YmRI",
  authDomain: "kwitter-6c7e5.firebaseapp.com",
  databaseURL: "https://kwitter-6c7e5-default-rtdb.firebaseio.com",
  projectId: "kwitter-6c7e5",
  storageBucket: "kwitter-6c7e5.appspot.com",
  messagingSenderId: "504199674641",
  appId: "1:504199674641:web:a4fc53b4f648e3cbe06ab0"
};
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location =  ("index.html");
}
