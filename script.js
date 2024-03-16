function clearForm() {
  document.getElementById("name").value = "name";
  document.getElementById("email").value = "email";
  document.getElementById("Phone_num").value = "Phone_num";
  document.getElementById("age").value = "age";
  document.querySelectorAll('input[name="gender"]').forEach((radio) => radio.checked = false);
  document.getElementById("subjects").selectedIndex = -1;
  document.getElementById("password").value = "";
}