var cancha = document.createElement("div");
cancha.setAttribute("id","cancha");
var innerCancha = document.createElement("div");
innerCancha.setAttribute("id","inner-cancha");
var arco1 = document.createElement("div");
var arco2 = document.createElement("div");
arco1.setAttribute("id","arco1");
arco2.setAttribute("id","arco2");








innerCancha.appendChild(arco1);
innerCancha.appendChild(arco2);
cancha.appendChild(innerCancha);

document.getElementById('estadio').appendChild(cancha);
