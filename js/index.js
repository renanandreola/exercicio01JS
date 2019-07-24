var a = 5;
var b = "10";
var c = 10;
var d = a + c;
var e = c * a;
var f = b + e;

console.info(f);
console.log(a);
console.error(b);
var h1 = document.createElement("h1"); // <h1></h1>
h1.append(f)
document.body.appendChild(h1);

var a = document.createElement("a")
a.setAttribute("href", "http://google.com");
a.setAttribute("target", "_blank");
a.append(b);
document.body.appendChild(a);

var ul = document.createElement("ul");
var li = document.createElement("li");

ul.appendChild(li);
li.append("Item 01");

var li2 = document.createElement("li");
li2.appendChild(a);
ul.appendChild(li2);

document.body.appendChild(ul);

var exe = "Exercício Javascript"
var section = document.createElement("section");
var div = document.createElement("div");
var h1 = document.createElement("h1");
var nav = document.createElement("nav");
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var a1 = document.createElement("a");
var a2 = document.createElement("a");

section.appendChild(div);
div.appendChild(h1);
h1.append(exe);

section.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
li1.appendChild(a1);
ul.appendChild(li2);
a1.append("Link 01");
li2.appendChild(a2);
a2.append("Link 02");

document.body.appendChild(section)
