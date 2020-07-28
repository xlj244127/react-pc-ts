import { createStore } from "./storeFactory";
import { appReducer, defaultState } from "./reducer";
import { dispatchAction } from "./action";

let { withStore, useStore, useAction } = createStore(appReducer, defaultState, dispatchAction);


export {
    withStore,
    useStore,
    useAction
};