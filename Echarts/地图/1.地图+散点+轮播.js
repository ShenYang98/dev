const mapJson = require("../mapJson/china.json")
let data = {
    // 地图区块设置不同颜色
    mapColorList: [
        { name: "澳门市",value: 66},
        { name: "香港市",value: 66},
        { name: "上海市",value: 66},
        { name: "北京市",value: 66},
        { name: "天津市",value: 66},
        { name: "重庆市",value: 266},
        { name: "大连市",value: 66},
        { name: "无锡市",value: 66},
        { name: "常州市",value: 66},
        { name: "青岛市",value: 66},
        { name: "厦门市",value: 66},
        { name: "东莞市",value: 66},
        { name: "宁波市",value: 66},
        { name: "苏州市",value: 66},
        { name: "深圳市",value: 66},
        { name: "温州市",value: 66},
        { name: "青海省",value: 266},
        { name: "新疆维吾尔自治区",value: 166},
        { name: "宁夏回族自治区",value: 66},
        { name: "西藏自治区",value: 66},
        { name: "广西壮族自治区",value: 66},
        { name: "内蒙古自治区",value: 66},
        { name: "台湾省",value: 66},
        { name: "河北省",value: 66},
        { name: "河南省",value: 66},
        { name: "广东省",value: 66},
        { name: "吉林省",value: 66},
        { name: "贵州省",value: 66},
        { name: "福建省",value: 166},
        { name: "四川省",value: 66},
        { name: "海南省",value: 16},
        { name: "云南省",value: 66},
        { name: "辽宁省",value: 66},
        { name: "黑龙江省",value: 16},
        { name: "湖南省",value: 66},
        { name: "安徽省",value: 66},
        { name: "山东省",value: 66},
        { name: "江苏省",value: 66},
        { name: "江西省",value: 66},
        { name: "浙江省",value: 66},
        { name: "湖北省",value: 66},
        { name: "甘肃省",value: 66},
        { name: "山西省",value: 66},
        { name: "内蒙古省",value: 66},
        { name: "陕西省",value: 66},
    ],
    // 轮播
    timeAnimation: null,
    loopIndex: 0,
    // 数据长度
    loopIndexMax: 5
}
function init() {
    this.$echarts.registerMap("china", mapJson);
    let option = {
        tooltip: {
            trigger: "item",
            axisPointer: {
                type: "shadow"
            }
        },
        geo: {
            top: "10%",
            map: "china",
            show: true,
            zoom: 1.2,
            aspectScale: 0.85,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "#091632",
                    borderColor: "#1773c3",
                    shadowColor: "rgb(58,115,192",
                    shadowOffsetX: -3,
                    shadowOffsetY: 8
                }
            },
            emphasis: {
                focus: "none",
                itemStyle: {
                    areaColor: "#091632",
                    borderColor: "#1773c3",
                    shadowColorr: "#1773c3",
                    shadowBlur: 20
                }
            },
            tooltip: {
                show: false
            },
            regions: [
                {
                    name: "南海诸岛",
                    itemStyle: {
                        areaColor: "rgba(0,10,52,1)",
                        borderColor: "rgba(0,10,52,1)",
                        normal: {
                            opacity: 0,
                            label: {
                                show: false,
                                color: "#009cc9"
                            }
                        }
                    }
                }
            ]
        },
        visualMap: {
            show: false,
            type: "piecewise",
            seriesIndex: 0,
            pieces: [
                {gt:100,lte:300,color: "#223b8e"},
                {gte: 0,lte: 100,color: "#172e76"}
            ]
        },
        series: [
            {
                id: 3,
                z: 2,
                type: "map",
                top: "10%",
                zoom: 1.2,
                roam: false,
                map: "china",
                aspectScale: 0.85,
                itemStyle: {
                    normal: {
                        borderColor: "#1773c3",
                        borderWidth: 1,
                        areaColor: "#172e76"
                    },
                    emphasis: {
                        areaColor: "rgb(46,229,206)",
                        borderWidth: 0.1,
                        label: {
                            color: "#fff"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: "rgba(1,8,63,0.5)",
                    textStyle: {
                        color: "#eee"
                    },
                    show: false,
                    padding: 0,
                },
                data: convertMapData1()
            }, 
            {
                id: 2,
                type: "effectScatter",
                coordinateSystem: "geo",
                data: convertMapData(this.newAddCust),
                tooltip: {
                    backgroundColor: "rgba(1,8,63,0.5)",
                    textStyle: {
                        color: "#eee"
                    },
                    show: true,
                    padding: 0,
                    formatter: (params) => {
                        let {tooltipName,bf} = params.data;
                        return `<div class="af">
                            <span class="line></span>
                            <p>${tooltipName}</p>
                            <p>${bf}</p>
                        </div>`
                    }
                },
                showEffectOn: "render",
                rippleEffect: {
                    brushType: "stroke",
                    scale: 3
                },
                hoverAnimation: true,
                label: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: "#69fffe",
                        shadowBlur: 10,
                        shadowColor: "#333"
                    }
                },
                zlevel: 1
            }
        ]
    }
    this.chartInstance1.setOption(option,true);
    utils.common.resizeEcharts("echart-map",this.chartInstance1);
    this.setAnimation();
    this.mouseAnimation();
}

function convertMapData1() {
    return this.mapColorList;
}
// 散点
function convertMapData(data) {
    let geoCoordMapHalfCompany = {
        北京: [116.397128, 39.916527],
        甘肃: [103.73, 36.03],
        天津: [117.30983, 39.71755],
        山西: [112.53, 37.87],
        河北: [114.48, 38.03],
        内蒙古: [111.65, 40.82],
        辽宁: [123.38, 41.8],
        大连: [121.618622, 38.91459],
        吉林省: [125.35, 43.88],
        黑龙江: [126.63, 45.75],
        上海: [121.48941, 31.40527],
        江苏: [118.78, 32.04],
        无锡: [120.28429, 31.52853],
        常州: [119.59794, 31.72322],
        浙江: [120.19, 30.26],
        安徽: [117.27, 31.86],
        江西: [115.89, 28.68],
        福建: [119.3, 26.08],
        厦门: [118.11022, 24.490474],
        山东: [117, 36.65],
        青岛: [120.39629, 36.30744],
        苏州: [120.63132, 31.30227],
        河南: [113.6401, 34.72468],
        湖北: [114.31, 30.52],
        湖南: [113, 28.21],
        广东: [113.23, 23.16],
        深圳: [114.085947, 22.547],
        海南: [110.35, 20.02],
        广西: [108.33, 22.84],
        四川: [104.06, 30.67],
        重庆: [106.54, 29.59],
        贵州: [106.71, 26.57],
        云南: [102.73, 25.91604527],
        陕西: [108.95, 34.27],
        新疆: [87.68, 43.77],
        宁夏: [106.27, 38.47],
        西藏: [91.11, 29.97],
        东莞: [113.75, 23.04],
        宁波: [121.549792, 29.868388],
        青海: [101.74, 36.56],
        温州: [120.65, 28.01],
    }
    // 接口数据：
    // {
    //     branchCode: "3040100";
    //     branchName: "宁波分公司";
    //     cnt: "10098"
    // }
    let resData = [];
    for(let index = 0;index< data.length;index++) {
        const item = data[index];
        if(!item.branchName || !item.cnt || item.branchCode) {
            continue
        }
        let jianchengIndex = item.branchName.indexOf("分公司");
        let jincheng = item.branchName.slice(0, jiangchengIndex);
        let geoCoor = geoCoordMapHalfCompany[jincheng];
        resData.push({
            name: item.branchName,
            value: geoCoor,
            tooltipName: item.branchName,
            bf: item.cnt,
            companyCode: item.branchCode
        })
    }
    return resData;
} 
// tooltip循环设置
function setAnimation() {
    this.clearTooltip();
    this.timeAnimation = setInterval(() => {
        this.chartInstance1.dispatchAction({
            type: "showTip",
            seriesIndex: 1,
            dataIndex: this.loopIndex
        });
        this.loopIndex++;
        if(this.loopIndex >this.loopIndexMax) {
            this.loopIndex = 0;
        }
    }, 2000);
}
// 鼠标悬浮停掉轮播
function mouseAnimation() {
    this.chartInstance1.on("mouseover", (params) => {
        this.clearTooltip();
        this.loopIndex = 0;
        this.chartInstance1.on("mouseout", (params) => {
            this.setAnimation();
        })
    })
}
// 结束tooltip
function clearTooltip() {
    if(this.timeAnimation) {
        clearInterval(this.timeAnimation);
        this.timeAnimation = null;
    }
}

// 中支
let zzPoint = {
    type: "scatter",
    id: 1,
    coordinateSystem: "geo",
    data: this.convertMapZZData(this.),
    symbolSize: 6,
    label: {
        normal: {
            formatter: "{b}",
            position: "right",
            show: false
        },
        emphasis: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            color: "#69fffe"
        }
    },
    tooltip: {
        backgroundColor: "rgba(1, 8, 63, 0.5)",
        textStyle: {
            color: "#eee"
        },
        show: true,
        padding: 0,
        formatter: (params) => {
            let {tooltipName,bf} = params.data;
            return `<div class="af">
                <span class="line></span>
                <p>${tooltipName}</p>
                <p>${bf}</p>
            </div>`
        }
    }
}
option.series[2] = zzPoint;
// .map /deep .af {
//     position: relative;
//     color: #fff;
//     padding: 0.18rem;
//     box-shadow: 0px 4px 32px 8px rgba(20,156,245,0.68)
// }