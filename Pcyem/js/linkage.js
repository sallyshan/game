$(function () {
    //找到“更多这个内容”这个class后所有菜单隐藏

    $(".on").nextAll().hide();
    //一级菜单后的元素进行隐藏：
    $("#banner p").next().hide();
    $("#oh").show();
    //找到以及菜单，添加click
    $("#banner p").click(function () {
            //当前这个对象的二级菜单如果展开就折叠；
            $(this).next().slideToggle();
        })
        //通过class名找到查看更多，添加click
    $(".on").click(function () {
        //"查看更多"折叠，“查看更多”后的元素展开
        $(this).slideUp().nextAll().slideDown();
    })
})