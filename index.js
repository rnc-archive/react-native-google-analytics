import Event from './lib/hits/Event';
import Exception from './lib/hits/Exception';
import PageView from './lib/hits/PageView';
import ScreenView from './lib/hits/ScreenView';
import Social from './lib/hits/Social';
import Timing from './lib/hits/Timing';
import Transaction from './lib/hits/Transaction';
import Item from './lib/hits/Item';
import Analytics from './lib/Analytics';
import Experiment from './lib/Experiment';

export default {
  Hits: {
    Event,
    Exception,
    PageView,
    ScreenView,
    Social,
    Timing,
    Transaction,
    Item
  },
  Analytics,
  Experiment
};
