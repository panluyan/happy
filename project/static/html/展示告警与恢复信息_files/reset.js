/*
	*description:乐道;
	*author:panluyan;
	*date: 2017/7/19;
	*update:
*/
$(document).ready(function(){
    //左侧菜单toggle按钮
    var side=$("#sideMenu");//side-menu
    var main=$("#main");  //main-box  
    $("#toggleMenu").click(function(){
      if(side.is(":visible")){                       
        side.hide();
        main.css("padding-left","20px");
        $(this).find("span").addClass("bg1"); //增加icon切换
        }
      else{
         side.show();
         main.css("padding-left","220px");
         $(this).find("span").removeClass("bg1"); //增加icon切换
        };  
    });

    //菜单实现active匹配
    var urlstr=location.href;//获取当前的url值
    var urlstaus=false;
    $("#sideMenu li a").each( function(){
        //href字符串匹配，并判断是a里面href属性是有值的

        // 特殊处理 basic_info 页面，使其激活主机管理标签
        if (urlstr.indexOf('/ld/server/sn') != -1 && $(this).attr('href') && $(this).attr('href').indexOf('/ld/server/server') != -1) {
            $(this).addClass('active');
        } else {
            if ((urlstr + '/').indexOf( $(this).attr('href')) > -1 && $(this).attr('href')!='') {
                $(this).addClass('active');
                $(this).parents("ol").siblings("a").addClass("active");
                urlstatus = true;
            } else {
                $(this).removeClass('active');
            }
        }
    });
    $(".sideMenu ul > li >a").click(function(){
       var ol=$(this).siblings("ol");
       var icon=$(this).find("i")
       var display=ol.css("display");
       ol.toggle();
       //判断菜单icon的变化
       if( display==="none"){
         icon.addClass("glyphicon-menu-down");
       }else{
         icon.removeClass("glyphicon-menu-down");
       }
    });
    //当点击二级菜单的时候的判断（会刷新，回到原始状态）
    $(".sideMenu ol").each(function(){
       var display=$(this).css("display");
       if(display==="block"){
          $(this).siblings().find("i").addClass("glyphicon-menu-down");
       }else{
          $(this).siblings().find("i").removeClass("glyphicon-menu-down");
       }
    });

    //页面loading进度条加载
    $({property: 0}).animate({property: 100}, {
          duration: 1000,
          step: function() {
              var percentage = Math.round(this.property);
              $('#progressBar').css('width',  percentage+"%");
              if(percentage == 100) {
                      $("#progressBar").addClass("done");//完成，隐藏进度条
              }
          }
    });

    //table小工具响应式兼容问题
    var wd1=$(".fixed-table-toolbar .columns-right").width();
    var wd2=$(".fixed-table-toolbar .pull-right.search").width();
    var wd=wd1+wd2+50;
    $(".fixed-table-toolbar .formBox").css("padding-right", wd);
    $(".fixed-table-toolbar .pull-right.search").css("right", wd1+15);

    /*左侧菜单滚动条插件*/
    var hgAll = $(window).height();
    $("#sideMenu").slimScroll({
          width: "200px",
          height: hgAll
    });

    /**下拉菜单导航条不可点击的问题
    *$(document).off('click.bs.dropdown.data-api');
    */
    $(document).on("click",".dropdown-toggle",function(){
      if($(this).attr('href')) window.location = $(this).attr('href');
       });
    /**
     * 鼠标划过就展开子菜单，免得需要点击才能展开
     */ 
    dropdownOpen();//调用
    function dropdownOpen() {
      var $dropdownLi = $('li.dropdown');
      $dropdownLi.mouseover(function() {
        $(this).addClass('open');
      }).mouseout(function() {
        $(this).removeClass('open');
      });
      }
      
    /*置顶按钮效果*/
    $("#toTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    /*
     * 以下代码控制按钮切换效果
     */
    $('.btn-toggle').click(function(){
        var $this = $(this); //找到当前btn-toggle定义的按钮组
        
        //这段代码中找到对应的btn-primary定义的按钮并且去掉相关CSS类定义
        if($this.find('.btn-primary').length>0){
          $this.find('.btn').toggleClass('btn-primary');
        }
        
        //下面添加其它按钮CSS定义支持
        if($this.find('.btn-success').length>0){
          $this.find('.btn').toggleClass('btn-success');
        }
        
        if($this.find('.btn-info').length>0){
          $this.find('.btn').toggleClass('btn-info');
        }

        if($this.find('.btn-danger').length>0){
          $this.find('.btn').toggleClass('btn-danger');
        }
        
        /* 
         *  这里我们可以修改btn定义不同的切换按钮样式：danger,info,success,primary
         */
        
        $this.find('.btn').toggleClass('btn-default').toggleClass('active');
        
      });



});
  





