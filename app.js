function showOption() {
  document.getElementById("option").classList.toggle("editOption");
}

function CreateAcc() {
  document.getElementById("loginform").classList.add("loginOpacity");
}
function goBack() {
  document.getElementById("loginform").classList.remove("loginOpacity");
}

// const menubar = document.getElementById("menubar");
// function humberger() {
//   menubar.classList.add("createpara");
// }
// menubar.addEventlistener("click", humberger());
