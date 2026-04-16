document.addEventListener("DOMContentLoaded", function () {
  const cookieOverlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const closeBtn = document.getElementById("cookie-close-btn");
  const acceptLink = document.querySelector(".cookie-link-accept");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieOverlay.classList.remove("hidden");
  }

  function handleAccept() {
    localStorage.setItem("cookiesAccepted", "true");
    cookieOverlay.classList.add("hidden");
  }

  if (acceptBtn) acceptBtn.addEventListener("click", handleAccept);
  if (acceptLink)
    acceptLink.addEventListener("click", (e) => {
      e.preventDefault();
      handleAccept();
    });

  if (closeBtn) closeBtn.addEventListener("click", handleAccept);

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((i) => i.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("form");
  const successMessage = document.getElementById("success-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      contactForm.reset();

      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    });
  }
});
