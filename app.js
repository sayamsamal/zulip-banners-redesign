"use strict";

let step = 0;

const navbar_alerts_banners = [
    "bankruptcy",
    "email-server",
    "demo-organization-deadline",
    "notifications",
    "profile-missing-required",
    "insecure-desktop-app",
    "profile-incomplete",
    "server-needs-upgrade"
];

const load_banner_ui = () => {
    const hash = new URL(document.URL).hash;
    const hash_path_array = hash.split('/');
    const banner_type = hash_path_array[1];
    const banner_name = hash_path_array[2];
    
    if (banner_type === "navbar-alerts") {
        if(navbar_alerts_banners.includes(banner_name)) {
            const banners = document.querySelectorAll(".banner");
            for(const banner of banners) {
                if (!banner.classList.contains("hidden")) {
                    banner.classList.add("hidden");
                }
            }
            const banner = document.querySelector(`[data-process='${banner_name}']`);
            banner.classList.remove("hidden");
            const banner_select = document.querySelector("#banner-select");
            banner_select.value = banner_name;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    load_banner_ui();

    const banner_select = document.querySelector("#banner-select");
    banner_select.addEventListener("change", (e) => {
        const banner_name = e.target.value;
        if(navbar_alerts_banners.includes(banner_name)) {
            location.hash = `/navbar-alerts/${banner_name}`;
        }
    })
});

window.addEventListener('hashchange', (e) => {
    load_banner_ui();
})