let progress = 0;
const progressBar = document.querySelector(".progress");
const loadingContainer = document.getElementById("loading-container");
const mainContent = document.getElementById("main-content");

function updateProgress() {
  if (progress < 100) {
    progress += 2;
    progressBar.style.width = progress + "%";
    setTimeout(updateProgress, 20);
  } else {
    loadingContainer.style.opacity = "0";
    setTimeout(() => {
      loadingContainer.style.display = "none";
      mainContent.style.opacity = "1";
    }, 500);
  }
}

updateProgress();
