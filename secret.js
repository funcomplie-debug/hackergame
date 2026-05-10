console.log("Hint: de code is CYBER-2026");

function checkCode() {
  const code = document.getElementById("code").value;
  const result = document.getElementById("result");

  if (code === "CYBER-2026") {
    result.textContent = "Level 3 voltooid! volgende pagina is de finale."
  } else {
    result.textContent = "Verkeerde code.";
  }
}if (localStorage.getItem("level3")) {
  document.getElementById("level3").checked = true;
}

if (localStorage.getItem("level4")) {
  document.getElementById("level4").checked = true;
}