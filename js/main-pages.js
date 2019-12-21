$(document).ready(function(){

$('#page').css('display', 'none');
$('#page').fadeIn(500);

$('#content').css('display', 'none');
$('#content').delay(500).fadeIn(1250);
$('#home-photos-grid').delay(500).animate({'margin-top': '40px'}, 1000);
$('#footer').delay(1500).fadeIn(1250);
// $.get("nav.html", function(data){
//     $("#nav-placeholder").replaceWith(data);
// });

$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut('slow', newpage);
});
function newpage() {
window.location = newLocation;
}

});