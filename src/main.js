import "./css/style.css";

import { Router, Route } from "./router";

const home = Route(
  "/home",
  document.getElementById("home"),
  (element) => {
    element.classList.remove("hide");
  },
  (element) => {
    element.classList.add("hide");
  }
);

const menu = Route(
  "/menu",
  document.getElementById("menu"),
  (element) => {
    element.classList.remove("hide");
  },
  (element) => {
    element.classList.add("hide");
  }
);

const contact = Route(
  "/contact",
  document.getElementById("contact"),
  (element) => {
    element.classList.remove("hide");
  },
  (element) => {
    element.classList.add("hide");
  }
);

const router = Router(
  [home, menu, contact],
  (link) => {
    link.classList.add("active");
  },
  (link) => {
    link.classList.remove("active");
  }
);
router.init();
