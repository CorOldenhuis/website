window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.showcase-btn', {
  duration: 2000,
  delay: 1000,
  origin:'bottom'
});
sr.reveal('.btn-default', {
  duration: 2000,
  delay: 1000,
  origin:'bottom'
});
sr.reveal('.contact-header', {
  duration: 2000,
  delay: 500,
  origin:'bottom'
});
sr.reveal('#berichten div', {
  duration: 2000,
  distance: '300px',
  origin:'bottom'
});
sr.reveal('.overmij-left', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.overmij-right', {
  duration: 3000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.portslidertext', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.portslider1', {
  duration: 2000,
  origin:'bottom',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.portfolio-header', {
  duration: 2000,
  distance: '300px',
  origin:'bottom',
  viewFactor: 0.2
});
sr.reveal('.portfolio-sub', {
  duration: 2000,
  distance: '300px',
  origin:'bottom'
});
sr.reveal('#bars', {
  duration: 2000,
  distance: '300px',
  origin:'left'
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
