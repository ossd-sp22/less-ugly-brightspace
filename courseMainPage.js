var elementList = document.querySelectorAll("*");

elementList.forEach((element) => {
  let elementColor = element.style.color;
  let elementBackgroundColor = element.style.backgroundColor;
  element.style.backgroundColor = "#000";
  element.style.color = "#fff";
});
