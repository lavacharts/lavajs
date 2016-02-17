"use strict";

const EventEmitter = require('events');
const util = require('util');

/**
 * lava.js
 *
 * Author:  Kevin Hill
 * Email:   kevinkhill@gmail.com
 * Github:  https://github.com/kevinkhill/lavacharts
 * License: MIT
 */
var lava = function() {
  EventEmitter.call(this);

  this._charts        = [];
  this._dashboards    = [];
  this._readyCallback = null;

  this.errors = require('./lava/Errors.js')
  this.dataTableVersion = '0.6';
};

util.inherits(lava, EventEmitter);

module.exports = new lava();



/**
 * LavaChart object.
 */
lava.prototype.Chart = require('./lava/Chart.js')

/**
 * Dashboard object.
 */
lava.prototype.Dashboard = require('./lava/Dashboard.js');


lava.prototype.DataTable = function (data) {
  return new window.google.visualization.DataTable(data);
};

lava.prototype.ready = function (callback) {
  if (typeof callback !== 'function') {
    throw this.errors.INVALID_CALLBACK(callback);
  }

  //this._readyCallback = callback;
  this._.defer(callback);
};

/**
 * Event wrapper for chart events.
 *
 *
 * Used internally when events are applied so the user event function has
 * access to the chart within the event callback.
 *
 * @param {object} event
 * @param {object} chart
 * @param {function} callback
 */
lava.prototype.event = function (event, chart, callback) {
  return callback(event, chart);
};

/**
 * Loads a new DataTable into the chart and redraws.
 *
 *
 * Used with an AJAX call to a PHP method returning DataTable->toJson(),
 * a chart can be dynamically update in page, without reloads.
 *
 * @param {string} chartLabel
 * @param {string} json
 * @param {function} callback
 */
lava.prototype.loadData = function (chartLabel, json, callback) {
  this.getChart(chartLabel, function (chart) {
    if (typeof json.data != 'undefined') {
      chart.setData(json.data);
    } else {
      chart.setData(json);
    }

    if (typeof json.formats != 'undefined') {
      chart.applyFormats(json.formats);
    }

    chart.redraw();

    if (typeof callback == 'function') {
      callback(chart);
    }
  });
};

/**
 * Stores a chart within lava.js and registers it for redraws.
 *
 * @param chart Chart
 */
lava.prototype.storeChart = function (chart) {
  this._charts.push(chart);
};

/**
 * Returns the LavaChart javascript objects
 *
 *
 * The LavaChart object holds all the user defined properties such as data, options, formats,
 * the GoogleChart object, and relative methods for internal use.
 *
 * The GoogleChart object is available as ".chart" from the returned LavaChart.
 * It can be used to access any of the available methods such as
 * getImageURI() or getChartLayoutInterface().
 * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
 * for some examples relative to LineCharts.
 *
 * @param  {string}   chartLabel
 * @param  {function} callback
 */
lava.prototype.getChart = function (chartLabel, callback) {
  var _ = require('underscore');

  if (typeof chartLabel != 'string') {
    throw this.errors.INVALID_LABEL(chartLabel);
  }

  if (typeof callback != 'function') {
    throw this.errors.INVALID_CALLBACK(callback);
  }

 // var chartTypes = Object.keys(this._charts);
  var chart = _.find(this._charts, this._.matches({label:chartLabel}), this);

  if (! chart) {
    throw this.errors.CHART_NOT_FOUND(chartLabel);
  } else {
    callback(chart);
  }
};

/**
 * Get the charts array and pass into the callback
 *
 * @param callback function
 */
lava.prototype.getCharts = function (callback) {
  if (typeof callback != 'function') {
    throw this.errors.INVALID_CALLBACK(callback);
  }

  callback(this._charts);
};

/**
 * Redraws all of the registered charts on screen.
 *
 * This method is attached to the window resize event with a 300ms debounce
 * to make the charts responsive to the browser resizing.
 */
lava.prototype.redrawCharts = function() {
  var _ = require('underscore');

  _.debounce(function() {
    _.each(this._charts, function (chart) {
      chart.redraw();
    });
  }.bind(this), 300);
};

/**
 * Retrieve a Dashboard from lava.js
 *
 * @param  {string}   label    Dashboard label.
 * @param  {Function} callback Callback function
 */
lava.prototype.getDashboard = function (label, callback) {
  if (typeof this._dashboards[label] === 'undefined') {
    throw this.errors.DASHBOARD_NOT_FOUND(label);
  }

  if (typeof callback !== 'function') {
    throw this.errors.INVALID_CALLBACK(callback);
  }

  var dashboard = this._dashboards[label];

  callback(dashboard);
};

/**
 * Load Google's jsapi and fire an event when ready.
 */
lava.prototype.loadJsapi = function() {
  var s = document.createElement('script');

  s.type = 'text/javascript';
  s.src = '//www.google.com/jsapi';
  s.onload = s.onreadystatechange = function (event) {
    event = event || window.event;

    if (event.type === "load" || (/loaded|complete/.test(this.readyState))) {
      this.onload = this.onreadystatechange = null;

      this.emit('jsapi:ready', window.google);
    }
  }.bind(this);

  document.head.appendChild(s);
};
