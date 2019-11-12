/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-16 20:59:34
 * @version $Id$
 */

// function stop(){ 
// alert('别右键，我害羞');
// return false; 
// } 
// document.oncontextmenu=stop; 
// // document.oncontextmenu = function(){return false;}
// document.onkeydown=function (e){
//          var currKey=0,evt=e||window.event;
//          currKey=evt.keyCode||evt.which||evt.charCode;
//          if (currKey == 123) {
//              alert('别按f12看我，我害羞');
//              window.event.cancelBubble = true;
//              window.event.returnValue = false;
//          }
//      }
// 版权声明

$(function () {
    // 版权声明
   
    $(".search-form").hover(
        function () {
            $(".header-search-shengming").css("display", "none");
        }, function () {
            $(".header-search-shengming").css("display", "block");
        });
    // 购物车动画
    $(".cart-mini").hover(function () {
        $(".cart-mini-1").slideDown(200);
    },
        function () {
            $(".cart-mini-1").slideUp(200);
        });
    //下载APP动画
    $("#box").hover(function () {
        $(".box").show();
    }, function () {
        $(".box").hide();
    });

    // 小米手机隐藏层显示
    $(".nav-item").eq(0).hover(function () {
        $(".header-nav-menu-xiaomi").slideDown(200);
    }, function () {
        $(".header-nav-menu-xiaomi").slideUp(200);

    });

    // 红米手机隐藏层显示
    $(".nav-item").eq(1).hover(function () {
        $(".header-nav-menu-hongmi").slideDown(200);
    }, function () {
        $(".header-nav-menu-hongmi").slideUp(200);
    });

    //电视隐藏层显示
    $(".nav-item").eq(2).hover(function () {
        $(".header-nav-menu-dianshi").slideDown(200);
    }, function () {
        $(".header-nav-menu-dianshi").slideUp(200);
    });

    //笔记本隐藏层显示
    $(".nav-item").eq(3).hover(function () {
        $(".header-nav-menu-bijiben").slideDown(200);
    }, function () {
        $(".header-nav-menu-bijiben").slideUp(200);
    });

    //家电隐藏层显示
    $(".nav-item").eq(4).hover(function () {
        $(".header-nav-menu-jiadian").slideDown(200);
    }, function () {
        $(".header-nav-menu-jiadian").slideUp(200);
    });

    //新品隐藏层显示
    $(".nav-item").eq(5).hover(function () {
        $(".header-nav-menu-xinpin").slideDown(200);
    }, function () {
        $(".header-nav-menu-xinpin").slideUp(200);
    });

    //路由器隐藏层显示
    $(".nav-item").eq(6).hover(function () {
        $(".header-nav-menu-luyouqi").slideDown(200);
    }, function () {
        $(".header-nav-menu-luyouqi").slideUp(200);
    });

    //硬件隐藏层显示
    $(".nav-item").eq(7).hover(function () {
        $(".header-nav-menu-yingjian").slideDown(200);
    }, function () {
        $(".header-nav-menu-yingjian").slideUp(200);
    });
    //轮播图
    //
    //
    var m = 0;
    var tamer = setInterval(run, 4000);
    function run() {

        m = m == 5 ? 0 : m;
        $(".home-hero-slider img").eq(m).fadeIn(600).siblings("img").fadeOut(600);
        $(".home-hero-slider-ul li").eq(m).css("background", "#F6EEFE").siblings("li").css("background", "#918995");
        m++;
    }
    $(".home-hero-slider").hover(function () {
        // 清理定时器
        clearInterval(tamer);
    }, function () {
        // 开启定时器
        tamer = setInterval(run, 4000);
    });
    $(".home-hero-slider-ul li").mouseenter(function () {
        m = $(this).index();//获得当前的li序列号
        $(".home-hero-slider img").eq(m).fadeIn(600).siblings("img").fadeOut(600);
        $(".home-hero-slider-ul li").eq(m).css("background", "#F6EEFE").siblings("li").css("background", "#918995");
        m = m + 1;
    });
    // 手机电话卡隐藏层动画
    $(".category-item").eq(0).hover(function () {
        $(".children-col-1").show();
    }, function () {
        $(".children-col-1").hide();
    });
    // 电视 盒子隐藏层动画
    $(".category-item").eq(1).hover(function () {
        $(".children-col-2").show();
    }, function () {
        $(".children-col-2").hide();
    });
    // 笔记本 平板隐藏层动画
    $(".category-item").eq(2).hover(function () {
        $(".children-col-3").show();
    }, function () {
        $(".children-col-3").hide();
    });
    // 家电 插线板 隐藏层动画
    $(".category-item").eq(3).hover(function () {
        $(".children-col-4").show();
    }, function () {
        $(".children-col-4").hide();
    });
    // 出行 穿戴 隐藏层动画
    $(".category-item").eq(4).hover(function () {
        $(".children-col-5").show();
    }, function () {
        $(".children-col-5").hide();
    });
    // 智能 路由器 隐藏层动画
    $(".category-item").eq(5).hover(function () {
        $(".children-col-6").show();
    }, function () {
        $(".children-col-6").hide();
    });

    // 电源 配件 隐藏层动画
    $(".category-item").eq(6).hover(function () {
        $(".children-col-7").show();
    }, function () {
        $(".children-col-7").hide();
    });
    // 健康 儿童 隐藏层动画
    $(".category-item").eq(7).hover(function () {
        $(".children-col-8").show();
    }, function () {
        $(".children-col-8").hide();
    });
    // 耳机音响 隐藏层动画
    $(".category-item").eq(8).hover(function () {
        $(".children-col-9").show();
    }, function () {
        $(".children-col-9").hide();
    });
    // 生活 箱包 隐藏层动画
    $(".category-item").eq(9).hover(function () {
        $(".children-col-10").show();
    }, function () {
        $(".children-col-10").hide();
    });

    // 家电用户评价层
    $("#row-right ul li").mouseenter(function () {
        var n = $(this).index();
        // 用户评价动画
        $("#row-right ul li").eq(n).hover(function () {
            $(".review-wrapper").eq(n).slideDown(200);
        },
            function () {
                $(".review-wrapper").slideUp(200);
            });
    });
    // 智能用户评价层
    $("#row-right-zhineng ul li").mouseenter(function () {
        var n = $(this).index();
        // 用户评价动画
        $("#row-right-zhineng ul li").eq(n).hover(function () {
            $(".review-wrapper-zhineng").eq(n).slideDown(200);
        },
            function () {
                $(".review-wrapper-zhineng").slideUp(200);
            });
    });

    // 搭配用户评价层
    $("#row-right-dapei ul li").mouseenter(function () {
        var n = $(this).index();
        // 用户评价动画
        $("#row-right-dapei ul li").eq(n).hover(function () {
            $(".review-wrapper-dapei").eq(n).slideDown(200);
        },
            function () {
                $(".review-wrapper-dapei").slideUp(200);
            });
    });
    //配件用户评价层
    $("#row-right-peijian ul li").mouseenter(function () {
        var n = $(this).index();
        // 用户评价动画
        $("#row-right-peijian ul li").eq(n).hover(function () {
            $(".review-wrapper-peijian").eq(n).slideDown(200);
        },
            function () {
                $(".review-wrapper-peijian").slideUp(200);
            });
    });
    // 周边用户评价动画
    $("#row-right-zhoubian ul li").mouseenter(function () {
        var n = $(this).index();
        // 用户评价动画
        $("#row-right-zhoubian ul li").eq(n).hover(function () {
            $(".review-wrapper-zhoubian").eq(n).slideDown(200);
        },
            function () {
                $(".review-wrapper-zhoubian").slideUp(200);
            });
    });
    // <!-- 右侧栏入口按钮开始 和返回顶部-->动画
    $(".home-right-bar ul li").mouseenter(function () {
        var a = $(this).index();

        $(".bar-sort").eq(a).hover(function () {
            $(".original-img").eq(a).css("display", "none");
            $(".bar-text").eq(a).css("color", "#ff6700");
            $(".hover-img").eq(a).css("display", "block");
        }, function () {
            $(".original-img").eq(a).css("display", "block");
            $(".hover-img").eq(a).css("display", "none");
            $(".bar-text").eq(a).css("color", "#757575");
        });
    });

    $(".bar-sort-qr").hover(function () {
        $(".bar-pop").show();
    }, function () {
        $(".bar-pop").hide();
    });


});