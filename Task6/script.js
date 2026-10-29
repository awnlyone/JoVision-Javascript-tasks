const button = document.querySelector(".button");
button.addEventListener("click", getIp);

async function getIp() {
        try {
        const response = await fetch("https://api.ipify.org/");
        const ip = await response.text();
        console.log(ip);
    } catch (error) {
        console.log("Error:", error);
    }
}