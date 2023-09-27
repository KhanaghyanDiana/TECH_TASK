import * as selectors from './selectors';
import * as actions from './/actions'
import {timeLine} from "./timeLine.slice";

export const timeLineActions = {
    ...timeLine.actions,
    ...actions
};

export const timeLineSelectors = {
    ...selectors,
};
