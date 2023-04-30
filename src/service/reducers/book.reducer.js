import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS, SINGLE_RECORD, UPDATE_BOOK } from "../constant/actionType";

const initialState = {
    books: [],
    book: null,
    error: null,
    isEdit: false
}

const BookReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                books: action.payload,
                error: null,
                isEdit: false
            }
            break;

        case ADD_BOOK_FAIL:
            return {
                ...state,
                error: action.payload,
                isEdit: false
            }

            break;

        case SINGLE_RECORD:
            return {
                ...state,
                book: action.payload,
                error: null,
                isEdit: true
            }
            break;

        case UPDATE_BOOK:
            return {
                ...state,
                book: null,
                isEdit: false
            }
            break;

        default:
            return state;
            break;
    }
}

export default BookReducer;
