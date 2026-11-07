// Lightweight Theme Switcher for Surma Tersoo's Portfolio

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }

  // Toggle on button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
