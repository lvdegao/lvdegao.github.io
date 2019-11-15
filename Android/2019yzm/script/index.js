window.onload = function() {
  // 活动动态tab
  $(".activ_li").click(function() {
    $(this)
      .siblings()
      .removeClass("activity_a1");
    $(this).addClass("activity_a1");
    var index = $(this).index(); // 获取当前点击元素的下标
    // alert(index);
    $(".iconf").removeClass("icon_color");
    $(".iconf")
      .eq(index)
      .addClass("icon_color");
    $(".activity_huodong").hide();
    $(".activity_huodong")
      .eq(index)
      .show();
  });
  var trs_610 = $("#trs_1298351610 li");
  var trs_247 = $("#trs_1311063247 li");
  for (var trs = 5; trs < trs_610.length; trs++) {
    trs_610[trs].style.display = "none";
  }
  for (var trs = 5; trs < trs_247.length; trs++) {
    trs_247[trs].style.display = "none";
  }

  // 活动现场轮播图
  var m = 0;
  setInterval(rum, 5000);
  var m_len = $(".lunbo_ul li").length;

  function rum() {
    m = m == m_len ? 0 : m;

    $(".lunbo_ul li")
      .eq(m)
      .fadeIn(1000)
      .siblings("li")
      .fadeOut(1000);
    $(".lunbo_name")
      .eq(m)
      .fadeIn(1000)
      .siblings()
      .fadeOut(1000);
    m++;
  }
  // 视频访谈轮播图
  var nanjing = 0;
  setInterval(fangtan, 5000);

  function fangtan() {
    nanjing = nanjing == 4 ? 0 : nanjing;
    $(".lunbo_nanjing img")
      .eq(nanjing)
      .fadeIn(600)
      .siblings("img")
      .fadeOut(600);
    $(".lunbo_nj_ul li")
      .eq(nanjing)
      .css("background", "#fac75a")
      .siblings("li")
      .css("background", "#ccc");
    nanjing++;
  }
  $(".lunbo_nj_ul li").mouseenter(function() {
    nanjing = $(this).index(); //获得当前的li序列号
    $(".lunbo_nanjing img")
      .eq(nanjing)
      .fadeIn(600)
      .siblings("img")
      .fadeOut(600);
    $(".lunbo_nj_ul li")
      .eq(nanjing)
      .css("background", "#fac75a")
      .siblings("li")
      .css("background", "#ccc");
    nanjing = nanjing + 1;
  });
  // 地图下方学校信息轮播
  var sch_key = 0;
  setInterval(school, 4000);
  var _index = $(".sch_new_content").length;

  function school() {
    sch_key = sch_key == _index ? 0 : sch_key;
    $(".sch_new_content")
      .eq(sch_key)
      .fadeIn(600)
      .siblings("div")
      .fadeOut(600);
    sch_key++;
  }
  $(".btn_left").click(function() {
    --sch_key;
    console.log(sch_key);
    sch_key = sch_key == -1 ? _index : sch_key;
    $(".sch_new_content")
      .eq(sch_key)
      .fadeIn(600)
      .siblings("div")
      .fadeOut(600);
  });
  $(".btn_right").click(function() {
    sch_key++;
    console.log(sch_key);
    sch_key = sch_key == _index + 1 ? 0 : sch_key;
    $(".sch_new_content")
      .eq(sch_key)
      .fadeIn(600)
      .siblings("div")
      .fadeOut(600);
  });
  // 参会校园下方  华北点击事件
  $(".academy_ul li").click(function() {
    $(this)
      .siblings()
      .removeClass("huabei");
    $(this).addClass("huabei");

    var ges = $(this).index(); // 获取当前点击元素的下标
    // alert(index);

    $(".academy_list").hide();
    $(".academy_list")
      .eq(ges)
      .show();
  });
};
