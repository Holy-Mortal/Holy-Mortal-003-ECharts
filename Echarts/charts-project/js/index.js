// 监控区域模块制作
(function() {
    $('.monitor .tabs').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        // console.log($(this).index());
        // 选取对应索引号的content
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    });
    // 动画
    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();
// 点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.pie'));
    // 2. 指定配置项和数据
    var option = {
        // 提示框组件
        tooltip: {
            // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            // 格式化提示内容：
            // a 代表series系列图表名称  
            // b 代表series数据名称 data 里面的name    
            // c 代表series数据值 data 里面的value   
            // d代表  当前数据/总数据的比例
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        // 控制图表
        series: [{
            // 图表名称
            name: '点位统计',
            // 图表类型
            type: 'pie',
            // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
            // 饼形图半径。 可以是像素。也可以是百分比（ 基于DOM容器大小）第一项是内半径，第二项是外半径（通过它可以实现饼形图大小）
            radius: ['10%', '70%'],
            // 图表中心位置 left 50%  top 50%  距离图表DOM容器
            center: ['50%', '50%'],
            // radius 半径模式，另外一种是 area 面积模式
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            // 数据集 value 数据的值 name 数据的名称
            data: [
                { value: 20, name: '云南', label: { color: '#006cff' } },
                { value: 26, name: '北京', label: { color: '#60cda0' } },
                { value: 24, name: '山东', label: { color: '#ed8884' } },
                { value: 25, name: '河北', label: { color: '#ff9f7f' } },
                { value: 20, name: '江苏', label: { color: '#0096ff' } },
                { value: 25, name: '浙江', label: { color: '#9fe6b8' } },
                { value: 30, name: '四川', label: { color: '#32c5e9' } },
                { value: 42, name: '湖北', label: { color: '#1d9dff' } }
            ],
            // 修饰饼形图文字相关的样式 label对象
            // 文字调整
            label: {
                fontSize: 10,
                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长
                length: 6,
                // 连接文字线长
                length: 8
            }
        }]
    };
    // 3. 配置项和数据给实例化对象
    myChart.setOption(option);
    // 4. 当浏览器缩放时，图表也等比例缩放
    window.addEventListener('resize', function() {
        // 调用方法
        myChart.resize();
    })
})();
// 用户总量统计模块制作
(function() {
    var item = {
        name: '',
        value: 1200,
        // 1. 修改当前柱颜色
        itemStyle: {
            color: '#254065'
        },
        // 2. 鼠标在柱上不高亮
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 3. 鼠标经过柱，不显示提示框
        tooltip: {
            extraCssText: 'opacity: 0'
        }
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.bar'));
    // 2. 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'item', // 图标上触发
            // axisPointer: { // 坐标轴指示器，坐标轴触发有效
            //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        grid: {
            left: '0%',
            right: '3%',
            top: '3%',
            bottom: '3%',
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)',
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: false,
                // 把x轴刻度隐藏
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // x轴线颜色样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                // 把y轴刻度隐藏
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // y轴线颜色样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
            // y轴分隔线颜色样式
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        series: [{
            name: '用户统计',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 订单功能
(function() {
    // 1. 准备数据
    var data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' }
        }
        // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)');
    // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)');
    $('.order').on('click', '.filter a', function() {
            // 2. 点击切换激活样式
            $(this).addClass('active').siblings().removeClass('active')
                // 3. 点击切换数据
            var currdata = data[this.dataset.key]
                // .html()返回 $() 中的内容
            $h4Orders.html(currdata.orders)
            $h4Amount.html(currdata.amount)
        })
        // 4. 开启定时器切换数据
    var index = 0
    var $allTab = $('.order .filter a')
    setInterval(function() {
        index++
        if (index >= 4) index = 0
        $allTab.eq(index).click()
    }, 1500)
})();
// 销售统计模块
(function() {
    // (1) 准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.line'));
    // 2. 指定配置和数据
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            // 通过坐标轴触发
            trigger: 'axis'
        },
        legend: {
            // 修饰图例组件文字颜色
            textStyle: {
                color: '#4c9bfd'
            },
            // 距离容器右侧10%
            right: '10%',
            // data: ['预期销售额', '实际销售额']
            data: ['预期销售额', '实际销售额']
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '20%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false, // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分隔线颜色
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: '总量',
                smooth: true, // 线条圆滑显示
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. tab栏切换效果制作
    // (2) 点击切换效果
    $('.sales .caption').on('click', 'a', function() {
        // 注意索引号的实际值
        index = $(this).index() - 1;
        // 点击当前 a 高亮显示 调用 active
        $(this).addClass('active').siblings('a').removeClass('active');
        // 拿到当前 a 的自定义属性值
        // console.log(this.dataset.type);
        // 根据拿到的值找数据
        // console.log(data.year);
        // console.log(data['year']);
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        // 根据拿到的数据重新渲染 series 中的data
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        // 把重新配置好的数据给实例对象
        myChart.setOption(option);
    });
    // 5. tab栏自动切换效果
    // 开启定时器每隔3秒，自动让a触发点击事件
    var as = $('.sales .caption a');
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1500);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $('.sales').hover(
        function() {
            clearInterval(timer);
        },
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 1500);
        }
    );
    // 6. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 渠道分布雷达图
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.radar'));
    // 2. 指定配置
    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%']
        },
        // backgroundColor: '#161627',
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            // 修改雷达图大小
            radius: '62%',
            shape: 'circle',
            // 指示器轴的分隔圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    // 分隔圆圈线条颜色
                    // color: [
                    //     'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    //     'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    //     'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    // ].reverse()
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴线
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
            name: '北京',
            type: 'radar',
            // 填充区域的线条颜色
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // 设置图形标记（拐点）
            symbol: 'circle',
            // 设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
                color: '#fff'
            },
            // 让小圆点显示数据
            label: {
                show: true,
                fontSize: 10
            },
            areaStyle: {
                // 修饰区域填充的背景颜色
                color: 'rgba(238, 197, 102, 0.6)'
            }
        }]
    };
    // 3. 把配置和数据给对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 销售模块 饼形图 半圆形 设置方式
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.gauge'));
    // 2. 指定配置
    var option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            radius: ['130%', '150%'],
            // 移动位置
            center: ['48%', '80%'],
            labelLine: {
                show: false
            },
            // 设置起始角度,不是旋转角度
            startAngle: 180,
            // 鼠标经过不放大图片
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                { value: 100, itemStyle: { color: "#12274d" } },
                { value: 200, itemStyle: { color: "transparent" } },
            ]
        }]
    };
    // 3. 把配置和数据给对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 全国热榜模块
(function() {
    // 1. 准备相关数据
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    // 2. 根据数据渲染各省热榜 sup 模块内容
    // (1) 遍历 hotData 对象
    var supHTML = "";
    $.each(hotData, function(index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class=${item.flag ? "icon-up" : "icon-down" }></s></span></li>`;
    });
    $('.sup').html(supHTML);
    // 3. 当鼠标进入 tab 时
    // 鼠标经过当前 li 要高亮显示
    $('.province .sup').on('mouseenter', 'li', function() {
        index = $(this).index();
        render($(this));
    });
    // 声明一个函数 设置sup当前li高亮，对应品牌渲染
    function render(that) {
        that.addClass('active').siblings().removeClass();
        // 拿到当前从城市品牌对象
        // hotData[$(this).index()].barands
        // 开始办理品牌对象
        var subHTML = "";
        $.each(hotData[that.index()].brands, function(index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num}<s class=${item.flag ? "icon-up" : "icon-down" }></s></span></li>`;
        });
        $('.sub').html(subHTML);
    };
    // 4. 默认把第一个 li 处于鼠标经过状态
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter();
    // 5. 开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);
    $('.province .sup').hover(
        // 鼠标经过事件
        function() {
            clearInterval(timer);
        },
        // 鼠标离开事件
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
            }, 2000);
        }
    )
})();