import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
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
        case EMPLOYEE_SAVE_SUCCESS:
            return INTIAL_STATE;
        default:
            return state;
    }
};
