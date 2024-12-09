export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@(stud\.noroff\.no|noroff\.no)$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return password.length >= 8;
}

export function validateForm(email, password) {
  const errors = {};

  if (!validateEmail(email)) {
    errors.email = "Please enter a valid Noroff email address";
  }
  if (!validatePassword(password)) {
    errors.password = "Password must be at least 8 characters";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
