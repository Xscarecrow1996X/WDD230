
// Div that will contain the time at navigation bar
function datebox() {
  const datefield = document.querySelector(".time-div");

  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      now
  );
  return datefield.innerHTML = `<em>${fulldate}</em>`;
}
datebox();
//function to toggle the nav bar
function toggleMenu(){
  document.querySelector("#primaryNav").classList.toggle("open");
  document.querySelector("#burguerBtn").classList.toggle("open");
}
//add an event listener to the button to call the function toggle menu
document.querySelector("#burguerBtn").addEventListener("click", toggleMenu);

//get the current date
const dt = new Date();

const year = dt.getFullYear();

document.querySelector("#year").textContent = year;

let lmodified = document.lastModified;
document.querySelector("#lmodified").textContent = lmodified;


const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(dt);
document.querySelector("#date").innerHTML = `${fullDate}`;

let joinBanner = document.querySelector("#join-banner");

if (dt.getDay() == 1 || dt.getDay() == 2){
  joinBanner.style.display = "block";
}
else{
  joinBanner.style.display = "none";}