$(document).ready(function(){

/*! Fades in page on load */
// $('#intro').css('display', 'none');
// $('#intro').fadeIn(1500).delay(2500).animate({'margin-top': '-1000px'}, 1000).fadeOut(500);

// $('#intro p').css('display', 'none');
// $('#intro p').delay(0).fadeIn(1500).delay(2500).fadeOut(1000);

$('#page').css('display', 'none');
$('#page').delay(10).fadeIn(500);

$('#content').css('display', 'none');
$('#content').delay(400).fadeIn(1250);
$('#home-photos-grid').delay(400).animate({'margin-top': '40px'}, 1000);

setTimeout(function(){
  $('#intro').remove();
}, 6000);

$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut('slow', newpage);
});
function newpage() {
window.location = newLocation;
}

// setTimeout(function () {
//    window.location.href = "https://zerograms.io/SPOOKYMINIONS/home"; //will redirect to your blog page (an ex: blog.html)
// }, 5000); //will call the function after 2 secs.

// $.get("nav.html", function(data){
//     $("#nav-placeholder").replaceWith(data);
// });

});