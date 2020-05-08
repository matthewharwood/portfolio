
import {NavigationBar} from './navigation-bar'
import { RunningHeader } from "./running_header";
import { autoHydrate } from "../utils/auto_hydrate";
import { NavigationItem } from "./navigation/item";
import {Polymorph} from './polymorph';
import {DateCounter} from './post-footer/date-counter';
import { HeaderSpan } from './header-span'

export const COMPONENT_MAP = {
  DateCounter,
  HeaderSpan,
  NavigationBar,
  NavigationItem,
  Polymorph,
  RunningHeader,
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}

export { AH };
