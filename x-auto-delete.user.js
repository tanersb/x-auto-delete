// ==UserScript==
// @name         X Auto Delete My Tweets
// @namespace    https://github.com/tanersb/x-auto-delete
// @version      1.1
// @description  Deletes only your own tweets on X (Twitter).
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        none
//
// @downloadURL  https://github.com/tanersb/x-auto-delete/raw/main/x-auto-delete.user.js
// @updateURL    https://github.com/tanersb/x-auto-delete/raw/main/x-auto-delete.user.js
// ==/UserScript==

(function () {
  'use strict';

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const processed = new WeakSet();

  console.log("X Auto Delete started");

  async function process() {
    while (true) {
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
        console.log("Tweet silindi");
        await sleep(800);
      }
    }
  }

  setTimeout(process, 3000);
})();
