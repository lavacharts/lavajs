import Debug from "debug";
import { TinyEmitter } from "tiny-emitter";

import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import { EVENTS } from "./Eventful";
import { createDataTable, debug, getProp, getWindowInstance } from "./lib";
import {
  ChartClasses,
  ChartUpdateReturn,
  Google,
  LavaJsOptions,
  SupportedCharts
} from "./types";
import { DrawableTmpl } from "./types/drawable";
import { Formatter } from "./types/formats";
import { VIZ_PROPS } from "./VisualizationProps";

type DrawableTypes = SupportedCharts | "Dashboard";

/**
 * The {@link Drawable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 */
export default class Drawable extends TinyEmitter {
  public static CHART_EVENTS = [
    "ready",
    "select",
    "error",
    "onmouseover",
    "onmouseout"
  ];

  /**
   * PreDraw hook
   */
  public preDraw?(): void;

  /**
   * PostDraw hook
   */
  public postDraw?(): void;

  /**
   * Configurable options.
   */
  public options: LavaJsOptions;

  /**
   * DataTable for the {@link Chart} / {@link Dashboard}.
   */
  public data!: google.visualization.DataTable;

  /**
   * Google chart object created once the {@link Chart} / {@link Dashboard}
   * has been rendered.
   */
  public googleChart: any;

  /**
   * Type of {@link Drawable}.
   */
  public readonly type: DrawableTypes;

  /**
   * The google.visualization class needed for rendering.
   */
  public readonly class: ChartClasses;

  /**
   * The google.visualization package needed for rendering.
   */
  public readonly package: string;

  /**
   * Element ID of the DOM node for the container.
   */
  public readonly elementId: string;

  /**
   * Unique label for the {@link Chart} / {@link Dashboard}.
   */
  public readonly label: string;

  /**
   * Formatters for the DataTable
   */
  protected formats: Formatter[];

  /**
   * Event listeners for the Drawable.
   */
  protected events: Record<string, Function>;

  /**
   * The source of the DataTable, to be used in setData().
   */
  private dataSrc: any;

  protected readonly debug: Debug.Debugger;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: DrawableTmpl) {
    super();

    this.type = drawable.type;
    this.label = drawable.label;
    this.dataSrc = drawable.data;
    this.elementId = drawable.elementId;

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.class = getProp(this.type as SupportedCharts, VIZ_PROPS.CLASS);
    this.package = getProp(this.type as SupportedCharts, VIZ_PROPS.PACKAGE);

    this.debug = debug.extend(this.uuid);

    const lava = getWindowInstance();

    lava.on(EVENTS.GOOGLE_READY, () => this.handleGoogleReady);

    lava.on(EVENTS.DRAW, () => this.draw());

    this.debug("Created!");
    this.debug(drawable);
  }

  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
   */
  public get uuid(): string {
    return this.type + ":" + this.label;
  }

  /**
   * HTMLElement into which the chart will be rendered.
   */
  public get container(): HTMLElement | null {
    return document.getElementById(this.elementId);
  }

  /**
   * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
   *
   * @public
   */
  public async draw(): Promise<void> {
    this.registerEventHandlers();

    if (!this.container) {
      throw new ElementIdNotFound(this.elementId);
    }

    await this.setData(this.dataSrc);

    if (!this.data) {
      throw new DataError(`Could not draw, data is ${this.data}`);
    }

    if (this.formats) {
      this.applyFormats();
    }
  }

  /**
   * Sets the {@link DataTable} for the {@link Drawable}.
   *
   * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
   */
  public async setData(payload: any): Promise<void> {
    if (payload instanceof DataQuery) {
      this.debug(`Sending DataQuery`);

      const response = await payload.send();

      this.debug(`Response received`);
      this.debug(response);

      this.data = response.getDataTable();
    } else {
      this.data = createDataTable(payload);
    }

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(
        `There was a error setting the data for ${this.uuid}`
      );
    }

    this.debug(`Setting data`);
    this.debug(this.data);

    if (payload.formats) {
      this.applyFormats(payload.formats);
    }
  }

  /**
   * Apply the formats to the DataTable
   */
  public applyFormats(formats?: Formatter[]): void {
    if (formats) {
      this.formats = formats;
    }

    for (const format of this.formats) {
      const formatter = new window.google.visualization[format.type](
        format.options
      );

      this.debug(`Formatting column [${format.index}] with:`);
      this.debug(format);

      formatter.format(this.data, format.index);
    }
  }

  /**
   * Loads new data into the drawable and redraws.
   *
   * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
   * a chart can be dynamically update in page, without reloads.
   */
  public async updateData(payload: object): Promise<ChartUpdateReturn> {
    await this.setData(payload);

    await this.draw();

    return this.getChartUpdateReturn();
  }

  /**
   * Loads new options into the drawable and redraws.
   *
   * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
   * This can be used to update a chart dynamically, without reloads.
   */
  public async updateOptions(payload: object): Promise<ChartUpdateReturn> {
    this.options = Object.assign(this.options, payload);

    await this.draw();

    return this.getChartUpdateReturn();
  }

  /**
   * Attach event emitters onto the google chart to relay the events
   * forward onto the lavachart.
   *
   * The Google Chart and DataTable objects will be passed to the listener
   * callback for interaction.
   */
  protected async registerEventHandlers(): Promise<void> {
    //
  }

  private handleGoogleReady(google: Google): void {
    this.debug(`Caught <${EVENTS.GOOGLE_READY}>`);
    this.debug("Registering event handlers");

    // console.log(google);

    Drawable.CHART_EVENTS.forEach(event => {
      google.visualization.events.addListener(this.googleChart, event, () => {
        this.fireEvent(event);
      });
    });
  }

  private fireEvent(event: string): void {
    this.debug(`Firing <${event}>`);

    const payload = {
      chart: this.googleChart,
      data: this.data
    };

    this.emit(event, payload);
  }

  private getChartUpdateReturn(): ChartUpdateReturn {
    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
  }
}
