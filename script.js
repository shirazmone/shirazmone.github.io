const hiddenTexts = document.querySelectorAll(".hidden-text");

document.addEventListener("selectionchange", () => {
  const selectedText = window.getSelection().toString().trim();

  hiddenTexts.forEach(el => {
    if (selectedText.length > 0) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
});
