import { Binding } from "./Binding";
import { Drawable } from "./Drawable";
import { GoogleFactory } from "./google";
import { hasOwnProp, onGoogleReady } from "./lib";
import { ChartEvents } from "./types/chart";
import { DashboardSpec } from "./types/dashboard";

export class Dashboard extends Drawable {
  public bindings: Binding[];

  public needsBindings: boolean;

  /**
   * Create a new Dashboard
   *
   * @param {Object} payload payload object representing a Dashboard.
   */
  constructor(payload: DashboardSpec) {
    payload.type = "Dashboard";

    super(payload);

    this.needsBindings = true;
    this.bindings = payload.bindings;
  }

  async draw(): Promise<void> {
    if (hasOwnProp(this)("initialData")) {
      await this.processInitialData();
    }

    onGoogleReady(() => {
      this.googleChart = GoogleFactory("Dashboard", this.getContainer());

      // if (this.needsBindings) {
      this.attachBindings();
      // }

      Object.keys(this.events).forEach(event => {
        const e = event as ChartEvents;

        this.registerEventHandler(e, this.events[e]);
      });

      this.googleChart.draw(this.data);
    });
  }

  /**
   * Process and attach the bindings to the dashboard.
   *
   * @TODO: Needs to be modified and tested for the other types of bindings.
   */
  private attachBindings(): void {
    for (const binding of this.bindings) {
      const debug = this.debug.extend("Bindings");

      debug(binding.type, binding);

      this.googleChart.bind(...binding.toArray());
    }

    this.needsBindings = false;
  }
}
