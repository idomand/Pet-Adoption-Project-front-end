export const validatePasswords = (obj, passwordConfirmation) => {
  if (obj.password !== passwordConfirmation) {
    return "passwords don't match";
  } else if (obj.password.length < 4) {
    return "passwords must be at least 4 characters long";
  } else {
    return null;
  }
};
