// const statuslamp = document.getElementById("status").value;
const btn1On = document.getElementById("btn1_on");
const btn1Off = document.getElementById("btn1_off");
const btn2On = document.getElementById("btn2_on");
const btn2Off = document.getElementById("btn2_off");
const btn3On = document.getElementById("btn3_on");
const btn3Off = document.getElementById("btn3_off");
const btn4On = document.getElementById("btn4_on");
const btn4Off = document.getElementById("btn4_off");
const btnTest = document.getElementById("btn_test");
const st1 = document.getElementById("status1");
const st2 = document.getElementById("status2");
const st3 = document.getElementById("status3");
const st4 = document.getElementById("status4");
const st5 = document.getElementById("status_test");

const database = firebase.database();

//status relay 1

database.ref("user1/Relay").once("value", (data) => {
  console.log(data.toJSON());

  if (data.toJSON() == "ON") {
    st1.innerHTML = "Lampu 1 : OFF";
  } else {
    st1.innerHTML = "Lampu 1 : ON";
  }
});

btn1On.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user1/")
    .set({
      Relay: "ON",
    })
    .then(
      database.ref("user1/Relay").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "ON") {
          st1.innerHTML = "Lampu 1 : OFF";
        }
      })
    );
});

btn1Off.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user1/")
    .set({
      Relay: "OFF",
    })
    .then(
      database.ref("user1/Relay").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "OFF") {
          st1.innerHTML = "Lampu 1 : ON";
        }
      })
    );
});

//status relay 2

database.ref("user2/Relay2").once("value", (data) => {
  //console.log(data.toJSON());

  if (data.toJSON() == "ON") {
    st2.innerHTML = "Lampu 2 : OFF";
  } else {
    st2.innerHTML = "Lampu 2 : ON";
  }
});

btn2On.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user2/")
    .set({
      Relay2: "ON",
    })
    .then(
      database.ref("user2/Relay2").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "ON") {
          st2.innerHTML = "Lampu 2 : OFF";
        }
      })
    );
});

btn2Off.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user2/")
    .set({
      Relay2: "OFF",
    })
    .then(
      database.ref("user2/Relay2").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "OFF") {
          st2.innerHTML = "Lampu 2 : ON";
        }
      })
    );
});

//status relay 3

database.ref("user3/Relay3").once("value", (data) => {
  //console.log(data.toJSON());

  if (data.toJSON() == "ON") {
    st3.innerHTML = "Lampu 3 : OFF";
  } else {
    st3.innerHTML = "Lampu 3 : ON";
  }
});

btn3On.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user3/")
    .set({
      Relay3: "ON",
    })
    .then(
      database.ref("user3/Relay3").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "ON") {
          st3.innerHTML = "Lampu 3 : OFF";
        }
      })
    );
});

btn3Off.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user3/")
    .set({
      Relay3: "OFF",
    })
    .then(
      database.ref("user3/Relay3").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "OFF") {
          st3.innerHTML = "Lampu 3 : ON";
        }
      })
    );
});

//status relay 4

database.ref("user4/Relay4").once("value", (data) => {
  //console.log(data.toJSON());

  if (data.toJSON() == "ON") {
    st4.innerHTML = "Lampu 4 : OFF";
  } else {
    st4.innerHTML = "Lampu 4 : ON";
  }
});

btn4On.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user4/")
    .set({
      Relay4: "ON",
    })
    .then(
      database.ref("user4/Relay4").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "ON") {
          st4.innerHTML = "Lampu 4 : OFF";
        }
      })
    );
});

btn4Off.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref("/user4/")
    .set({
      Relay4: "OFF",
    })
    .then(
      database.ref("user4/Relay4").once("value", (data) => {
        //console.log(data.toJSON());

        if (data.toJSON() == "OFF") {
          st4.innerHTML = "Lampu 4 : ON";
        }
      })
    );
});

// //status relay 2
// database.ref("user2/Relay2").once("value", (data) => {
//   console.log(data.toJSON());
//   st2.innerHTML = "Lampu 2 : " + data.toJSON();
// });
// btn2On.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user2/").set({
//     Relay2: "ON",
//   });
//   st2.innerHTML = "Lampu 2 : Padam ";
// });

// btn2Off.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user2/").set({
//     Relay2: "OFF",
//   });
//   st2.innerHTML = "Lampu 2 : Nyala ";
// });

// //status relay 3
// database.ref("user3/Relay3").once("value", (data) => {
//   console.log(data.toJSON());
//   st3.innerHTML = "Lampu 3 : " + data.toJSON();
// });

// btn3On.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user3/").set({
//     Relay3: "ON",
//   });
//   st3.innerHTML = "Lampu 3 : Padam ";
// });

// btn3Off.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user3/").set({
//     Relay3: "OFF",
//   });
//   st3.innerHTML = "Lampu 3 : Nyala ";
// });

// //status relay 4
// database.ref("user4/Relay4").once("value", (data) => {
//   console.log(data.toJSON());
//   st4.innerHTML = "Lampu 4 : " + data.toJSON();
// });

// btn4On.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user4/").set({
//     Relay4: "ON",
//   });
//   st4.innerHTML = "Lampu 4 : Padam ";
// });

// btn4Off.addEventListener("click", (e) => {
//   e.preventDefault();
//   database.ref("/user4/").set({
//     Relay4: "OFF",
//   });
//   st4.innerHTML = "Lampu 4 : Nyala ";
// });
