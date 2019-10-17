export type ChartFactory = (type: ChartClasses) => NewChartConstructor;

export enum VisualizationProps {
  "CLASS",
  "PACKAGE",
  "VERSION"
}

export interface NewChartConstructor {
  new (container: HTMLElement): any;
}

export type ChartEvents =
  | "ready"
  | "select"
  | "error"
  | "onmouseover"
  | "onmouseout";

export type SupportedCharts =
  | "AnnotationChart"
  | "AreaChart"
  | "BarChart"
  | "BubbleChart"
  | "CalendarChart"
  | "CandlestickChart"
  | "ColumnChart"
  | "ComboChart"
  | "DonutChart"
  | "GanttChart"
  | "GaugeChart"
  | "GeoChart"
  | "HistogramChart"
  | "LineChart"
  | "PieChart"
  | "SankeyChart"
  | "ScatterChart"
  | "SteppedAreaChart"
  | "TableChart"
  | "TimelineChart"
  | "TreeMapChart"
  | "WordTreeChart";

export type ChartClasses =
  | "AnnotationChart"
  | "AreaChart"
  | "BarChart"
  | "BubbleChart"
  | "Calendar"
  | "CandlestickChart"
  | "ColumnChart"
  | "ComboChart"
  | "PieChart"
  | "Gantt"
  | "Gauge"
  | "GeoChart"
  | "Histogram"
  | "LineChart"
  | "PieChart"
  | "Sankey"
  | "ScatterChart"
  | "SteppedAreaChart"
  | "Table"
  | "Timeline"
  | "TreeMap"
  | "WordTree";
