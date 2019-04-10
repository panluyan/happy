//公用值
var color = "#189cbb";
var color2= "#08a6ec";
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var icon='path://M928.926668 536.489764 805.914006 536.489764 699.098235 285.733697c-4.839215-11.44875-16.003486-17.154705-28.437679-17.286712-12.861936-0.152473-23.750937 6.687306-28.833699 18.033725l-89.196485 198.275809L429.851025 174.404122c-4.727675-11.895935-16.226566-23.128767-29.016871-23.128767-0.061398 0-0.121773 0-0.183172 0-12.861936 0-24.360827 9.475815-28.976962 21.48329L232.525867 536.489764 96.03217 536.489764c-17.253966 0-31.233352 13.979386-31.233352 31.233352s13.979386 31.233352 31.233352 31.233352l157.957545 0c12.932544 0 24.523533-6.000668 29.15911-18.078751l118.193913-305.780265 120.562866 303.001989c4.6366 11.67183 15.799848 19.294438 28.355815 19.559475 12.485359 0.304945 24.035416-7.254218 29.169343-18.702967l90.081645-201.604624 86.939071 204.533326c4.880147 11.550057 16.216333 17.071817 28.763091 17.071817l143.713123 0c17.253966 0 31.233352-13.979386 31.233352-31.233352S946.180634 536.489764 928.926668 536.489764z';
var icon1='path://M928.926668 536.489764 805.914006 536.489764 699.098235 285.733697c-4.839215-11.44875-16.003486-17.154705-28.437679-17.286712-12.861936-0.152473-23.750937 6.687306-28.833699 18.033725l-89.196485 198.275809L429.851025 174.404122c-4.727675-11.895935-16.226566-23.128767-29.016871-23.128767-0.061398 0-0.121773 0-0.183172 0-12.861936 0-24.360827 9.475815-28.976962 21.48329L232.525867 536.489764 96.03217 536.489764c-17.253966 0-31.233352 13.979386-31.233352 31.233352s13.979386 31.233352 31.233352 31.233352l157.957545 0c12.932544 0 24.523533-6.000668 29.15911-18.078751l118.193913-305.780265 120.562866 303.001989c4.6366 11.67183 15.799848 19.294438 28.355815 19.559475 12.485359 0.304945 24.035416-7.254218 29.169343-18.702967l90.081645-201.604624 86.939071 204.533326c4.880147 11.550057 16.216333 17.071817 28.763091 17.071817l143.713123 0c17.253966 0 31.233352-13.979386 31.233352-31.233352S946.180634 536.489764 928.926668 536.489764z" p-id="1433"></path><path d="M390.594953 642.651642c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352l0-30.470989C421.828304 656.632051 407.848918 642.651642 390.594953 642.651642z" p-id="1434"></path><path d="M634.363885 642.651642c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C665.597237 656.632051 651.616828 642.651642 634.363885 642.651642z';
var icon2='path://M256 832m-128 0a2 2 0 1 0 256 0 2 2 0 1 0-256 0Z" p-id="2750"></path><path d="M768 832m-128 0a2 2 0 1 0 256 0 2 2 0 1 0-256 0Z" p-id="2751"></path><path d="M954.944 384 902.4 384c-30.656-181.376-187.008-320-377.088-320S178.88 202.624 148.224 384L69.056 384C25.408 459.392 0 546.624 0 640c0 44.288 0 128 0 128l75.776 0C102.208 693.568 172.544 640 256 640s153.792 53.568 180.224 128l151.488 0c26.432-74.432 96.768-128 180.224-128s153.792 53.568 180.224 128L1024 768c0 0 0-83.712 0-128C1024 546.624 998.592 459.392 954.944 384zM206.208 384c26.496-134.912 134.144-239.808 271.104-259.648L477.312 384 206.208 384zM549.312 384 549.312 122.688 495.488 122.688c9.536-0.832 18.752-2.688 28.544-2.688 158.656 0 288.32 113.984 317.76 264L549.312 384z';
var iconHeart='path://M334.848 343.04q22.528-28.672 49.152-50.176 22.528-18.432 50.176-33.792t57.344-13.312q43.008 3.072 71.68 20.48t45.568 43.008 23.04 58.368 4.096 66.56-13.312 64.512-27.136 57.856-34.304 49.664-36.864 40.96q-27.648 28.672-58.368 54.784t-58.368 46.08-49.664 31.744-32.256 11.776q-12.288 0-32.256-12.288t-44.544-32.256-52.224-46.08-55.296-52.736q-17.408-17.408-38.912-39.424t-40.448-48.128-32.256-57.344-14.336-67.072q-2.048-34.816 7.168-66.048t27.136-55.808 44.032-41.472 58.88-24.064 65.024 6.656 58.88 33.28q30.72 22.528 58.368 54.272zM611.328 245.76q13.312 0 25.6 1.024 11.264 1.024 23.552 3.072t21.504 6.144 19.456 10.752 19.456 12.8l20.48 16.384q6.144-6.144 13.312-11.264 13.312-10.24 35.84-23.552 12.288-7.168 28.672-10.752t33.28-2.56 33.28 6.656 27.648 17.92q31.744 33.792 37.888 66.048t-1.536 60.416-23.04 49.664-27.648 33.792q-23.552 23.552-44.544 40.96t-51.712 39.936q-16.384 11.264-34.304 19.456t-27.136 8.192q-9.216 1.024-19.968-7.68t-26.112-19.968q-7.168-5.12-13.312-12.288l-12.288-11.264-12.288-12.288q11.264-20.48 18.432-46.08 6.144-21.504 9.216-50.688t-3.072-62.976q-7.168-31.744-18.944-55.296t-23.04-37.888q-13.312-17.408-28.672-28.672z';
var fullscreen='path://M641.750109 384.100028l205.227128-204.519-0.704035 115.89966c-0.282433 9.611915 7.489578 18.09103 17.101493 17.808598l12.297071 0c9.611915-0.283456 17.667382-5.936199 17.808598-15.689331l0.565888-172.57752c0-0.14224 0.282433-9.187243 0.282433-9.187243 0.14224-4.804423-0.99056-9.187243-4.100388-12.297071-3.109828-3.109828-7.347339-5.086855-12.297071-4.946662l-8.763594 0.14224c-0.141216 0-0.278339 0-0.420579 0.14224L697.581696 98.166787c-9.611915 0.283456-17.667382 8.200776-17.808598 17.950837l0 12.297071c1.416256 11.44875 10.458189 18.092054 20.070104 17.808598l112.789832 0.283456-204.66124 203.814965c-9.329483 9.329483-9.329483 24.449855 0 33.778314 9.329483 9.470699 24.452925 9.470699 33.782408 0L641.750109 384.100028zM383.095141 576.889893 177.726797 780.705881l0.707105-115.338888c0.283456-9.607822-7.492648-18.086937-17.104563-17.808598l-13.001105 0c-9.611915 0.283456-17.667382 5.937223-17.808598 15.690354l-0.565888 172.718737c0 0.14224-0.282433 9.187243-0.282433 9.187243-0.14224 4.808516 0.99056 9.187243 4.096295 12.297071 3.109828 3.109828 7.351432 5.086855 12.297071 4.946662l8.762571-0.14224c0.14224 0 0.283456 0 0.425695-0.14224l171.873486 0.708128c9.607822-0.283456 17.667382-8.196683 17.808598-17.950837L344.93503 832.575226c-1.415232-11.44875-10.461259-18.092054-20.074198-17.808598L212.069977 814.483172 416.59 610.671277c9.329483-9.329483 9.329483-24.453948 0-33.782408C407.40685 567.41817 392.424624 567.41817 383.095141 576.889893L383.095141 576.889893zM894.047276 835.967486l-0.424672-172.718737c-0.283456-9.612938-8.200776-15.406898-17.809621-15.690354l-12.296047 0c-9.612938-0.278339-17.243733 8.200776-17.105586 17.808598l0.708128 115.903753L641.750109 576.889893c-9.329483-9.329483-24.452925-9.329483-33.782408 0-9.325389 9.328459-9.325389 24.452925 0 33.782408L812.490795 814.483172l-112.789832 0.283456c-9.611915-0.283456-18.515702 6.502088-20.073174 17.808598l0 12.297071c0.282433 9.611915 8.200776 17.667382 17.808598 17.950837l171.166381-0.708128c0.141216 0 0.282433 0.14224 0.424672 0.14224l8.763594 0.14224c4.803399 0.141216 9.187243-1.694595 12.296047-4.946662 3.109828-3.109828 4.238534-7.488555 4.097318-12.297071 0 0-0.14224-9.046027-0.14224-9.187243L894.047276 835.968509zM212.216309 146.506748l112.789832-0.283456c9.607822 0.283456 18.512632-6.502088 20.070104-17.808598L345.076246 116.116601c-0.283456-9.611915-8.196683-17.667382-17.808598-17.950837l-172.011632 0.708128c-0.14224 0-0.283456-0.14224-0.425695-0.14224l-8.761548-0.14224c-4.808516-0.141216-9.187243 1.694595-12.297071 4.946662-3.109828 3.109828-4.242627 7.488555-4.096295 12.297071 0 0 0.282433 9.046027 0.282433 9.187243l0.420579 172.718737c0.14224 9.608845 8.200776 15.406898 17.808598 15.686261l13.005198 0c9.611915 0.282433 17.242709-8.196683 17.10047-17.808598l-0.564865-115.334795 205.231221 203.958228c9.324366 9.329483 24.448832 9.329483 33.777291 0 9.329483-9.329483 9.329483-24.452925 0-33.782408L212.216309 146.506748 212.216309 146.506748zM212.216309 146.506748';       
// 坐标轴指示器，坐标轴触发有效
var axisPointer1={
  type: 'cross',         // 默认为直线，可选为：‘line‘ | ‘shadow‘
  crossStyle: {
    color: color
  }     
};
var axisPointer2={
  type: 'line',         // 默里认为直线，可选为：‘line‘ | ‘shadow‘
  lineStyle: {
    color: color
  }     
};
//提示信息
var tooltip = {
    show:true,
    trigger:'axis',
    backgroundColor:'rgba(0,0,0,0.5)',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'cross',         // 默认为直线，可选为：‘line‘ | ‘shadow‘
      crossStyle: {
        color: '#0150a0'
      },
    //lineStyle: {          // 直线指示器样式设置
     //  color: '#0150a0',
     //  type: 'dashed'
    // },
    //shadowStyle: {                     // 阴影指示器样式设置
     //  color: 'rgba(0,0,0,0.5)'
    // }
    }   
};
//小工具
var toolboxScatter1 = {
    show : true,
    iconStyle: {
      borderColor: '#769fb3'
    },
    y:'top',
    right: 25,
    itemGap: 10,
    feature : {
        // restore : {show: true},
        // saveAsImage : {show: true},
        myTool1: {
            show: true,
            title: '进入全屏',
            icon: fullscreen,
            onclick: function (){
              $('#myModal').modal('toggle');
              $('.modal-title-text').text('cpu使用率');
              echartBig.clear();
              echartBig.setOption(optionScat4); 
            }
        },
        myTool2: {
            show: true,
            title:'切换显示数值',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: function(){
                      var bollon=scatter1.getOption().label.show;
                      if(bollon==true){
                         bollon=false;
                      }else{
                         bollon=true;
                      }
                      scatter1.setOption({                         
                        label:{ show: bollon}
                      });
                      //bigScreen
                      var bollon2=echartBig.getOption().label.show;
                      if(bollon2==true){
                         bollon2=false;
                      }else{
                         bollon2=true;
                      }
                      echartBig.setOption({                         
                        label:{ show: bollon2}
                      });
            } 
        }
        
    }
};
var toolboxScatter2 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                echartBig.clear();
                $('#myModal').modal('toggle');
                $('.modal-title-text').text('cpu负载');
                echartBig.setOption(optionBar11);
                
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=scatter2.getOption().label.show;
                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        scatter2.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxScatter3 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('内存使用率');
                  echartBig.setOption(optionScat5);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=scatter3.getOption().label.show;
                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        scatter3.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxScatter4 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('磁盘IO');
                  echartBig.setOption(optionBar12);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=scatter4.getOption().label.show;
                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        scatter4.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxBar1 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('CPU使用率');
                  echartBig.setOption(optionBar22);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        var bollon=bar1.getOption().label.show;

                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        bar1.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxBar2 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('CPU负载');
                  echartBig.setOption(optionBar23);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=bar2.getOption().label.show;

                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        bar2.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxBar3 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('内存使用率');
                  echartBig.setOption(optionBar24);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=bar3.getOption().label.show;

                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        bar3.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};
var toolboxBar4 = {
      show : true,
      iconStyle: {
        borderColor: '#769fb3'
      },
      y:'top',
      right: 25,
      itemGap: 10,
      feature : {
          myTool1: {
              show: true,
              title: '进入全屏',
              icon: fullscreen,
              onclick: function (){
                  echartBig.clear();
                  $('#myModal').modal('toggle');
                  $('.modal-title-text').text('磁盘IO');
                  echartBig.setOption(optionBar25);
              }
          },
          myTool2: {
              show: true,
              title:'切换显示数值',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function(){
                        // console.log(scatter2.getOption().label.show);
                        var bollon=bar4.getOption().label.show;

                        if(bollon==true){
                           bollon=false;
                        }else{
                           bollon=true;
                        }
                        bar4.setOption({                         
                          label:{ show: bollon}
                        });
                        //bigScreen
                        var bollon2=echartBig.getOption().label.show;
                        if(bollon2==true){
                           bollon2=false;
                        }else{
                           bollon2=true;
                        }
                        echartBig.setOption({                         
                          label:{ show: bollon2}
                        });
              } 
          }
          
      }
};




//坐标轴轴的刻度值颜色
var axisLabel={
	color: color     
};
//坐标轴轴的线条颜色
var axisLine={
	lineStyle:{
		color: color  
  } 
};
//更改网格分隔线条的颜色
var splitLine={ 
	lineStyle: {
    type: 'dashed',
		color: 'rgba(80,224,255,0.3)'
	}
};

//图表开始start
//line图表
var optionLine1={
  textStyle: {
    color:'#fff'
  },
  title: {
    show: false,
    text: 's面积图',
    textStyle: {
      color: '#fff'
    }
  },
  legend:{
    data:['意向','预购', '成交'],
    textStyle:{
      color:'#fff'
    },
    bottom: 10
  },
  tooltip:{
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   label:{
    //     backgroundColor: '#6a7985'
    //   }
    // }
    axisPointer: axisPointer1,
  },
  grid: [{
      top: 20,
      right: 20
  }], 
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisPointer: axisPointer2,
    axisLabel: axisLabel,
    axisLine: axisLine,
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis:{
    type: 'value',
    axisLabel: axisLabel,
    axisLine: axisLine,
    splitLine: splitLine
  },
  series: [
    {
      name: '成交',
      type: 'line',
      smooth: true,        
      data: [10, 12, 21, 54, 260, 830, 710],
      areaStyle: {
        normal: {
          color:'rgb(137,189,27,0.3)'
          // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //     offset: 0,
          //     color: 'rgba(137, 189, 27, 0.3)'
          // }, {
          //     offset: 0.8,
          //     color: 'rgba(137, 189, 27, 0)'
          // }], false),
          // shadowColor: 'rgba(0, 0, 0, 0.1)',
          // shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(137,189,27)',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 12
        }
      }
    },
    {
      name: '预购',
      type: 'line',
      smooth: true,   
      areaStyle: {
        normal: {
          color:'rgb(0,136,212,0.3)'
          // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //     offset: 0,
          //     color: 'rgba(0, 136, 212, 0.3)'
          // }, {
          //     offset: 0.8,
          //     color: 'rgba(0, 136, 212, 0)'
          // }], false),
          // shadowColor: 'rgba(0, 0, 0, 0.1)',
          // shadowBlur: 10
        }
      },
      itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12
          }
      },
      data: [30, 182, 434, 791, 390, 30, 10]
    },
    {
      name: '意向',
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
          color:'rgb(219,50,51,0.3)'
          // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //     offset: 0,
          //     color: 'rgba(219, 50, 51, 0.3)'
          // }, {
          //     offset: 0.8,
          //     color: 'rgba(219, 50, 51, 0)'
          // }], false),
          // shadowColor: 'rgba(0, 0, 0, 0.1)',
          // shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
            color: 'rgb(219,50,51)',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
        }
      },
      data: [1320, 1132, 601, 234, 120, 90, 20]
    }
  ]
};

//line4图表
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}
var data = [];
var data2 = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
    // data2.push(randomData()+1);
};

var optionLine2 = {
    title: {
    		show: false,
        text: '动态数据 + 时间坐标轴',
        textStyle:{
        	color: '#fff'
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false,
            type: 'cross',// 默认为直线，可选为：‘line‘ | ‘shadow‘
            crossStyle: {
              color: '#08a6ec'
            } 
        }
    },
    grid: [{
      top: 20,
      right:20,
		}],
    xAxis: {
      type: 'time',
      axisLabel: axisLabel,
			axisLine: axisLine,
			splitLine: splitLine,
      axisPointer: axisPointer2,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      axisLabel: axisLabel,
			axisLine: axisLine,
			splitLine: splitLine
    },
    series: [{
      name: '模拟数据',
      type: 'line',
      areaStyle: {
        normal: {
        	color:'rgb(219,50,51,0.3)'
        }
      },
      showSymbol: false,
      hoverAnimation: false,
      data: data
    },

    ]
};

//line-混合
// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];
for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}
// option
var optionLine33 = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        data: category,
        axisLine: axisLine
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: axisLine
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};

//line-混合
var optionLine44 = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        textStyle:{
          color: '#fff'
        },
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        textStyle:{
          color: '#fff'
        },
        data:['邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: 15,
        right: 15,
        bottom: 20,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            splitLine: splitLine,
            axisLine: axisLine,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: splitLine,
            axisLine: axisLine,
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            // areaStyle: {normal: {}},
            z:2,
            data:[120, 132, 101, 134, 90, 230, 210],
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量2',
            z: 2,
            // areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量3',
            barWidth: 20,
            barGap: '50%',
            areaStyle: {normal: {}},
            z: 1,
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量4',
            barGap: '50%',
            barWidth: 20, 
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            z: 1,
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


//**柱状bar图表**
var optionBar={
  //图标标题
  title:{
    show:false,
    // link:'http://www.w3school.com.cn/html5/html_5_svg.asp', //加链接
    // target:'blank',
    text:'HeathCheck数据',
    textStyle:{
      fontWeight:'normal',
      color:'#fff'
    },
    // subtext:'折线图',
  },
  //图表所展示的类型，及其颜色，名字
  legend:{
    data:['销量'],
    bottom: 10,
    textStyle:{
      color: '#fff'
    }
  },  
  //图表小工具栏
  toolbox:{
    show:true,  
    orient:'horizontal',    
  },
  //网格
  grid:{
    show:false,
    right:20,
    top: 20,
    borderColor: '#0150a0'
  },
  //提示框
  tooltip: tooltip,
  xAxis:{
    // data:["裤子","衬衫","袜子","帽子"],
    axisLabel: axisLabel,//x轴的刻度值颜色
    axisLine:axisLine, //x轴的线条的颜色
    splitLine:splitLine,//更改网格分隔线条的颜色
  },
  yAxis:{ 
    data:["裤子","衬衫","袜子","帽子"],
    axisLabel: axisLabel,
    axisLine: axisLine
  },
  series:[
     {
    name:'销量',
    type:'bar',//声明图表的类型，scatter散点,line折线图，bar柱状图，pie饼图，
    barWidth:10,
    itemStyle: {
      normal: {
        barBorderRadius: 0,
        color: new echarts.graphic.LinearGradient(
            0, 0, 1, 1, [{
                offset: 0,
                color: '#00feff'
              },
              {
                offset: 0.5,
                color: '#027eff'
              },
              {
                offset: 1,
                color: '#0286ff'
              }
            ]
        )
      }
    },
    data:[5,20,
      {
        value:36,
        itemStyle:{
          color: '#dcc500'
        }
      },
      {
        value:56,
        itemStyle:{
          color: '#e8023d'
        }
      },     
    ]

    }

  ]       
};

//柱状图表堆叠
//CPU使用率
var optionBar11 = {
      tooltip : {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow',//line/cross/shadow
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      label:{
          show: false,
          color: '#fff',
          position: 'inside',
      },
      legend: [        
          {  
            x:'left', 
            left: 15,
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,
            itemHeight:10,
            itemGap:15,
            data:['0-1','1-3','3-5', '5-25'] 
          },  
          {  
            x:'left',
            left: 15,
            top:20, 
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,//default 25
            itemHeight:10,//default 14
            itemGap:15,//default 10  
            data:['25-80', '80-100', '100-999,999'] 
          } 
      ], 
      toolbox: toolboxScatter2,
      grid: {
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              boundaryGap : true,
              splitLine: splitLine,
              axisLine: axisLine,
              data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
          }
      ],
      yAxis : [
          {
              type : 'value',
              splitLine: splitLine,
              axisLine: axisLine,
          }
      ],
      series : [
          {
              name:'0-1',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
                  // barBorderRadius:[0, 0, 15, 15]
              },
              data:[5000, 5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000],
          },
          {
              name:'1-3',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#7ffef8',//#80d7ff=rgba(128,215,255,0.8)
                  // barBorderRadius:[15, 15, 0, 0],
              },
              data:[2000,3000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
          },
          {
              name:'3-5',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
                  // barBorderRadius:[0, 0, 15, 15]
              },
              data:[4000, 3000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,],
          },
          {
              name:'5-25',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#ffcfc8',//#80d7ff=rgba(128,215,255,0.8)
                  // barBorderRadius:[15, 15, 0, 0],
              },
              data:[10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
          },

          {
              name:'25-80',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
                  // barBorderRadius:[0, 0, 10, 10]
              },
              data:[3000, 3000,3000,3000,3000,3000,7000,3000,3000,3000,3000,3000]
          },
          {
              name:'80-100',
              type:'bar',
              stack: '总量',
              barWidth: '90%', 
              barGap: '50%',
              itemStyle:{
                  color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
                  // barBorderRadius:[10, 10, 0, 0] 
              },
              data:[20000,20000,20000,20000,20000,20000,16000,20000,20000,20000,20000,20000]
          },
          {
              name:'100-999,999',
              type:'bar',
              stack: '总量',
              barWidth: '100%', 
              barGap: '50%',
              itemStyle:{
                  color: '#ff7999',//red #c23531=rgba(194,53, 49, 0.8)
                  // barBorderRadius:[10, 10, 0, 0] 
              },
              data:[1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]
          }
          
      ]
};
//磁盘IO
var optionBar12 = {
      tooltip : {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow',//line/cross/shadow
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      label:{
          show: false,
          color: '#fff',
          position: 'inside',
      },
      legend: [        
          {  
            x:'left', 
            left: 15,
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,
            itemHeight:10,
            itemGap:15,
            data:['10%-25%','25%-50%','50%-75%'] 
          },  
          {  
            x:'left',
            left: 15,
            top:20, 
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,//default 25
            itemHeight:10,//default 14
            itemGap:15,//default 10  
            data:['75%-90%', '90%-100%'] 
          } 
      ], 
      toolbox: toolboxScatter4,
      grid: {
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              boundaryGap : true,
              splitLine: splitLine,
              axisLine: axisLine,
              data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
          }
      ],
      yAxis : [
          {
              type : 'value',
              splitLine: splitLine,
              axisLine: axisLine,
          }
      ],
      series : [
          {
              name:'10%-25%',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
              },
              data:[5000, 5000,5000,5000,5000,5000,5000,4000,5000,5000,5000,5000],
          },
          {
              name:'25%-50%',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#7ffef8',//#80d7ff=rgba(128,215,255,0.8)
              },
              data:[2000,3000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
          },
          {
              name:'50%-75%',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
              },
              data:[4000, 3000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,],
          },
          {
              name:'75%-90%',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#ffcfc8',//#80d7ff=rgba(128,215,255,0.8)
              },
              data:[10000,10000,10000,15000,10000,10000,10000,10000,10000,10000,10000,10000],
          },

          {
              name:'90%-100%',
              type:'bar',
              stack: '总量',
              barWidth: '90%',
              itemStyle:{
                  color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
              },
              data:[3000, 3000,3000,3000,3000,3000,7000,3000,3000,3000,3000,3000]
          }
          
      ]
};

//bar堆叠加（主要是利用stack属性，然后stack：值设置相同的就叠加）用于数据没有重叠的
// var optionBar22 = {
  //     // title: {
  //     //     text: '堆叠bars'
  //     // },
  //     tooltip : {
  //         trigger: 'axis',
  //         axisPointer: {
  //             type: 'shadow',//line/cross/shadow
  //             label: {
  //                 backgroundColor: '#6a7985'
  //             }
  //         }
  //     },
  //     legend: {
  //         textStyle:{
  //           color: '#fff'
  //         },
  //         // data:['cpu>30%','cpu>70%','视频广告','搜索引擎',]
  //     },
  //     toolbox: {
  //         feature: {
  //             saveAsImage: {}
  //         }
  //     },
  //     grid: {
  //         left: 20,
  //         right: 20,
  //         bottom: 20,
  //         containLabel: true
  //     },
  //     xAxis : [
  //         {
  //             type : 'category',
  //             boundaryGap : true,
  //             splitLine: splitLine,
  //             axisLine: axisLine,
  //             data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
  //         }
  //     ],
  //     yAxis : [
  //         {
  //             type : 'value',
  //             splitLine: splitLine,
  //             axisLine: axisLine,
  //         }
  //     ],
  //     series : [
  //         {
  //             name:'去年618cpu>70%',
  //             type:'bar',
  //             stack: '总量',
  //             barWidth: 15,
  //             // barGap: '-100%',
  //             itemStyle:{
  //                 color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
  //                 barBorderRadius:[0, 0, 15, 15]
  //             },
  //             label:{
  //               show: false,
  //               color: '#fff',
  //               position: [10,0]
  //             },
  //             z:2,
  //             data:[120, 132, 101, 134, 90, 230, 210,400, 500, 100, 50, 800],
  //         },
  //         {
  //             name:'去年618cpu>30%',
  //             type:'bar',
  //             stack: '总量',
  //             // barGap: '20%',           
  //             barWidth: 15,
  //             z: 1,
  //             itemStyle:{
  //                 color: '#c2fefb',//#80d7ff=rgba(128,215,255,0.8)
  //                 barBorderRadius:[15, 15, 0, 0],
  //                 // borderWidth:1,
  //                 // borderColor:'#ff0000' 
  //             },
  //             label:{
  //               show: false,
  //               color: '#fff',
  //               position: 'top'
  //             },
  //             data:[220, 182, 191, 234, 290, 330, 310,600, 800, 300, 500, 1200],
  //         },
  //         {
  //             name:'去年双11cpu>70%',
  //             type:'bar',
  //             stack: '总量2',
  //             barWidth: 15,
  //             // barGap: '-100%',
  //             itemStyle:{
  //                 color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
  //                 barBorderRadius:[0, 0, 15, 15]
  //             },
  //             label:{
  //               show: false,
  //               color: '#fff',
  //               position: [10,0]
  //             },
  //             z:2,
  //             data:[90, 132, 300, 200, 500, 400, 210, 700, 360, 800, 160, 260],
  //         },
  //         {
  //             name:'去年双11cpu>30%',
  //             type:'bar',
  //             stack: '总量2',
  //             // barGap: '20%',           
  //             barWidth: 15,
  //             z: 1,
  //             itemStyle:{
  //                 color: '#ffe4e0',//#80d7ff=rgba(128,215,255,0.8)
  //                 barBorderRadius:[15, 15, 0, 0],
  //                 // borderWidth:1,
  //                 // borderColor:'#ff0000' 
  //             },
  //             label:{
  //               show: false,
  //               color: '#fff',
  //               position: 'top'
  //             },
  //             data:[1000, 600, 591, 234, 690, 530, 310,800, 900, 1100, 500, 500],
  //         },

  //         {
  //             name:'今年cpu>70%',
  //             type:'bar',
  //             stack: '总量3',
  //             barWidth: 15,
  //             // barGap: 20',
  //             itemStyle:{
  //                 color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
  //                 barBorderRadius:[0, 0, 10, 10]
  //             },
  //             label:{
  //               show: true,
  //               color: '#fff',
  //               position: 'middle'    
  //             },
  //             z: 2,
  //             data:[150, 232, 201, 154, 190, 330, 410, 200, 312, 122, 500, 700]
  //         },        
  //         {
  //             name:'今年cpu>30%',
  //             type:'bar',
  //             stack: '总量3',
  //             barGap: '50%',
  //             barWidth: 15, 
  //             itemStyle:{
  //                 color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
  //                 barBorderRadius:[10, 10, 0, 0] 
  //             },
  //             label:{
  //               show: true,
  //               color: '#fff',
  //               position: 'top'
  //             },
  //             // areaStyle: {normal: {}},
  //             z: 3,
  //             data:[820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 700,1000, 1300]
  //         }
  //     ]
// };

//bar重叠；有去重，重叠的（主要利用多个坐标轴xAxisIndex: 1,xAxisIndex:0,）
//cpu使用率
var optionBar22 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',//line/cross/shadow
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    label:{
        show: false,
        color: '#fff',
        position: 'insideTop'    
    },
    legend: [        
        {  
          x:'left', 
          left: 15,
          textStyle:{
            color: '#769fb3'
          },
          icon: 'circle',
          itemWidth:10,
          itemHeight:10,
          itemGap:15,
          data:['去年618cpu>70%','去年618cpu>30%','去年双11cpu>70%', '去年双11cpu>30%'] 
        },  
        {  
          x:'left',
          left: 15,
          top:20, 
          textStyle:{
            color: '#769fb3'
          }, 
          icon: 'circle',
          itemWidth:10,//default 25
          itemHeight:10,//default 14
          itemGap:15,//default 10    
          data:['今年cpu>70%', '今年cpu>30%'] 
        } 
    ], 
    toolbox: toolboxBar1,
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            splitLine: splitLine,
            axisLine: axisLine,
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        },
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: splitLine,
            axisLine: axisLine,
        }
    ],
    series : [
        {
            name:'去年618cpu>70%',
            type:'bar',
            barWidth: '15%',//10
            itemStyle:{
                color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[120, 132, 101, 134, 90, 230, 210,400, 500, 100, 50, 800],
        },
        {
            name:'去年双11cpu>70%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[90, 132, 300, 200, 500, 400, 210, 700, 360, 800, 160, 260],
        },
        {
            name:'今年cpu>70%',
            type:'bar',
            barWidth: '15%',
            barGap: '40%',
            xAxisIndex: 1,
            zlevel:1,
            itemStyle:{
                color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'insideTop'    
            // },
            data:[150, 232, 201, 154, 190, 330, 410, 200, 312, 122, 500, 700]
        },  
        {
            name:'去年618cpu>30%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0,
            itemStyle:{
                color: '#c2fefb',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[220, 182, 191, 234, 290, 330, 310,600, 800, 300, 500, 1200],
        },       
        {
            name:'去年双11cpu>30%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0, 
            itemStyle:{
                color: '#ffe4e0',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[1000, 600, 591, 234, 690, 530, 310,800, 900, 1100, 500, 500],
        },             
        {
            name:'今年cpu>30%',
            type:'bar',
            barWidth: '15%', 
            barGap: '40%',
            xAxisIndex: 0,           
            zlevel:0,
            itemStyle:{
                color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
                barBorderRadius:[10, 10, 10, 10] 
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'top'
            // },
            data:[820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 700,1000, 1300]
        }
    ]
}
//cpu负载 25-100
var optionBar23 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',//line/cross/shadow
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    label:{
        show: false,
        color: '#fff',
        position: 'insideTop'//top
    },
    legend: [        
          {  
            x:'left', 
            left: 15,
            textStyle:{
              color: '#769fb3'
            },
            icon: 'circle',
            itemWidth:10,
            itemHeight:10,
            itemGap:15,
            data:['去年618cpu>100%','去年618cpu>25%','去年双11cpu>100%', '去年双11cpu>25%'] 
          },  
          {  
            x:'left',
            left: 15,
            top:20, 
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,//default 25
            itemHeight:10,//default 14
            itemGap:15,//default 10    
            data:['今年cpu>100%', '今年cpu>25%'] 
          } 
    ], 
    toolbox: toolboxBar2,
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            splitLine: splitLine,
            axisLine: axisLine,
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        },
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        }

    ],
    yAxis : [
        {
            type : 'value',
            splitLine: splitLine,
            axisLine: axisLine,
        }
    ],
    series : [
        {
            name:'去年618cpu>100%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[120, 132, 101, 134, 90, 230, 210,400, 500, 100, 50, 800],
        },
        {
            name:'去年双11cpu>100%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[90, 132, 300, 200, 500, 400, 210, 700, 360, 800, 160, 260],
        },
        {
            name:'今年cpu>100%',
            type:'bar',
            barWidth: '15%',
            barGap: '40%',
            xAxisIndex: 1,
            zlevel:1,
            itemStyle:{
                color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            data:[150, 232, 201, 154, 190, 330, 410, 200, 312, 122, 500, 700]
        },  
        {
            name:'去年618cpu>25%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0,
            itemStyle:{
                color: '#c2fefb',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[220, 182, 191, 234, 290, 330, 310,600, 800, 300, 500, 1200],
        },       
        {
            name:'去年双11cpu>25%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0, 
            itemStyle:{
                color: '#ffe4e0',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[1000, 600, 591, 234, 690, 530, 310,800, 900, 1100, 500, 500],
        },             
        {
            name:'今年cpu>25%',
            type:'bar',
            barWidth: '15%', 
            barGap: '40%',
            xAxisIndex: 0,           
            zlevel:0,
            itemStyle:{
                color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
                barBorderRadius:[10, 10, 10, 10] 
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 700,1000, 1300]
        }
    ]
}
//内存使用率70-95
var optionBar24 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',//line/cross/shadow
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    label:{
        show: false,
        color: '#fff',
        position: 'insideTop'
    },
    legend: [        
          {  
            x:'left', 
            left: 15,
            textStyle:{
              color: '#769fb3'
            },
            icon: 'circle',
            itemWidth:10,
            itemHeight:10,
            itemGap:15,
            data:['去年618cpu>95%','去年618cpu>70%','去年双11cpu>95%', '去年双11cpu>70%'] 
          },  
          {  
            x:'left',
            left: 15,
            top:20, 
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,//default 25
            itemHeight:10,//default 14
            itemGap:15,//default 10    
            data:['今年cpu>95%', '今年cpu>70%'] 
          } 
    ], 
    toolbox: toolboxBar3,
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            splitLine: splitLine,
            axisLine: axisLine,
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        },
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        }

    ],
    yAxis : [
        {
            type : 'value',
            splitLine: splitLine,
            axisLine: axisLine,
        }
    ],
    series : [
        {
            name:'去年618cpu>95%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[120, 132, 101, 134, 90, 230, 210,400, 500, 100, 50, 800],
        },
        {
            name:'去年双11cpu>95%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[90, 132, 300, 200, 500, 400, 210, 700, 360, 800, 160, 260],
        },
        {
            name:'今年cpu>95%',
            type:'bar',
            barWidth: '15%',
            barGap: '40%',
            xAxisIndex: 1,
            zlevel:1,
            itemStyle:{
                color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'insideTop'    
            // },
            data:[150, 232, 201, 154, 190, 330, 410, 200, 312, 122, 500, 700]
        },  
        {
            name:'去年618cpu>70%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0,
            itemStyle:{
                color: '#c2fefb',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[220, 182, 191, 234, 290, 330, 310,600, 800, 300, 500, 1200],
        },       
        {
            name:'去年双11cpu>70%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0, 
            itemStyle:{
                color: '#ffe4e0',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[1000, 600, 591, 234, 690, 530, 310,800, 900, 1100, 500, 500],
        },             
        {
            name:'今年cpu>70%',
            type:'bar',
            barWidth: '15%', 
            barGap: '40%',
            xAxisIndex: 0,           
            zlevel:0,
            itemStyle:{
                color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
                barBorderRadius:[10, 10, 10, 10] 
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'top'
            // },
            data:[820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 700,1000, 1300]
        }
    ]
}
//磁盘IO 30-70
var optionBar25 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',//line/cross/shadow
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    label:{
        show: false,
        color: '#fff',
        position: 'insideTop'
    },
    legend: [        
          {  
            x:'left', 
            left: 15,
            textStyle:{
              color: '#769fb3'
            },
            icon: 'circle',
            itemWidth:10,
            itemHeight:10,
            itemGap:15,
            data:['去年618cpu>70%','去年618cpu>30%','去年双11cpu>70%', '去年双11cpu>30%'] 
          },  
          {  
            x:'left',
            left: 15,
            top:20, 
            textStyle:{
              color: '#769fb3'
            }, 
            icon: 'circle',
            itemWidth:10,//default 25
            itemHeight:10,//default 14
            itemGap:15,//default 10    
            data:['今年cpu>70%', '今年cpu>30%'] 
          } 
    ], 
    toolbox: toolboxBar4,
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            splitLine: splitLine,
            axisLine: axisLine,
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        },
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00']
        }

    ],
    yAxis : [
        {
            type : 'value',
            splitLine: splitLine,
            axisLine: axisLine,
        }
    ],
    series : [
        {
            name:'去年618cpu>70%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#01b5ad',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[120, 132, 101, 134, 90, 230, 210,400, 500, 100, 50, 800],
        },
        {
            name:'去年双11cpu>70%',
            type:'bar',
            barWidth: '15%',
            itemStyle:{
                color: '#ff9080',// #008ccd=rgba(0, 140, 205, 0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            xAxisIndex: 1,
            zlevel:1,
            data:[90, 132, 300, 200, 500, 400, 210, 700, 360, 800, 160, 260],
        },
        {
            name:'今年cpu>70%',
            type:'bar',
            barWidth: '15%',
            barGap: '40%',
            xAxisIndex: 1,
            zlevel:1,
            itemStyle:{
                color: '#008ccd', //黑 #2f4554=rgba(47,69,84,0.8)
                barBorderRadius:[0, 0, 10, 10]
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'insideTop'    
            // },
            data:[150, 232, 201, 154, 190, 330, 410, 200, 312, 122, 500, 700]
        },  
        {
            name:'去年618cpu>30%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0,
            itemStyle:{
                color: '#c2fefb',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[220, 182, 191, 234, 290, 330, 310,600, 800, 300, 500, 1200],
        },       
        {
            name:'去年双11cpu>30%',
            type:'bar',
            barWidth: '15%',
            xAxisIndex: 0,
            zlevel:0, 
            itemStyle:{
                color: '#ffe4e0',//#80d7ff=rgba(128,215,255,0.8)
                barBorderRadius:[10, 10, 10, 10],
            },
            data:[1000, 600, 591, 234, 690, 530, 310,800, 900, 1100, 500, 500],
        },             
        {
            name:'今年cpu>30%',
            type:'bar',
            barWidth: '15%', 
            barGap: '40%',
            xAxisIndex: 0,           
            zlevel:0,
            itemStyle:{
                color: '#80d7ff',//red #c23531=rgba(194,53, 49, 0.8)
                barBorderRadius:[10, 10, 10, 10] 
            },
            // label:{
            //   show: true,
            //   color: '#fff',
            //   position: 'top'
            // },
            data:[820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 700,1000, 1300]
        }
    ]
}