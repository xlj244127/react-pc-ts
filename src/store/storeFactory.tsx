import React, { createContext, useContext, useReducer, useMemo } from "react";

interface Context {
    state: any,
    dispatch?: React.Dispatch<any> | undefined
}

export const createStore = (reducer: (state: any, action: any) => object, defaultState: object, dispatchAction: any) => {
    const Context = createContext<Context>({ state: defaultState });
    const withStore = (Comp: React.FC) => (props: any) => {
        const [state, dispatch] = useReducer(reducer, defaultState);
        const value = useMemo(() => ({ state, dispatch }), [state]);
        return <Context.Provider value={value}><Comp {...props}/></Context.Provider>
    }

    const useStore = () => {
        const { state } = useContext(Context);
        return state;
    }

    const useAction = () => {
        const { dispatch } = useContext(Context);
        return dispatchAction(dispatch);
    }

    return { withStore, useStore, useAction};
};
