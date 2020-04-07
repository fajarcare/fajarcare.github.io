// const statuslamp = document.getElementById("status").value;
const btn1On = document.getElementById("btn1_on");
const btn1Off = document.getElementById("btn1_off");
const btn2On = document.getElementById("btn2_on");
const btn2Off = document.getElementById("btn2_off");
const btn3On = document.getElementById("btn3_on");
const btn3Off = document.getElementById("btn3_off");
const btn4On = document.getElementById("btn4_on");
const btn4Off = document.getElementById("btn4_off");
const st1 = document.getElementById("status1");
const st2 = document.getElementById("status2");
const st3 = document.getElementById("status3");
const st4 = document.getElementById("status4");

const database = firebase.database();

btn1On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user1/").set({
    Relay: "ON",
  });
  st1.innerHTML = "Lampu 1 : Padam ";
});

btn1Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user1/").set({
    Relay: "OFF",
  });
  st1.innerHTML = "Lampu 1 : Nyala";
});

btn2On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user2/").set({
    Relay2: "ON",
  });
  st2.innerHTML = "Lampu 2 : Padam ";
});

btn2Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user2/").set({
    Relay2: "OFF",
  });
  st2.innerHTML = "Lampu 2 : Nyala ";
});

btn3On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user3/").set({
    Relay3: "ON",
  });
  st3.innerHTML = "Lampu 3 : Padam ";
});

btn3Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user3/").set({
    Relay3: "OFF",
  });
  st3.innerHTML = "Lampu 3 : Nyala ";
});

btn4On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user4/").set({
    Relay4: "ON",
  });
  st4.innerHTML = "Lampu 4 : Padam ";
});

btn4Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/user4/").set({
    Relay4: "OFF",
  });
  st4.innerHTML = "Lampu 4 : Nyala ";
});
