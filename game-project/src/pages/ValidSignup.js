const ValidSignup = (value) => {
  var err = {};
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
  if (value.email == "") {
    err.email = "Email should Not be empty";
  } else if (!validEmail.test(value.email)) {
    err.email = "Email format didn 't corecct";
  } 
  if (value.password == "") {
    err.password = "password should Not be empty";
  } else if (value.confirmPassword !== value.password) {
    err.confirmPassword = "Your password does not match the first password";
  }
  if (value.firstname == "") {
    err.name = "Name should Not be empty";
  }
  return err;
};
export default ValidSignup;
