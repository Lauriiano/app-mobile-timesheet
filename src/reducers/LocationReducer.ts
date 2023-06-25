import { reducerAtionType } from "../interfaces/reducerActionType";

export type horaLocationType = {
    horaLocation: string;
};

export const LocationInitialState: horaLocationType = {
    horaLocation: "",
};

export const horaLocationReducer = (
    state: horaLocationType,
    action: reducerAtionType
) => {
    switch (action.type) {
        case "CHANGE_HOUR":
            return { state, horaLocation: action.payload.horaLocation };
    }

    return state;
};
