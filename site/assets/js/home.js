$(document).ready(init);

function init() {
    pageScroll();
    hSlide()
}

function pageScroll() {
    $('#wrap').onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true,
        pagination: false
    });

    // bind the scroll for btns
    $('.btn-page-up').click(function () {
        $("#wrap").moveUp();
    });
    $('.btn-page-down').click(function () {
        $("#wrap").moveDown();
    });
}


function hSlide() {
    var sNews = new SlideGroup(1);
    var sDepart = new SlideGroup(2);
    //slideNewsTitle();
}

// e... so ugly
function slideNewsTitle() {
    var smallSlideGroupNews = $('.small-slide[data-small-slide-group=1]>.small-slide-content');
    console.log('small slide group news', smallSlideGroupNews);
    var len = smallSlideGroupNews.length;
    var activeIndex = 0;
    // find the active one
    smallSlideGroupNews.each(function (index) {
        //console.log(slideGroup[index]);
        var slide = $(smallSlideGroupNews[index]);
        if (slide.hasClass('small-slide-active')) {
            console.log('i got active for small slide yeah!', index);
            activeIndex = index;
        }
    });
    $('.small-slide-left[data-small-slide-group=1]').click(function () {
        if (activeIndex === 0) {
            console.log('cant slide left for small slide');
        } else {
            console.log('small slide left');
            $(smallSlideGroupNews[activeIndex]).removeClass('small-slide-active');
            $(smallSlideGroupNews[activeIndex - 1]).addClass('small-slide-active');
            activeIndex = activeIndex - 1;
        }
    });

    $('.small-slide-right[data-small-slide-group=1]').click(function () {
        if (activeIndex === (len - 1)) {
            console.log('cant slide left for small slide');
        } else {
            console.log('small slide left');
            $(smallSlideGroupNews[activeIndex]).removeClass('small-slide-active');
            $(smallSlideGroupNews[activeIndex + 1]).addClass('small-slide-active');
            activeIndex = activeIndex + 1;
        }
    });
    //$('.h-slide-left[data-h-slide-group=1]').click(function(){
    //    console.log('slide left for group1');
    //    if(slideActiveIndex === (len -1) ){
    //        console.log('cant slide left');
    //    }else{
    //        $(slideGroup[slideActiveIndex])
    //            .animate({left:(width * -1)},'slow');
    //        $(slideGroup[slideActiveIndex + 1])
    //            .show()
    //            .animate({left:0},'slow');
    //        slideActiveIndex = slideActiveIndex + 1;
    //    }
    //});
    //$('.h-slide-right[data-h-slide-group=1]').click(function(){
    //    console.log('slide right for group1');
    //    if(slideActiveIndex === 0){
    //        console.log('cant slide right');
    //    }else{
    //        $(slideGroup[slideActiveIndex])
    //            .animate({left:width},'slow');
    //        // rearrange and move the left one
    //        $(slideGroup[slideActiveIndex-1])
    //            .show()
    //            .animate({left:0},'slow');
    //        slideActiveIndex = slideActiveIndex -1;
    //    }
    //});
}

function SlideGroup(groupId) {
    var dataAttr = '[data-h-slide-group=' + groupId + ']';
    var smallSlideDataAttr = '[data-small-slide-group=' + groupId + ']';
    var width = $('.h-slide-active').width();
    var slideGroup = $('.h-slide' + dataAttr);
    var smallSlideGroup = $('.small-slide' + smallSlideDataAttr + '>.small-slide-content');
    var len = slideGroup.length;

    var me = this;
    me.slideGroup = slideGroup;
    me.slideActiveIndex = 0;

    me.smallSlideGroup = smallSlideGroup;
    me.smallSlideActiveIndex = 0;

    me.len = len;
    me.width = width;

    // find the active one for slide
    slideGroup.each(function (index) {
        //console.log(slideGroup[index]);
        var slide = $(slideGroup[index]);
        if (slide.hasClass('h-slide-active')) {
            console.log('i got active yeah!', index);
            me.slideActiveIndex = index;
            // re arrange the position for its prev and next
            if (typeof slideGroup[index - 1] !== 'undefined') {
                $(slideGroup[index - 1]).css({left: (width * -1)});

                console.log($(slideGroup[index - 1]).position());
            }
            if (typeof slideGroup[index + 1] !== 'undefined') {
                $(slideGroup[index + 1]).css({left: width});

                console.log($(slideGroup[index + 1]).position());
            }
        }
    });

    // find the active one for title
    smallSlideGroup.each(function (index) {
        //console.log(slideGroup[index]);
        var slide = $(smallSlideGroup[index]);
        if (slide.hasClass('small-slide-active')) {
            console.log('i got active for small slide yeah!', index);
            me.smallSlideActiveIndex = index;
        }
    });

    $('.h-slide-left' + dataAttr).click(function () {
        console.log('slide left for group' + groupId);
        me.sLeft();
    });

    $('.small-slide-left' + smallSlideDataAttr).click(function () {
        console.log('slide left for group' + groupId);
        me.sLeft();
    });

    $('.small-slide-right' + smallSlideDataAttr).click(function () {
        console.log('slide right for group' + groupId);
        me.sRight();
    });

    $('.h-slide-right' + dataAttr).click(function () {
        console.log('slide right for group' + groupId);
        me.sRight();

    });
}

SlideGroup.prototype.sLeft = function () {
    var me = this;
    if (me.slideActiveIndex === (me.len - 1)) {
        console.log('cant slide left');
    } else {
        $(me.slideGroup[me.slideActiveIndex])
            .animate({left: (me.width * -1)}, 'slow');
        $(me.slideGroup[me.slideActiveIndex + 1])
            .show()
            .animate({left: 0}, 'slow');
        me.slideActiveIndex = me.slideActiveIndex + 1;
    }

    if (me.smallSlideActiveIndex === 0) {
        console.log('cant slide left for small slide');
    } else {
        console.log('small slide left');
        $(me.smallSlideGroup[me.smallSlideActiveIndex]).removeClass('small-slide-active');
        $(me.smallSlideGroup[me.smallSlideActiveIndex - 1]).addClass('small-slide-active');
        me.smallSlideActiveIndex = me.smallSlideActiveIndex - 1;
    }
};

SlideGroup.prototype.sRight = function () {
    var me = this;
    if (me.slideActiveIndex === 0) {
        console.log('cant slide right');
    } else {
        $(me.slideGroup[me.slideActiveIndex])
            .animate({left: me.width}, 'slow');
        // rearrange and move the left one
        $(me.slideGroup[me.slideActiveIndex - 1])
            .show()
            .animate({left: 0}, 'slow');
        me.slideActiveIndex = me.slideActiveIndex - 1;
    }

    if (me.smallSlideActiveIndex === (me.len - 1)) {
        console.log('cant slide left for small slide');
    } else {
        console.log('small slide right');
        $(me.smallSlideGroup[me.smallSlideActiveIndex]).removeClass('small-slide-active');
        $(me.smallSlideGroup[me.smallSlideActiveIndex + 1]).addClass('small-slide-active');
        me.smallSlideActiveIndex = me.smallSlideActiveIndex + 1;
    }
};