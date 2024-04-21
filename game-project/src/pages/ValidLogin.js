const ValidLogin = (value) => {
  var err = {};
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
  if (value.email == "") {
    err.email = "Email should Not be empty";
  } else if (!validEmail.test(value.email)) {
    err.email = "Email format didn 't corecct";
  } else {
    err.email = "";
  }
  if (value.password == "") {
    err.password = "password should Not be empty";
  } else if (!validPass.test(value.password)) {
    err.password = "password format didn 't corecct";
  } else {
    err.password = "";
  }
  return err;
};
export default ValidLogin;
