document.getElementById("homeBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("galleryBtn").addEventListener("click", function() {
    document.getElementById("gallery").scrollIntoView({ behavior: 'smooth' });
});
