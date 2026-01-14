//  Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#" || href.length <= 1) {
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Nav bar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 50
    ? (navbar.style.backgroundColor = "rgba(10,10,10,0.98)")
    : (navbar.style.backgroundColor = "rgba(10,10,10,0.95)");
});

// Article viewer modal
const articleLinks = document.querySelectorAll(".article-open");
const articleModal = document.getElementById("article-modal");
const articleViewer = document.getElementById("article-viewer");
const articleClose = document.querySelector(".article-close");

const closeArticleModal = () => {
  if (articleModal) {
    articleModal.classList.remove("visible");
  }
  if (articleViewer) {
    articleViewer.removeAttribute("src");
  }
  document.body.style.overflow = "";
};

articleLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pdfPath = link.getAttribute("data-article");
    if (!pdfPath || !articleModal || !articleViewer) return;
    articleViewer.src = pdfPath;
    articleModal.classList.add("visible");
    document.body.style.overflow = "hidden";
  });
});

if (articleClose && articleModal) {
  articleClose.addEventListener("click", closeArticleModal);
  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) {
      closeArticleModal();
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeArticleModal();
  }
});
