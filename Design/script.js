window.addEventListener('scroll', function() {
    var blurRadius = Math.min(window.scrollY / 100, 5); // Adjust the divisor and max value as needed
    document.body.style.backdropFilter = 'blur(' + blurRadius + 'px)';
});