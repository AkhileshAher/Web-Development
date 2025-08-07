# ⚡ LeetMetric

A mini project to track and visualize your **LeetCode** progress using **HTML, CSS, and JavaScript**.



## 🚀 Features

- 🔍 **Search** LeetCode user by username
- 📊 Visual statistics for **Easy**, **Medium**, and **Hard** problems
- 🧠 Clean, animated UI progress indicators
- ⚙️ **Built with:** HTML, CSS, JavaScript (Vanilla)



## 🧑‍💻 Getting Started

1. **Clone the repository:**
- git clone https://github.com/AkhileshAher/WT-Mini-Project-LeetMetric.git
- cd `WT-Mini-Project-LeetMetric`
   
2. **Open the application:**
- Open `index.html` in your browser.
- Enter your LeetCode username and hit **Search**.

## ⚠️ Important Notes

- The **LeetCode GraphQL API** is CORS-restricted.
 - Direct browser (frontend-only) requests will fail due to CORS policy.
 - You might encounter `403` (forbidden) or `429` (rate limited) errors, or browser messages such as:
   - `"CORS header 'Access-Control-Allow-Origin' missing"`

### How to Bypass CORS Issues

| Approach           | Secure | User-Friendly | Stable |
|--------------------|--------|---------------|--------|
| CORS Proxy         | ❌     | ✔️            | ❌     |
| Custom Backend/API | ✔️     | ✔️            | ✔️     |
| Browser Extension  | ❌     | ❌ (advanced) | ❌     |

**Recommended:**  
Set up a simple backend server (Node.js/Express, Flask, etc.) to relay API requests from LeetCode to the frontend with added CORS headers.

For quick demos/testing, you can use a public CORS proxy, but expect potential rate limits or errors.

## 🛠️ Tech Stack

- 🌐 HTML5
- 🎨 CSS3
- 🧠 JavaScript (Vanilla)


## 📄 License

MIT © Akhilesh Aher



**Happy Coding!**

