import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getBook, GetBooks } from '../../service/actions/book.action'

function ViewBook() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { books, isEdit } = useSelector(state => state.BookReducer)

    const handleClick = () => {
        dispatch(GetBooks())
    }

    const handleEdit = (id) => {
        dispatch(getBook(id))
    }

    const handleDelete = (id, de) => {
        dispatch(getBook(id, de))
    }

    useEffect(() => {
        handleClick()
    }, [])

    if (isEdit) {
        navigate("/editBook")
    } else {
        return (
            <>
                <Container>
                    <h1>
                        ViewBooks
                    </h1>
                    <br />

                    {
                        books !== null ?
                            <Table striped bordered hover className='text-center'>
                                <thead>
                                    <tr>
                                        <td> Title </td>
                                        <td> Author </td>
                                        <td> Action </td>
                                    </tr>
                                </thead>
                                {
                                    books.map((book) => {
                                        return (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {
                                                                book.title
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                book.author
                                                            }
                                                        </td>
                                                        <td>
                                                            <Button onClick={() => { handleEdit(book.id) }}>
                                                                Edit
                                                            </Button> || <Button variant='danger' onClick={() => { handleDelete(book.id, "delete") }} >
                                                                Delete
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        )
                                    })
                                }
                            </Table>
                            : null
                    }
                </Container>
            </>
        )
    }
}

export default ViewBook