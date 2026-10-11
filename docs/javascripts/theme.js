// The header persists across instant navigation, so patch the site title once.
(function () {
  function patchNavTitle() {
    const el = document.querySelector(
      ".md-header__topic:first-child .md-ellipsis"
    );
    if (el && el.textContent.trim() === "EffUSIve" && !el.querySelector(".fusi-accent")) {
      el.innerHTML = 'Ef<span class="fusi-accent">fUSI</span>ve';
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patchNavTitle);
  } else {
    patchNavTitle();
  }
})();
