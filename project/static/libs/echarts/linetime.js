//时间轴测试
$(function () {
  var linetime=echarts.init(document.getElementById('linetime'));

  $.get('../json/aqi-beijing.json', function (data) {//../js/chart/aqi-beijing.json是绝对路径http://192.168.20.163/monitorbig/echart-demo/json/aqi-beijing.json
      // alert('之心');
      linetime.setOption(option = {
          title: {
              text: 'Beijing AQI'
          },
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              data: data.map(function (item) {
                  return item[0];
              })
          },
          yAxis: {
              splitLine: {
                  show: false
              }
          },
          toolbox: {
              left: 'center',
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          dataZoom: [{   //时间轴伸缩配置
              startValue: '2014-06-01'
          }, {
              type: 'inside'
          },{
            textStyle: {
              color:'#fff'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
              areaStyle: {
                  color: '#8392A5'
              },
              lineStyle: {
                  opacity: 0.8,
                  color: '#8392A5'
              }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
          }],
          visualMap: {
              top: 10,
              right: 10,
              pieces: [{
                  gt: 0,
                  lte: 50,
                  color: '#096'
              }, {
                  gt: 50,
                  lte: 100,
                  color: '#ffde33'
              }, {
                  gt: 100,
                  lte: 150,
                  color: '#ff9933'
              }, {
                  gt: 150,
                  lte: 200,
                  color: '#cc0033'
              }, {
                  gt: 200,
                  lte: 300,
                  color: '#660099'
              }, {
                  gt: 300,
                  color: '#7e0023'
              }],
              outOfRange: {
                  color: '#999'
              }
          },
          series: {
              name: 'Beijing AQI',
              type: 'line',
              data: data.map(function (item) {
                  return item[1];
              }),
              markLine: {
                  silent: true,
                  data: [{
                      yAxis: 50
                  }, {
                      yAxis: 100
                  }, {
                      yAxis: 150
                  }, {
                      yAxis: 200
                  }, {
                      yAxis: 300
                  }]
              }
          }
      });
  });

});