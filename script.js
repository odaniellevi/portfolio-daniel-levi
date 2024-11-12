let progress = 0;
const progressBar = document.querySelector(".progress");
const loadingContainer = document.getElementById("loading-container");

function updateProgress() {
  if (progress < 100) {
    progress += 1.5;
    progressBar.style.width = progress + "%";
    setTimeout(updateProgress, 20);
  } else {
    loadingContainer.style.opacity = "0";
    setTimeout(() => (loadingContainer.style.display = "none"), 500);
  }
}

updateProgress();
