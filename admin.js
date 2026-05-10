let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || [];

window.addEventListener("load", () => {
  showAchievement("level1", "🏆 Level 1 gehaald: Admin panel gevonden!");
});

function showAchievement(key, text) {
  if (localStorage.getItem(key)) return;

  const achievement = document.getElementById("achievement");
  if (!achievement) return;

  achievement.textContent = text;
  achievement.classList.remove("hidden");

  localStorage.setItem(key, "completed");

  setTimeout(() => {
    achievement.classList.add("hidden");
  }, 4500);
}

function saveAttempts() {
  localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
}

function login() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;
  const output = document.getElementById("loginOutput");

  loginAttempts.push({
    username: user,
    password: pass,
    time: new Date().toLocaleString()
  });

  saveAttempts();

  if (user === "admin" && pass === "password123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminBox").style.display = "flex";
    output.textContent = "";

    showAttempts();
    showAchievement("level2", "🏆 Level 2 gehaald: Admin login gevonden!");
  } else {
    output.textContent = "Verkeerde gebruikersnaam of wachtwoord.";
  }
}

function logout() {
  document.getElementById("loginBox").style.display = "flex";
  document.getElementById("adminBox").style.display = "none";
}

function showAttempts() {
  const attemptsDiv = document.getElementById("attempts");
  if (!attemptsDiv) return;

  attemptsDiv.innerHTML = "";

  loginAttempts
    .slice()
    .reverse()
    .forEach(attempt => {
      attemptsDiv.innerHTML += `
        <div class="project-card">
          <p><strong>Gebruiker:</strong> ${attempt.username}</p>
          <p><strong>Wachtwoord:</strong> ${attempt.password}</p>
          <p><strong>Tijd:</strong> ${attempt.time}</p>
        </div>
      `;
    });
}

function clearAttempts() {
  loginAttempts = [];
  localStorage.removeItem("loginAttempts");
  showAttempts();
}