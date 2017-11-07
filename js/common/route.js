/*
 * @Author: Esther 
 * @Date: 2017-11-04 17:02:24 
 */
;
(function(window) {
    /*** 
     * 路由管理
     * ajax 数据请求 
     */
    function routeURL() {}

    routeURL.fn = routeURL.prototype = {
        constructor: routeURL,
        author: 'Esther'
    };


    /********************拓展功能****************/
    routeURL.extend = routeURL.fn.extend = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                this[key] = object[key];
            }
        }
    };


    routeURL.extend({
        // 提取 基地址
        baseURL: 'http://127.0.0.1:9090'
    });

    /******************Ajax数据请求*************/
    routeURL.extend({
        /***
         * 向服务器请求数据  发送ajax
         * url:请求地址
         * data:传入参数
         * callback:请求成功后 返回数据的回调函数
         */
        getData: function(url, data, callback) {

            $.ajax({
                url: url,
                dataType: 'json',
                data: data,
                success: function(data) {
                    callback && callback(data);
                },
                error: function(errorMsg) {
                    console.assert(!errorMsg, '服务器请求数据错误');
                }

            });

        }

    });



    /*******************首页数据***************/
    routeURL.extend({

        // 首页菜单栏api
        getIndexMenu: routeURL.baseURL + '/api/getindexmenu',

    });


    /***************二、比价搜索页面*************/
    routeURL.extend({
        // 分类标题api
        getCategoryTitle: routeURL.baseURL + '/api/getcategorytitle',
        /**
         * 分类列表api
         * 传入参数
         * titleid: 分类标题的id  ( Number类型)
         */
        getCategory: routeURL.baseURL + '/api/getcategory',
        /**
         * 商品列表功能界面
         * 根据分类id获取分类名称api
         * 传入参数
         * categoryid: 分类的id  ( Number类型)
         */
        getCategoryById: routeURL.baseURL + '/api/getcategorybyid',
        /**
         * 商品列表api
         * 传入参数
         * categoryid ： 分类id  ( Number类型)，
         * pageid :  页数id   ( Number类型)
         */
        getProductList: routeURL.baseURL + '/api/getproductlist',

        /**
         * 商品详情功能界面
         * 获取商品详情api
         * 传入参数
         * productid ： 商品id  ( Number类型)
         */
        getProduct: routeURL.baseURL + '/api/getproduct',
        /**
         * 获取商品评论api
         * 传入参数
         * productid ： 商品id   ( Number类型)
         */
        getproductcom: routeURL.baseURL + '/api/getproductcom',

    });

    /***************三、省钱控页面*********************/

    routeURL.extend({
        /**
         * 功能界面
         * 传入参数
         * pageid : 页数id   (Number) 不传默认返回第一页数据
         * 
         */
        getMoneyCtrl: routeURL.baseURL + '/api/getmoneyctrl',
        /**
         * 国内折扣商品详情页功能界面
         * 国内折扣商品详情api
         * 传入参数
         * productid : 商品id (Number)
         */
        getMoneyCtrlProduct: routeURL.baseURL + '/api/getmoneyctrlproduct'



    });



    window.routeURL = routeURL;
})(window)