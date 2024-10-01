var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"], // corrected 'Strings' to 'strings'
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
window.onload = function() {
    const currentPage = window.location.pathname;
    if (currentPage.includes('about.html')) {
        document.querySelector('.home').style.display = 'none'; // Hide home section on the about page
    }
}
