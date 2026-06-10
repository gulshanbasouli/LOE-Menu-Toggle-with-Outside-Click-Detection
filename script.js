jQuery(function ($) {

    const $menuButton = $('#loe-menu');
    const $menuList   = $('#loe-menu-list');

    $menuButton.on('click', function (e) {
        e.stopPropagation();
        $menuList.stop(true, true).slideToggle(200);
    });

    $menuList.on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function (e) {

        if (!$(e.target).closest('#loe-menu, #loe-menu-list').length) {
            $menuList.stop(true, true).slideUp(200);
        }

    });

});
