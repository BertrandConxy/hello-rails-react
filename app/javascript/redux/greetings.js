const LOAD_GREETING = 'hello-rails-react/greetings/LOAD_GREETING'

const initialState = {

}

export const setGreetings = (payload) => ({
    type: LOAD_GREETING,
    payload,
});

export const loadGreetings = () => async (dispatch) => {
    const result = await fetch("http://localhost:3000/api/v1/greetings");
    const data =  await result.json();
    dispatch(setGreetings(data));
};

const greetingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GREETING:
            return action.payload;
        default:
            return state;
    }
};

export default greetingsReducer;