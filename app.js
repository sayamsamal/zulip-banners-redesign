"use strict";

let step = 0;

const desktop_notification_banner = document.querySelector("[data-process='notifications']");
const banner_close_btn = desktop_notification_banner.querySelector(".banner__close-btn");

banner_close_btn.addEventListener("click", () => {
    const content = desktop_notification_banner.querySelectorAll(".banner__content");
    content[step].classList.add("hidden");
    console.log(step);
    step = (step+1) % content.length;
    console.log(step);
    content[step].classList.remove("hidden");
});