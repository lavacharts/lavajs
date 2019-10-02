export interface Google {
  [K: string]: any;

  charts: {
    load(version: string, config: any): void;
    setOnLoadCallback(callback: Function): void;
  };

  visualization: {
    [K: string]: any;

    data: {
      join(
        data1: google.visualization.DataTable,
        data2: google.visualization.DataTable,
        keys: any,
        joinMethod: any,
        dt1Columns: any,
        dt2Columns: any
      ): google.visualization.DataTable;
    };

    events: {
      addListener(chart: any, event: string, callback: Function): void;
    };

    arrayToDataTable(payload: any): google.visualization.DataTable;
  };
}