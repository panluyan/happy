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
        }
      else{
         side.show();
         main.css("padding-left","220px");
      	};  
    });

  	//左侧菜单列表展开，折叠
  	$(".sideMenu ul > li > a").click(function() {
     	var icon=$(this).find("i");
     	var al=$(this);
      var al1=$(this).parent("li").siblings().children("a");//一级菜单
      var al2=$(this).siblings().find("a");//二级菜单
       
      al1.removeClass("active");//不能全部删除，只删除其他一级菜单的active
      al2.removeClass("active");//清空二级菜单的选中状态
      $(".sideMenu ul > li > a >i").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");//清空其他icon的active的状态
      //判断是展开还是关闭？=toggle
      if( al.hasClass("active") ===true){//当第二次点击时，就折起来
            al.removeClass("active");
            icon.removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
      }
      else{//第一次展开
            al.addClass("active");
            icon.removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
     	}
  	})
   //二级菜单状态切换
   $(".sideMenu ol > li > a").click(function(){
    var a2=$(this);
    $(".sideMenu ol > li > a").removeClass("active");
    a2.addClass("active");
   })

   
	//页面loading进度条加载
	$({property: 0}).animate({property: 100}, {
        duration: 3000,
        step: function() {
            var percentage = Math.round(this.property);
            $('#progressBar').css('width',  percentage+"%");
            if(percentage == 100) {
                    $("#progressBar").addClass("done");//完成，隐藏进度条
            }
        }
	});

  


});
//table小工具响应式兼容问题
  function tool_Bar (){          
  var wd1=$(".fixed-table-toolbar .columns-right").width();
  var wd2=$(".fixed-table-toolbar .pull-right.search").width();
  var wd=wd1+wd2+50;
  $(".fixed-table-toolbar .formBox").css("padding-right", wd);
  $(".fixed-table-toolbar .pull-right.search").css("right", wd1+15);
  }

//$(".bootstrap-select.btn-group .dropdown-menu").css("min-width","100%")

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


