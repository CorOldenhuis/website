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
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
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

sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.portfolio-header', {
  duration: 2000,
  distance: '300px',
  origin:'bottom'
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

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 15000,
  color: '#ed6a46',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.9);  // Number from 0.0 to 1.0

var bar = new ProgressBar.SemiCircle(bar1, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 15000,
  color: '#ed6a46',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.6);  // Number from 0.0 to 1.0

var bar = new ProgressBar.SemiCircle(bar2, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 15000,
  color: '#ed6a46',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.4);  // Number from 0.0 to 1.0
