(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory
    })
  } else if (typeof exports === 'object') {
    module.exports = factory
  } else {
    root.portalTheme = factory
  }
}(this, function (echarts) {
  echarts.registerTheme('portal', {
    color: ['#FF8942', '#EFD51C', '#44A5FF', '#59EFC2', '#FF7373', '#7493EE', '#7ba3a8', '#6EE3F6', '#75E57A', '#FABE6B', '#F67144'],
    // 没有设置 backgroundColor 所以背景是透明的

    // ----------- 坐标轴样式 -----------------
    // 类目坐标轴的配置，
    // 影响 xAxis 或 yAxis 中 type 为 'category' 的坐标轴样式
    categoryAxis: {
      axisLine: { "show": false }, // 隐藏坐标线
      axisTick: { "show": false }, // 隐藏刻度
      splitLine: { "show": false } // 隐藏网格线
    },
    // 数值坐标轴的配置，
    // 影响 xAxis 或 yAxis 中 type 为 'value' 的坐标轴样式
    valueAxis: {
      axisLine: { "show": false }
    },
    // ----------- 各种图形的样式 --------------
    // 折线图
    line: {
      smooth: true // 使用平滑的曲线
    },
    // 柱状图配置
    bar: {
      label: {
        normal: { // 在顶部显示数值
          show: true,
          position: 'top'
        }
      }
    },
    // 饼图
    pie: {
      radius: ['55%', '70%'], // 把饼图中心掏空变成环状
      hoverAnimation: false // 鼠标移上去的时候不放大那一块
    },
    // 雷达图配置
    radar: {
      shape: 'circle', // 使用圆形的雷达图
      splitArea: { show: false }
    }
  })
}))
