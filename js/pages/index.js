/*
 * @Author: Esther 
 * @Date: 2017-11-04 17:02:44 
 */
;
(function() {

    var url = {
        /***
         * 首页菜单栏数据
         */
        getIndexMenu: routeURL.getIndexMenu,
        /***
         * 首页的折扣列表中数据
         **/
        getMoneyCtrl: routeURL.getMoneyCtrl
    };

    /***
     * 
     * 页面函数执行
     * 
     * */
    ;
    (function() {
        renderMainNav(url.getIndexMenu);
        renderMoneyCtrl(url.getMoneyCtrl);
    })();

    /****
     * 
     * 渲染导航栏 
     * 
     ***/
    function renderMainNav(url) {
        routeURL.getData(
            url, {},
            function(data) {
                $('.mainNav').html(template('tempMainNav', data));

                // 显示隐藏菜单栏
                showMoreNav();
            });

        /***
         * 
         * 菜单栏显示隐藏
         * 
         */
        function showMoreNav() {
            $('.mainNav li').eq(7).on('click', function() {
                $('#moreNav').toggleClass('contains', 300);
                return false;
            });
        }

    }


    /****
     * 
     * 渲染折扣列表
     * 
     ***/
    function renderMoneyCtrl(url) {
        routeURL.getData(
            url, {},
            function(data) {
                $('.MoneyCtrlContent').html(template('tempMoneyCtrlContent', data));
            });
    }

})()