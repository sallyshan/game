/*// 使用AMD规范定义一个模块
define(function () {
    // 在模块中需要使用return将内容剖出
    return {
        name: "marry",
        email: "marry@sohu.com",
        age: 15
    }
})*/
//首先要创建函数，并调用在页面中显示的option
function Soption(dom) {
    //  console.log(dom)
    //先隐藏掉之前打的固定的option，接下来动态添加
    $(dom).css("display", "none");
    //遍历dom，能够动态添加
    $(dom).each(function (i, dom) {
        //先找出下面的子元素
        var $opti = $(this).children(),
            $box = "",
            flag = false;
        //遍历一个大的盒子数组
        htmlArr = ['<div class="select ' + $(this).data("type") + '">', '<i></i>'],
            //往大盒子中追加p
            htmlArr.push("<a>" + $opti.eq(0).text() + "</a>");
        htmlArr.push("<ol>");
        $opti.each(function (i, op) {
            htmlArr.push("<li>" + op.text + "</li>")
        })
        htmlArr.push("</ol>", "</div>");
        $box = $('<div class="input"></div>');
        $box.html(htmlArr.join(""));
        $(this).before($box);


        $box.on("click", function () {
            if (!flag) {
                open($(this));
                flag = true;
            } else {
                close($(this));
                flag = false;
            }
        })


        function open($rel) {
            $rel.find("ol").css("display", "block").addClass("up");
        }

        function close($rel) {
            $rel.find("ol").css("display", "none").removeClass("up");
        }
        // console.log($(this).data("type"))
        //点击菜单选项
        $box.on("click", "li", function () {
            var valu = $(this).parent().prev();
            // console.log(valu)
            valu.text($(this).text());
            //      获取选中的索引
            dom.selectedIndex = $(this).index();
            //在每一个匹配的元素上触发某类事件。连接$("#local")的一个改变事件
            //列表都是在改变的时候发生的内容
            $(dom).trigger("change");
        })

    })
}
Soption("select");

$("#btn").click(function () {
    var ren = $("#ren").val();
    var local = $("#local").val();
})
$("#set").click(function () {
    $('.dialog').css('-webkit-transform', 'translate3d(0, 0, 0)')
})
$("#btn2").click(function () {
    $('.dialog').css('-webkit-transform', 'translate3d(0,-480px, 0)')
})