"use strict";

const theme_options = ['automatic', 'light', 'dark'];

const get_theme = () => {
    return localStorage.getItem('theme') ?? 'automatic';
}

const set_theme = (theme) => {
    localStorage.setItem('theme', theme);
    document.querySelector('.theme-selector').textContent = theme;
    if (theme === 'automatic') {
        const is_dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = is_dark_mode ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
}

const toggle_theme = () => {
    const current_theme = get_theme();
    const new_theme = theme_options[(theme_options.indexOf(current_theme) + 1) % theme_options.length];
    set_theme(new_theme);
}

window.onload = () => {
    const theme = get_theme();
    set_theme(theme);

    document.querySelector('.theme-selector').addEventListener('click', toggle_theme);
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    set_theme(isDark ? 'dark' : 'light');
  })