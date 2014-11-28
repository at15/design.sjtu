/**
 * Created by at15_000 on 2014/11/28.
 */
// for menus in sub pages
(function () {
    var expanded = false;

    $(document).ready(function () {
        bindMenuScrollDown();
        // TODO:does sub page need auto scroll down at first time?
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
            {top: 270},
            'slow'
        );
        expanded = true;
    }

    function menuScrollUp() {
        $('#menu').animate(
            {top: -200}
        );
        $('#menu-triangle').animate({
            top:70
        });
        expanded = false;
    }
})();