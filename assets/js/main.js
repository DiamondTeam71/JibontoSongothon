window.addEventListener("load", () => {
  const intro = document.getElementById("intro-box");
  const main = document.getElementById("main-content");
  const progress = document.getElementById("progress");
  const progressLabel = document.getElementById("progress-label");

  let percent = 0;
  const interval = setInterval(() => {
    percent++;
    progress.style.width = percent + "%";
    progressLabel.textContent = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      intro.style.display = "none";
      main.classList.add("visible");
    }
  }, 5);
  function showImage(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").classList.add("visible");
  }

  function hideImage() {
    document.getElementById("imageModal").classList.remove("visible");
  }
  
});

  