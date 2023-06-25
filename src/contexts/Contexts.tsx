import React, { createContext, useReducer } from "react";

import {
    horaLocationType,
    LocationInitialState,
    horaLocationReducer,
} from "../reducers/LocationReducer";
import { reducerAtionType } from "../interfaces/reducerActionType";

type initialStateType = {
    horaLocation: horaLocationType;
};

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
};

const initialContextState = {
    horaLocation: LocationInitialState,
};

export const Context = createContext<ContextType>({
    state: initialContextState,
    dispatch: () => null,
});

interface Props {
    children: React.ReactNode;
}

const mainReducer = (state: initialStateType, action: reducerAtionType) => ({
    horaLocation: horaLocationReducer(state.horaLocation, action),
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialContextState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
