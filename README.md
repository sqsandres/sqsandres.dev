# Introduction 
This repository contains the code of my website. You may think that everything in this section could be done with third-party libraries and HTML, but part of this code is to show you how I write code, the love I put into it and that I can use all the languages and use libraries when necessary (it is essential to reuse code from others).

#  🛠️ Stack

* HTML
* CSS
* Javascript


## 🚀 Getting Started

1. [Clone](https://sqsandres@dev.azure.com/sqsandres/sqsandres.dev/_git/sqsandres.dev) or fork this repository.

```bash
git clone https://sqsandres@dev.azure.com/sqsandres/sqsandres.dev/_git/sqsandres.dev
```

2. Install the dependencies:

- I used [npm](https://www.npmjs.com/) to install and manage the dependencies.

```bash
# Install bun for MacOS, WSL & Linux:
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

# Install bun for Windows:
winget install OpenJS.NodeJS

```
3. Run the development server:

```bash
npm run
```
4. Open [**http://localhost:8080**](http://localhost:8080/) with your browser to see the result 🚀


## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:8080`.             |
| ⚙️  | `pack`           | Build your production site to `sqsandres.dev-0.8.0.tgz`. |
| ⚙️  | `test`           | run this project's tests |

## 🔑 License

[MIT](#) - Created by [**sqsandres.dev**](https://sqsandres.dev).

## ✅ Todo...

- [ ] Contact us page.
- [ ] Create modules for the javascript renders.
- [ ] Replace the json file for a backend API call.
- [ ] Version using Astro.
- [ ] Version using React.
- [ ] Version using Angular.
- [ ] Version using VUE.

