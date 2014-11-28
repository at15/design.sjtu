/**
 * Created by at15_000 on 2014/11/28.
 */
// the menu for is different form sub pages. so just split it out
(function () {
    var homeMenuFirstScroll = false;
    var expanded = false;

    $(document).ready(function () {
        bindMenuScrollDown();
        // do the first scroll down
        setTimeout(menuScrollDown,800);
        // go up after 1s?
        setTimeout(menuScrollUp, 2000);
    });

    function bindMenuScrollDown() {
        $('#menu-triangle').click(function () {
            console.log('menu-triangle clicked!');
            if (!expanded) {
                menuScrollDown();
            } else {
                menuScrollUp();
            }
        });
    }

    function menuScrollDown() {
        $('#menu').animate(
            {top: 0},
            'slow'
        );
        $('#menu-triangle').animate(
            {top: 200},
            'slow'
        );
        expanded = true;
    }

    function menuScrollUp() {
        $('#menu').animate(
            {top: -200}
        );
        $('#menu-triangle').animate({
            top: 0
        });
        expanded = false;
    }
})();