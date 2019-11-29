const o2mDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "one-to-many_filter_div",
  options: {
    filterColumnLabel: "Donuts Eaten"
  }
};

const o2mPieChart = {
  chartType: "PieChart",
  containerId: "one-to-many_pieChart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

const o2mBarChart = {
  chartType: "BarChart",
  containerId: "one-to-many_barChart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

lava.dashboard({
  containerId: "one-to-many_dashboard_div",
  data: [
    ["Name", "Donuts Eaten"],
    ["Michael", 5],
    ["Elisa", 7],
    ["Robert", 3],
    ["John", 2],
    ["Jessica", 6],
    ["Aaron", 1],
    ["Margareth", 8]
  ],
  bindings: [lava.bind(o2mDonutRangeSlider, [o2mPieChart, o2mBarChart])]
});

lava.draw();