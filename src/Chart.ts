import Renderable from "./Renderable";

/**
 * Chart Class
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */
export default class Chart extends Renderable {
  png: boolean;
  events: any;

  /**
   * Create a new Chart.
   *
   * @param {Object} json JSON object representing a Chart.
   * @example
   * {
   *     label: 'Test',
   *     type: 'PieChart',
   *     elementId: 'my-pie-chart',
   *     datatable: [
   *         ['Task', 'Hours per Day'],
   *         ['Work',     11],
   *         ['Eat',      2],
   *         ['Commute',  2],
   *         ['Watch TV', 2],
   *         ['Sleep',    7]
   *     ],
   *     options: {
   *         title: 'My Daily Activities'
   *     }
   * }
   */
  constructor(json: any) {
    super(json);

    /**
     * If this is set to true, then the {@link Chart} will be output as a PNG
     *
     * @type {Boolean}
     */
    this.png = Boolean(json.png);
  }

  /**
   * Actions to perform before drawing the {@link Chart}
   *
   * This method will have access to window.google since it is called
   * within the render method.
   *
   * @private
   */
  _setup() {
    this.gchart = new google.visualization[this.class](this.container);

    // TODO: append Lavachart defined events?
    // if (this.events) {
    //     this._attachEvents();
    // }
  }

  /**
   * Actions to perform once the {@link Chart} has been drawn
   *
   * This method will have access to window.google since it is called
   * within the run method.
   *
   * @private
   */
  _postDraw() {
    if (this.png) {
      this._drawPng();
    }
  }

  /**
   * Draws the chart as a PNG instead of the standard SVG
   *
   * @private
   * @see https://developers.google.com/chart/interactive/docs/printing
   */
  _drawPng() {
    const img = document.createElement("img");
    img.src = this.gchart.getImageURI();

    this.container.innerHTML = "";
    this.container.appendChild(img);
  }

  /**
   * Attach the defined chart event handlers.
   *
   * @private
   * @return {void}
   */
  _attachEvents() {
    this.events.forEach((callback, event) => {
      let context = window;
      let func = callback;

      if (typeof callback === "object") {
        context = context[callback[0]];
        func = callback[1];
      }

      console.log(
        `[lava.js] The "${this.uuid}::${event}" event will be handled by "${func}" in the context`,
        context
      );

      /**
       * Set the context of "this" within the user provided callback to the
       * chart that fired the event while providing the datatable of the chart
       * to the callback as an argument.
       */
      google.visualization.events.addListener(this.gchart, event, () => {
        const callback = context[func].bind(this.gchart);

        callback(this.data);
      });
    });
  }
}
