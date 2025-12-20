/* LOGIN */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "invalid login details";
    }
}

/* CHECK LOGIN */
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    } else {
        loadpage("home");
    }
}

/* LOGOUT */ 
function logout () {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

/* DYNAMIC CONTENT */
let content = document.getElementById("content")


function loadpage(page) {
    removeActive();
    document.getElementById(page).classList.add("active")
    if (page === "home") {
        changeBackground ("home-bg");
        content.innerHTML = `
        <h2>Home</h2>
        c:\Users\322 LAB\Desktop\play school 1.jpg
        <p>welcome to the wedsite.</p>
         `;
    }
}

if (page === "about") {
    changebackground("about-bg");
    content.innerHTML = `
    <h2>About</h2>
    c:\Users\322 LAB\Desktop\play school 1.jpg
    <p>frontend project using HTML,CSS, and JavaScript.</p>
     `;
}

if (page === "services") {
    changeBackGround("services-bg");
    content.innerHTML = `
    <h2>Services</h2>
    c:\Users\322 LAB\Desktop\play school 1.jpg
    <ul>
        <li>web design</li>
        <li>Frontend Development</li>
        <li>JavaScript Projects</li>
    </ul>
    `;
}

if (page === "contact") {
    changeBackground("contact-bg");
    content.innerHTML = `
      <h2>Contact</h2>
     c:\Users\322 LAB\Desktop\play school 1.jpg
     <input type = "text" placeholder = "Name"><br><br>
     <input type = "email" placeholder = "Email"><br><br>
     <button>submit</button>
     `;
}

function removeActive() {
    document.querySelectorAll("nav a"),forEach(a=>a.classList.remove("active"));
}

function changeBackGround(className) {
    document.body.className = className;
}
