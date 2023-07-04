console.log(document.title)
console.log(document.URL)
console.log(document.links)
var headTitle=document.getElementById("header-title");
headTitle.textContent='hello';
headTitle.innerHTML="<h6>hello</h6>"
let header=document.getElementById("main-header")
header.style.borderBottom="solid 8px black"
console.log(headTitle.textContent)
let ele=document.getElementsByClassName("title")
ele[0].innerHTML="<h2 style=color:green><b>Add Items</h2>";

console.log(ele[0])