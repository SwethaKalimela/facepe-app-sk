/**
 * Contact page client behavior: form validation + simulated submit.
 */
export function initContactPage() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const submitBtn = form.querySelector("[data-contact-submit]");
  const submitLabel = form.querySelector("[data-contact-submit-label]");
  const status = form.querySelector("[data-contact-status]");

  const setStatus = (message, tone) => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove("hidden", "text-green-600", "text-[#fb2c36]");
    if (tone === "success") status.classList.add("text-green-600");
    if (tone === "error") status.classList.add("text-[#fb2c36]");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please fill in the required fields.", "error");
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = "Sending…";
    setStatus("", "");

    try {
      // Placeholder for real API; brief artificial delay so users see feedback.
      await new Promise((resolve) => setTimeout(resolve, 700));
      form.reset();
      setStatus(
        "Thanks — your message is in. We'll reply within one business day.",
        "success"
      );
    } catch (error) {
      setStatus("Something went wrong. Please try again or email sales@facepe.ai.", "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = "Submit";
    }
  });
}
