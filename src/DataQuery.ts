import { Query } from "google.visualization";

/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
export default class DataQuery {
  private opts: { sendMethod: "auto" };

  /**
   * Callback for accessing the query object before send
   *
   * @see https://developers.google.com/chart/interactive/docs/reference#Query
   * @see https://developers.google.com/chart/interactive/docs/querylanguage
   * @type {Function}
   */
  private query: Query;

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(private url: string | object) {
    /**
     * Optional request options
     *
     * @type {Object}
     */
    this.opts = {};

    // If the passed param is an Object, us it to configure the DataQuery
    if (typeof url === "object") {
      this.configure(url);
    }

    // If the this.url is still not a string after .configure(), error out.
    if (typeof this.url !== "string") {
      throw new DataError('"url" is must be a string.');
    }
  }

  /**
   * Configure the DataQuery
   *
   * @param {Object}   config       Configuration object for the DataQuery
   * @param {String}   config.url   Corresponds to "dataSourceUrl" in Google's docs
   * @param {Object}   config.opts  Corresponds to "opt_options" in Google's docs
   * @param {Function} config.query The current query is passed for modification before sending
   * @throws {DataError}
   */
  configure({ url, opts = {}, query }): any {
    if (!url) {
      throw new DataError(
        '"url" is a mandatory parameter for configuring a DataQuery.'
      );
    }

    this.url = url;
    this.opts = opts;
    this.query = query;
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Send the DataQuery
   *
   * @public
   * @return {Promise}
   */
  async send(): Promise<any> {
    let query = new window.google.visualization.Query(this.url, this.opts);

    if (this.query) {
      query = this.query(query);
    }

    return new Promise((resolve, reject) => {
      query.send(response => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}