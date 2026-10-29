const button = document.querySelector('button');
button.addEventListener('click', getIp);

async function getIp() {
    try {
        const request = await fetch("https://api.ipify.orgx/");
        const ip = await request.text();
        button.textContent = ip;
    } catch (error) {alert("Error: " + error.message);}
}