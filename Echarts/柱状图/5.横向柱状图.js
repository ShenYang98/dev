let title = ["企业财产保险","企业财产保险","企业财产保险","企业财产保险","企业财产保险"]
let value = [22,33,44,55,66];
let max = Math.max(...value);
let borderData = Array(title.length).fill(max * 1.1)
let colorList = ["#FF646C","#FF646C","#FF646C","#FF646C","#FF646C"]
let option = {
    backgroundColor:"",
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show:false
        }
    },
    yAxis: {
        type: "category",
        data: title,
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            width: 80,
            overflow: "truncate",
            textStyle: {
                color: "rgba(255,255,255, 1)",
                fontSize: 6
            }
        }
    },
    series: [
        {
            type: "bar",
            data: value,
            itemStyle: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            },
            z: 2
        },
        {
            name: "白框",
            type: "bar",
            barGap: "-100%",
            data: borderData,
            tooltip: {
                show: false
            },
            itemStyle: {
                color: "RGBA(0, 61, 114, 1)"
            },
            label: {
                show: true,
                position: "right",
                fontSize: 6,
                color: "RGBA(0,244,245,1)",
                formatter:function (data) {
                    return value[data.dataIndex]
                }
            },
            z: 1
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)