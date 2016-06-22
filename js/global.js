/**
 * Created by LiuMing on 2016/5/18.
 */
$(function () {
    /*    $('.toggle').click(function () {
     $('.nav-list').toggleClass('active');
     });*/

    $(document).on('click', '#navbar li a, .nav-list li a, .navigation a', function (e) {
        var href = $(this).attr('href');
        if (href === '#' || /^http.*/.test(href)) {
            return;
        }
        e.preventDefault();
        $('.nav-list').removeClass('active');
        location.hash = href;
        $('iframe').attr('src', href);
        //initNavigation(href);
    });

    var href = location.hash.substring(1) || 'welcome.html';
    $('iframe').attr('src', href);
    //initNavigation(href);

    $(window).on('blur',function() {
        $('.dropdown-toggle').parent().removeClass('open');
    });
});
