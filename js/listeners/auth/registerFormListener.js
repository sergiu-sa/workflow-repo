import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import MESSAGES from "../../constants/messages.js";

async function handleRegisterSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const messageContainer = document.querySelector("#message-container");
  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector('button[type="submit"]');

  messageContainer.innerHTML = "";

  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries());

  fieldset.disabled = true;
  submitButton.textContent = "Registering...";

  try {
    await register(profile);
    displayMessage(
      messageContainer,
      "success",
      MESSAGES.en.registrationSuccess
    );
    form.reset();
  } catch (error) {
    displayMessage(messageContainer, "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Register";
  }
}

export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", handleRegisterSubmit);
  }
}
