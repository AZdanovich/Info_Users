import { fetchUserInfo } from "./function.js";

document.getElementById("fetch-user").addEventListener("click", () => {
  const username = document.getElementById("username-input").value.trim();
  if (username) {
    fetchUserInfo(username);
  } else {
    alert("Пожалуйста, введите имя пользователя.");
  }
});
