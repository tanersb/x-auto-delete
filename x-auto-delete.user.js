// ==UserScript==
// @name         X Auto Delete My Tweets
// @namespace    https://github.com/tanersb/x-auto-delete
// @version      1.3
// @description  Deletes only your own tweets on X (Twitter).
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        none
//
// @downloadURL  https://raw.githubusercontent.com/tanersb/x-auto-delete/main/x-auto-delete.user.js
// @updateURL    https://raw.githubusercontent.com/tanersb/x-auto-delete/main/x-auto-delete.user.js
// ==/UserScript==

(function () {
  'use strict';

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const processed = new WeakSet();
  let running = false;

  const btn = document.createElement("div");
  btn.textContent = "START DELETE";
  btn.style.cssText = `
    position: fixed;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99999;
    background: #1d9bf0;
    color: white;
    font-weight: 700;
    padding: 12px 18px;
    border-radius: 999px;
    cursor: pointer;
    font-family: system-ui;
    box-shadow: 0 4px 14px rgba(0,0,0,.25);
    user-select: none;
  `;

  document.body.appendChild(btn);

  btn.onclick = () => {
    running = !running;
    btn.textContent = running ? "STOP DELETE" : "START DELETE";
    if (running) process();
  };

  async function process() {
    console.log("Silme başladı");
    while (running) {
      const tweets = [...document.querySelectorAll('article[data-testid="tweet"]')]
        .filter(t => !processed.has(t));

      if (tweets.length === 0) {
        window.scrollBy(0, 1200);
        await sleep(1500);
        continue;
      }

      const tweet = tweets[0];
      processed.add(tweet);

      const caret = tweet.querySelector('button[data-testid="caret"]');
      if (!caret) continue;

      caret.click();
      await sleep(400);

      const menuItems = [...document.querySelectorAll('[role="menuitem"]')];
      const deleteBtn = menuItems.find(m => m.innerText.trim() === "Sil");

      if (!deleteBtn) {
        document.body.click();
        await sleep(200);
        continue;
      }

      deleteBtn.click();
      await sleep(400);

      const dialogs = [...document.querySelectorAll('[role="dialog"]')];
      const dialog = dialogs[dialogs.length - 1];
      if (!dialog) continue;

      const confirm = [...dialog.querySelectorAll('div[role="button"]')]
        .find(b => b.innerText.trim() === "Sil");

      if (confirm) {
        confirm.click();
        await sleep(800);
      }
    }
    console.log("Silme durduruldu");
  }
})();
