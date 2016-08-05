// rquire的配置信息,paths属性，用于定义别名及路径
requirejs.config({
    /* baseUrl:"http://localhost/requre-module/",*/
    paths: {
        "jquery": "../lib/jquery-1.11.0.min",
        "mod": "script"
            // jquery这个别名表示lib下的这个jquery文件
    }
})

require(["jquery", "mod"], function ($, obj) {
    /*$("body").css("background", "#ccc");
obj.say();*/
})