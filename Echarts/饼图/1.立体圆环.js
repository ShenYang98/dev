// echarts:4.1.0
// echarts-gl:1.1.0

let option;
let legendValue = [];
function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k) {
    let midRatio = (startRatio + endRatio) / 2;
    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;
    // 如果只有一个扇形，则不实现选中效果
    if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
    }
    k = typeof k !== "undefined" ? k : 1 / 3;
    let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
    let hoverRate = isHovered ? 1.05 : 1;
    return {
        u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
        },
        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
        },
        x: function (u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function (u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function (u, v) {
            if (u < -Math.PI * 0.5) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5) {
                return Math.sin(u);
            }
            return Math.sin(v) > 0 ? 1 : -1;
        }
    };
}

function getPie3D(pieData, internalDiameterRatio) {
    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];
    let k = typeof internalDiameterRatio !== "undefined" ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 8;
    let labelSeries = {
        id: "labelSeries",
        type: "bar3D",
        barSize: [0.2, 0.2],
        data: [],
        label: {
            show: false,
            formatter: function (params) {
                return `${params.name}\n${params.value[3]}`
            },
            backgroundColor: "#fff"
        }
    }
    for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        let seriesItem = {
            name: typeof pieData[i].name === "undefined" ? `series${i}` : pieData[i].name,
            type: "surface",
            parametric: true,
            wireframe: {
                show: false
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k: k
            }
        }
        if (typeof pieData[i].itemStyle != "undefined") {
            let itemStyle = {},
            typeof pieData[i].itemStyle.color != "undefined" ? (itemStyle.color = pieData[i].itemStyle.color) : null;
            typeof pieData[i].itemStyle.opacity != "undefined" ? (itemStyle.opacity = pieData[i].itemStyle.opacity) : null;
            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem)
    }
    for(let i = 0;i<series.length;i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].ParametricEquation = getParametricEquation(
            series[i].pieData.startRatio,
            series[i].pieData.endRatio,
            false,
            false,
            k
        );
        startValue = endValue;
        legendValue.push(series[i].pieData.value);
        legendData.push(series[i].name);
        if (pieData[i].label && pieData[i].label.show) {
            var labelRadian = (series[i].pieData.startRatio + series[i].pieData.endRatio) * Math.PI;
            labelSeries.data.push({
                name: series[i].name,
                value: [
                    Math.cos(labelRadian),
                    Math.sin(labelRadian),
                    1.2,
                    series[i].pieData.value
                ],
                itemStyle: {
                    opacity:1
                }
            })
        }
    }
    series.push({
        name: "mouseoutSeries",
        type: "surface",
        parametric: true,
        wireframe: {
            show: false
        },
        itemStyle: {
            opacity: 0
        },
        ParametricEquation: {
            u: {
                min:0,
                max: Math.PI * 2,
                step: Math.PI / 20
            },
            v: {
                min:0,
                max: Math.PI,
                step: Math.PI / 20
            },
            x:function(u,v) {
                return Math.sin(v) * Math.sin(u) + Math.sin(u)
            },
            y:function(u,v) {
                return Math.sin(v) * Math.cos(u) + Math.cos(u)
            },
            z: function (u,v) {
                return Math.cos(v) > 0 ? 0.1: -0.1
            }
        }
    })
    series.push(labelSeries);
    option = {
        legend: {
            data: legendData,
            orient: "vertical",
            bottom: 0,
            itemWidth: 10,
            itemGap: 10,
            itemHeight: 10,
            textStyle: {
                color: "#fff"
            },
            formatter(name) {
                let index = 0;
                legendData.forEach(function ( value,i) {
                    if (value == name) {
                        index = i
                    }
                })
                return name + " " + legendValue[index]
            }
        },
        tooltip: {
            formatter: (params) => {
                if(params.seriesName !== "mouseoutSeries") {
                    return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${
                        params.color
                    };"></span>${option.series[params.seriesIndex].pieData.value}`
                }
            }
        },
        xAxis3D: {
            min: -1,
            max: 1
        },
        yAxis3D: {
            min: -1,
            max: 1
        },
        zAxis3D: {
            min: -1,
            max: 1
        },
        grid3D: {
            show: false,
            boxHeight:15,
            top: "-10%",
            viewControl:{
                alpha: 40
            }
        },
        series: series
    }
    return option
}
option = getPie3D([
    {
        name: "潜客",
        value: 54,
        itemStyle: {
            color: "#00A9FF"
        }
    },
    {
        name: "在保(含续保)",
        value: 22,
        itemStyle: {
            color: "#01ABAB"
        }
    },
    {
        name: "沉寂客户(投+被)",
        value: 14,
        itemStyle: {
            color: "#FF8EC7"
        }
    }
])