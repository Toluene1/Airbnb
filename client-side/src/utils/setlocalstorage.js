export const handleSaveToken = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

export const handleSaveUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export function setLogin(setLoggedIn) {
  localStorage.setItem("loggedin", JSON.stringify(true));
  setLoggedIn(true);
}

export function ImgState(setUserImg) {
  setUserImg(true);
  localStorage.setItem("img", JSON.stringify(true));
}

export function Existing(setexisting) {
  localStorage.setItem("existing", JSON.stringify(true));
  setexisting(true);
}
