function logout() {
    const accessToken = localStorage.removeItem("access_token");
    window.location.href = "/index.html"
}

window.onload = function() {

    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
        console.log(`O token é: ${accessToken}`);
    } else {
        window.location.href = "/index.html"
    }

}