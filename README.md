# X (Twitter) Auto Delete My Tweets 🗑️

![Version](https://img.shields.io/badge/version-1.3-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=flat-square)

A simple and efficient Userscript to **bulk delete your own tweets** on X (formerly Twitter). It adds a floating control button to your profile page, allowing you to wipe your history with a single click.

---

## ⚠️ Important: Language Requirement
**This script is currently optimized for the Turkish interface.**
It looks for the button text **"Sil"** to confirm deletion.
* If your X interface is in **English**, you must change your display language to **Turkish** for the script to work, OR edit the script code and replace `"Sil"` with `"Delete"`.

---

## 🚀 Features

* **Floating UI:** Adds a prominent **"START DELETE"** button to the right side of the screen.
* **Smart Filtering:** specifically targets your own tweets (`article[data-testid="tweet"]`).
* **Auto-Scroll:** Automatically scrolls down when no more tweets are visible in the current view.
* **Safety Delays:** Includes `sleep` functions between clicks to prevent UI glitches or rate limiting.
* **Manual Control:** Click "STOP DELETE" at any time to pause the process.

---

## 📥 Installation

1.  **Install a Userscript Manager:**
    * [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    * Violentmonkey
2.  **Install the Script:**
    * [**Click Here to Install**](https://raw.githubusercontent.com/tanersb/x-auto-delete/main/x-auto-delete.user.js)
    * *Or manually copy the script content into a new script file.*

---

## 🎮 How to Use

1.  Go to your **X (Twitter) Profile** page (e.g., `x.com/your_username`).
2.  Navigate to the **Posts** (Gönderiler) tab.
3.  You will see a blue **"START DELETE"** button on the right.
4.  Click it to start. The script will:
    * Click the three-dot menu (caret).
    * Select "Sil" (Delete).
    * Confirm the deletion dialog.
    * Scroll down to find the next tweet.
5.  **To Stop:** Click the button again (it toggles to "STOP DELETE").

---

## ⚠️ Disclaimer

**Use at your own risk.**
Automating actions on X can trigger spam filters or temporary account locks if done too quickly. This script includes delays to mitigate this, but the author is not responsible for any account status changes.

---

## 📝 License

Distributed under the MIT License.

---
*Developed by **tanersb***
