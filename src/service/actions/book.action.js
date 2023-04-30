import {get, ref, remove, set, update } from "firebase/database"
import { Database } from "../../componate/Firebase/Firebase"
import { ADD_BOOK_SUCCESS, ADD_BOOK_FAIL, SINGLE_RECORD, UPDATE_BOOK } from "../constant/actionType"

const AddBookSuccess = (data) => {
    return {
        type: ADD_BOOK_SUCCESS,
        payload: data
    }
}

const AddBookFail = (err) => {
    return {
        type: ADD_BOOK_FAIL,
        payload: err
    }
}

const SingleRecord = (data) => {
    return {
        type: SINGLE_RECORD,
        payload: data
    }
}

const editBook = () => {
    return {
        type: UPDATE_BOOK,

    }
}

export const AddBook = (data) => {
    return dispatch => {
        set(ref(Database, 'books/'+data.id), data).then(() => {
            dispatch(GetBooks(data))
        }).catch((err) => {
            dispatch(AddBookFail(err))
        })
    }
}

export const GetBooks = () => {
    return dispatch => {
        get(ref(Database, 'books/')).then((res) => {
            const data = res.val()
            if(data !== null) {
                const newData = Object.keys(data).map((d) => {
                    return {
                        id : d,
                        ...data[d]
                    }
                })
                dispatch(AddBookSuccess(newData))
            } else {
                const newData = []
                dispatch(AddBookSuccess(newData))
            }
            // console.log(newData);
        })
    }
}

export const getBook = (id, de) => {
    return dispatch => {
        get(ref(Database, `books/${id}`)).then((res) => {
            const singleBook = res.val()
            if (de === "delete") {
                dispatch(DeleteBook(id))
            } else {
                dispatch(SingleRecord(singleBook))
            }
        }).catch((err) => {
            console.log("error", err);
        })
    }
}

export const UpdateBook = (data) => {
    return dispatch => {
        update(ref(Database, `books/${data.id}`), data).then(() => {
            dispatch(editBook())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}

export const DeleteBook = (id) => {
    return dispatch => {
        remove(ref(Database, `books/${id}`)).then(() => {
            console.log("delete success");
            dispatch(GetBooks())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}