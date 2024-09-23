import { PASSWORD_MIN_LENGTH } from "../constants/settings.js";

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@(stud\.noroff\.no|noroff\.no)$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return password.length >= PASSWORD_MIN_LENGTH;
}

export function validateLoginForm(email, password) {
  const errors = [];

  if (!validateEmail(email)) {
    errors.push("Please enter a noroff.no or stud.noroff.no email address.");
  }

  if (!validatePassword(password)) {
    errors.push(
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`
    );
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}
