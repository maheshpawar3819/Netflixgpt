export const checkvalidation = (email, password, name) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isEmail = emailRegex.test(email) || gmailRegex.test(email);
  let ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  let isname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmail) return "Email is not valid";
  if (!ispassword) return "Password is not valid";
  if (!isname) return "Plese enter valid name";

  return null;
};
