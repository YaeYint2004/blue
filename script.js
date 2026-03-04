document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", function () {
    const content = this.previousElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.textContent = "See More";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.textContent = "See Less";
    }
  });
});
