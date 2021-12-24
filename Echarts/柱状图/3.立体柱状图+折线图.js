let option = {
    tooltip: {
        trigger: "axis",
        formatter: "{b} : {c}",
        axisPointer: {
            type: "shadow"
        }
    },
    xAxis: {
        data: ["发放提成", "收取提成", "收取提成", "收取提成"],
        axisLine: {
            lineStyle: {
                color: "#087B82"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#B9F4F3"
            }
        }
    },
    yAxis: [
        {
            name: "单位：万人",
            nameTextStyle: {
                color: "#B9F4F3"
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#B9F4F3"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#087B82"
                }
            }
        },
        {
            type: "value",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#B9F4F3"
                },
                formatter: "{value}%"
            },
            splieLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "a",
            z: 0,
            tooltip: {
                show: true
            },
            yAxisIndex: 0,
            type: "bar",
            barWidth: 23,
            itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                        offset: 0,
                        color: "#0B4EC3" //0%处的颜色
                    },
                    {
                        offset: 0.6,
                        color: "#138CEB" //60%处的颜色
                    },
                    {
                        offset: 1,
                        color: "#00D3E2" //100%处的颜色
                    }
                ], false)
            },
            data: [22, 22, 33, 44],
            barGap: 0,
            label: {
                show: true,
                position: "insideBottom",
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
        },
        {
            type: "bar",
            barWidth: 8,
            z: 0,
            yAxisIndex: 0,
            itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                        {
                            offset: 0,
                            color: "#093337C"
                        },
                        {
                            offset: 0.6,
                            color: "#0761C0"
                        },
                        {
                            offset: 1,
                            color: "#037DB0"
                        }
                    ],
                    false
                )
            },
            barGap: 0,
            data: [22, 22, 33, 44]
        },
        {
            name: "b",
            yAxisIndex: 0,
            z: 0,
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                borderWidth: 1,
                borderColor: "#0571D5",
                color: "#1779E0"
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z ",
            symbolSize: ["30", "12"],
            symbolOffset: ["0", "-11"],
            symbolPosition: "end",
            data: [22, 22, 33, 44, 99, 44],
            z: 3
        },
        {
            name: "line",
            z: 3,
            type: "line",
            yAxisIndex: 1,
            data: [22, 66, 44, 11],
            itemStyle: {
                color: "#FFCC0E"
            },
            label: {
                show: true,
                color: "#fff",
                formatter: function (params) {
                    return params.value + "%"
                }
            },
            symbolSize: 8
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)