var elementList = document.querySelectorAll("*");

elementList.forEach((element) => {
  // let elementColor = element.style.color;
  // let elementBackgroundColor = element.style.backgroundColor;
  element.style.backgroundColor = "#333";
  element.style.color = "#eee";

  // element.style.border = "1px solid #fff";

  console.log("hello");
});
