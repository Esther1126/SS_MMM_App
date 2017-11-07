/*
 * @Author: Esther 
 * @Date: 2017-11-04 17:02:40 
 */

;
(function(window) {
    function tools() {}

    tools.fn = tools.prototype = {
        constructor: tools,
        author: 'Esther'
    };


    /********************拓展功能****************/
    tools.extend = tools.fn.extend = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                this[key] = object[key];
            }
        }
    };


    /***
     * 
     * 将URL参数 转换成字典请求数据
     * 
     * */
    tools.extend({
        getUrlParam: function(urlParam) {
            // 无参数 return
            if (!urlParam) return;

            var urlParamObj = {};
            var str = urlParam.split('?')[1];

            str.split('&').forEach(function(v, i) {
                var tempArr = v.split('=');
                // 取出tempArr 的   1  2  项 
                // 对应
                // urlParamObj 的 key value
                var key = tempArr[0];
                var value = tempArr[1];

                if (!isNaN(value)) {
                    value = Number(value);
                }
                urlParamObj[key] = value;
            }, this);

            return urlParamObj;
        }
    });





    window.tools = tools;
})(window)