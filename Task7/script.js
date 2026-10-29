const button = document.querySelector('button');
button.addEventListener('click', getIp);

async function getIp() {
    try {
        const request = await fetch("https://api.ipify.org/");
        const ip = await request.text();
        button.textContent = ip;
    } catch (error) {console.error("Erorr:", error);}
}