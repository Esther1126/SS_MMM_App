/*
 * @Author: Esther 
 * @Date: 2017-11-07 01:10:21 
 */
;
(function() {

    var url = {
        /***
         * 分类标题
         */
        getCategoryTitle: routeURL.getCategoryTitle,
        /***
         * 分类列表api
         **/
        getCategory: routeURL.getCategory
    };

    /***
     * 
     * 页面函数执行
     * 
     * */
    ;
    (function() {
        renderCategoryTitle(url.getCategoryTitle);

    })();



    /****
     * 
     * 渲染分类标题
     * 
     ***/
    function renderCategoryTitle(url) {
        routeURL.getData(
            url, {},
            function(data) {
                // console.log(data);
                $('.category').html(template('tempCategoryTitle', data));

                // 点击渲染标题下分类
                changeCategoryList();

            });

    }

    /**
     * 
     * 点击渲染标题下分类
     * 
     */

    function changeCategoryList() {
        /****** 防止多次请求  ********/
        if ($('.category-list').children().length) return;


        $('.category-title').on('click', function() {

            var self = $(this);
            var titleid = self.attr('titleid');


            /******** 渲染折扣列表 **********/
            renderCategoryList(url.getCategory, {
                titleid: titleid
            }, self);

        });
    }


    /****
     * 
     * 渲染折扣列表
     * 
     ***/
    function renderCategoryList(url, info, self) {
        routeURL.getData(
            url, info,
            function(data) {
                // console.log('----------------' + data);

                self.siblings('.category-list').html(template('tempCategoryList', data));

                // 展示当前list 关闭其他 list
                showList(self);
            });
    }

    /*****
     * 
     * 展示当前list 关闭其他 list
     * 
     * */
    function showList(self) {
        self.siblings('.category-list').slideToggle(200).parent().siblings('li').children('.category-list').slideUp(200);
    }


})()