// 定义的模块，依赖jquery
define(['jquery'], function ($) {
    var message = 'hello';
    $('h1').text(message);
    return message;
})

// define(依赖可选, 定义的模块函数，返回的内容将被require的回调函数用假参接收)