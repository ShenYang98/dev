// echarts 5.2.0
// echarts-liquidfill 3.0.0
let value = 0.463;
let value2 = [];
value2.push(value[0] * 100);
let option = {
    polar: {
        radius: ['100%', '82%'],
        center: ['24%', '50%']
    },
    angleAxis: {
        max: 100,
        clockwise: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: "cateory",
        show: true,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            type: "liquidFill",
            radius: "74%",
            z: 1,
            center: ["24%", "50%"],
            color: ["RGBA(0,190,243,1)"],
            data: value,
            backgroundStyle: {
                borderWidth: 1,
                color: "transparent"
            },
            label: {
                formatter: function () {
                    return (
                        (value[0] * 100).toFixed(1) + "%" + "\n" + "{a|强交互率}"
                    )
                },
                textStyle: {
                    fontSize: 8,
                    color: "#fff"
                },
                rich: {
                    a: {
                        fontSize: 4,
                        padding: 4
                    }
                }
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0
                },
                borderDistance: 0
            }
        },
        {
            name: "",
            type: "bar",
            roundCap: true,
            z: 2,
            showBackground: true,
            backgroundStyle: {
                color: "RGBA(4, 74, 127, 1)"
            },
            data: value2,
            coordinateSystem: "polar",
            itemStyle: {
                color: "RGBA()0, 190, 243, 1"
            }
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)