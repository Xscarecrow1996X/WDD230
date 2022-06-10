// Form page hidden date
const cDate = new Date();
localStorage.setItem("visitUpdate", cDate);

document.querySelector("#current_update").value = cDate;
