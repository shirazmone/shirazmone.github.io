document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.location.href = "chapters/chapter1.html";
    });
  }
});