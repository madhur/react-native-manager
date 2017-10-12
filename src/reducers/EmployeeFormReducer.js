import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';

const INTIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const { prop, value } = action.payload;
            return { ...state, [prop]: value };
        case EMPLOYEE_CREATE:
            return INTIAL_STATE;

        default:
            return state;
    }
};
