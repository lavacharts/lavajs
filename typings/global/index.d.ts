import LavaJs from "../../src";

declare global {
  interface Window {
    lava: LavaJs;
    google: google.Google;
  }
}
