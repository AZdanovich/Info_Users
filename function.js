import { GITHUB_API_URL, userInfoElementIds } from "./vars.js";

export async function fetchUserInfo(username) {
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}`);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }

    const user = await response.json();
    displayUserInfo(user);
  } catch (error) {
    console.error("Ошибка:", error.message);
    alert(`Не удалось получить информацию о пользователе: ${error.message}`);
  }
}

export function displayUserInfo(user) {
  document.getElementById(userInfoElementIds.avatar).src = user.avatar_url;
  document.getElementById(userInfoElementIds.userName).textContent = user.login;
  document.getElementById(userInfoElementIds.githubLink).href = user.html_url;
  document.getElementById(userInfoElementIds.registrationDate).textContent =
    new Date(user.created_at).toLocaleDateString();
  document.getElementById(userInfoElementIds.repoCount).textContent =
    user.public_repos;
}
