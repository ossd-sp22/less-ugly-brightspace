var elementList = document.querySelectorAll("*");

elementList.forEach((element) => {
  // let elementColor = element.style.color;
  // let elementBackgroundColor = element.style.backgroundColor;
  element.style.backgroundColor = "#333";
  element.style.color = "#FBFAF5";
  console.log(element.nodeType)
  // element.style.border = "1px solid #fff";
 console.log("hello my node type is " + element.nodeType + "my node name is" + element.className);
 
 
});

