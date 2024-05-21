document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop through each navigation link
  navLinks.forEach(function (navLink) {
    // Add click event listener to each nav link
    navLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = this.getAttribute("href"); // Get target section id
      const targetSection = document.querySelector(targetId); // Find target section

      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to the clicked nav link
        this.classList.add("active");
      }
    });
  });
});
