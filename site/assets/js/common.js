/**
 * Created by at15_000 on 2014/11/27.
 */
$(document).ready(function(){
    menuScrollDown();
});

function menuScrollDown() {
    var expanded = false;
    $('#menu-triangle').click(function () {
        console.log('menu-triangle clicked!');
        if (!expanded) {
            $('#menu').animate(
                {top: 0}
            );
            $('#menu-triangle').animate({
                top: 200
            });
            expanded = true;
        } else {
            $('#menu').animate(
                {top: -200}
            );
            $('#menu-triangle').animate({
                top: 0
            });
            expanded = false;
        }

    })
}