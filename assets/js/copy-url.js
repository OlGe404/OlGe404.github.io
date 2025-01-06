document.getElementById("copy-url").addEventListener("click", function(e) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("URL copied to clipboard!");
    });
});
