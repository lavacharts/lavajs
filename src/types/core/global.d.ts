import { Lavacharts } from "../";
import LavaJs from "../../LavaJs";
import { Google } from "../google";

declare global {
  interface Window {
    lava: LavaJs;
    LavaJs: LavaJs;
    google: Google;
    lavacharts?: Lavacharts;
  }
}
