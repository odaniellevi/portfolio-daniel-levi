let progress = 0;
const progressBar = document.querySelector(".progress");
const loadingContainer = document.getElementById("loading-container");
const mainContent = document.getElementById("main-content");

function updateProgress() {
  if (progress < 100) {
<<<<<<< HEAD
    progress += 3;
    progressBar.style.width = progress + "%";
    setTimeout(updateProgress, 50);
=======
    progress += 3; // Aumentar o tempo de carregamento
    progressBar.style.width = progress + "%";
    setTimeout(updateProgress, 50); // Ajustar o intervalo de tempo
>>>>>>> 4fed1ab09ec7254931135de6f7ba604b0e6766bf
  } else {
    loadingContainer.style.transition = "opacity 1s ease";
    loadingContainer.style.opacity = "0";
    setTimeout(() => {
      loadingContainer.style.display = "none";
      mainContent.style.display = "block";
      mainContent.style.opacity = "1";
    }, 500); // Tempo deve corresponder à duração da transição
  }
}

updateProgress();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) =>
        link.parentElement.classList.remove("selected")
      );
      this.parentElement.classList.add("selected");
    });
  });

  const toggleThemeButton = document.getElementById("toggle-theme");
  toggleThemeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });
});