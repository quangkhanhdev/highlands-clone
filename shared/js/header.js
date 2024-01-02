const SIDE_NAV = document.querySelector("header .side-nav[data-status]");
const BTN_TOGGLE_ON = document.querySelector("header .toggle--on");
const BTN_TOGGLE_OFF = document.querySelector("header .toggle--off");

BTN_TOGGLE_ON.onclick = () => SIDE_NAV.setAttribute("data-status", "show");

BTN_TOGGLE_OFF.onclick = () => SIDE_NAV.setAttribute("data-status", "hide");
