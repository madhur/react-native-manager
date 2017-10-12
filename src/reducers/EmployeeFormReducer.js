import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INTIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const { prop, value } = action.payload;
            return { ...state, [prop]: value };

        default:
            return state;
    }
};
