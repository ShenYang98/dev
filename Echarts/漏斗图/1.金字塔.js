let data = [{name: "新保",value: 1059},{name: "续保", value: 1060}, {name: "脱保赢回",value:1061}]
let option = {
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c}%"
    },
    color: ["#13EFFF", "#EDC400", "#B483FF"],
    calculable: true,
    series: [
        {
            type: "funnel",
            sort: "ascending",
            left: 10,
            right: 10,
            itemStyle: {
                normal: {
                    label: {
                        position: "right",
                        formatter(params) {
                            return params.name + " " + params.value + "%"
                        }
                    }
                }
            },
            data: data
        }
    ]
}