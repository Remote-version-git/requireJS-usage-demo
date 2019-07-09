define(function () {
    requirejs.config({
        baseUrl: 'js',
        paths: {
            app: './a',
            bpp: './b',
            cpp: './c',
            jquery: 'jquery-3.4.1',
            // 引入不是AMD规范的文件
            underscore: {
                // 设置暴露的符号
                exports: '_'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        },
        shim: {
            'jquery.scroll': {
                deps: ['jquery'],
                exports: 'jquery.fn.scroll'
            }
        }
    })
})
// 参考：http://www.ruanyifeng.com/blog/2012/11/require_js.html
// 引入没有采用AMD规范编写的js文件，用require.config来设置，如underscore
// （1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
// 还有一个shim属性，专门用来配置不兼容的模块
/*如：　　shim: {

    　　　　'jquery.scroll': {
    
    　　　　　　deps: ['jquery'],
    
    　　　　　　exports: 'jQuery.fn.scroll'
    
    　　　　}
    
　　}*/

// 在这里加载使用别名加载
// requirejs(['app'], function () {
    // 在异步加载完模块后，处理这个回调
//     console.log('this is a');
// })
// requirejs(['modB']);
// requirejs(['modC']);