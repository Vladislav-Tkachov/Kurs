import axios from 'axios';
import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
import { CardProduct, TypeCard } from '../Entity';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CardsState {
    cards: CardProduct[];
    isLoading?: boolean;
}


// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestWeatherForecastsAction {
    type: 'REQUEST_CARDS';
}

interface ReceiveCardsAction {
    type: 'RECEIVE_CARDS';
    cards: CardProduct[];
}
interface ReceiveCardAction {
    type: 'RECEIVE_CARD';
    card: CardProduct;
}


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestWeatherForecastsAction | ReceiveCardsAction | ReceiveCardAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCards: (type: TypeCard): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        axios.post(`api/site`, type as number)
            .then(res => {
                dispatch({ type: 'RECEIVE_CARDS', cards: res.data });
                });

            dispatch({ type: 'REQUEST_CARDS' });
    },

    GetCard: (id: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const url = `api/site/getcard/` + id;
        axios.get(url)
            .then(res => {
                dispatch({ type: 'RECEIVE_CARD', card: res.data });
            });

        dispatch({ type: 'REQUEST_CARDS' });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: CardsState = { cards: [], isLoading: false };

export const reducer: Reducer<CardsState> = (state: CardsState | undefined, incomingAction: Action): CardsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_CARDS':
            return {
                cards: state.cards,
                isLoading: false
            };
        case 'RECEIVE_CARDS':
            return {
                cards: action.cards,
                isLoading: true
            };
        case 'RECEIVE_CARD':
            return {
                cards: [action.card],
                isLoading: true
            };
    }

    return state;
};
