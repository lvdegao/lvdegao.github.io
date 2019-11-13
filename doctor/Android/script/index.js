window.onload = function() {
    // 申博必读下方的选项卡
    $(".selectivity_ul li").click(function() {
        $(this)
            .siblings()
            .removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        // console.log(index);
        $(".way").hide();
        $(".way")
            .eq(index)
            .show();
    });
    // 选择地区样式
    $(".region_ul li").click(function() {
        $(this)
            .siblings()
            .removeClass("region_ul_li");
        $(this).addClass("region_ul_li");
    });
    // 翻页
    var ul = document.getElementsByClassName("turn_ul")[0];
    var lis = ul.getElementsByTagName("li");

    // lis[i].index = i;
    // console.log(lis[i].index);
    var con = 2;
    var sm = lis.length - 2;
    lis[sm + 1].onclick = function() {
        for (var m = 0; m < lis.length - 1; m++) {
            lis[m].style.color = "#68a7fa";
        }
        lis[con].style.color = "#ffc400";
        if (con <= sm) {
            con++;
        }
        if (con > sm) {
            lis[sm + 1].style.visibility = "hidden";
        }
        if (con > sm) {
            con = sm;
        }

        if (con > 2) {
            lis[0].style.visibility = "visible";
        }
    };
    lis[0].onclick = function() {
        for (var m = 0; m < lis.length - 1; m++) {
            lis[m].style.color = "#68a7fa";
        }
        if (sm >= con) {
            --con;
        }
        if (con < sm) {
            lis[sm + 1].style.visibility = "visible";
        }
        if (con < 2) {
            con = 1;
            lis[0].style.visibility = "hidden";
        }
        lis[con].style.color = "#ffc400";
    };
};