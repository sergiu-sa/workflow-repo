import { createMenu } from "../js/ui/common/createMenu.js";
import { registerFormListener } from "../js/listeners/auth/registerFormListener.js";
import { loginFormListener } from "../js/listeners/auth/loginFormListener.js";
import { logoutButtonListener } from "./listeners/auth/logoutButtonListener.js";
// import { setLogoutButtonListener } from "./js/listeners/logoutListener.js";

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;

  console.log(path);

  switch (path) {
    case "/auth/login/":
      loginFormListener();
      break;
    case "/auth/register/":
      registerFormListener();
      break;
    default:
  }
}

initializeApp();
