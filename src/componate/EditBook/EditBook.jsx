import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateBook } from '../../service/actions/book.action';
import { Container, Form, Button} from 'react-bootstrap'

function EditBook() {

    const { book } = useSelector(state => state.BookReducer)
    const [initial, setinitial] = useState(book)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setinitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(UpdateBook(initial))

        setinitial({
            title: '',
            author: ''
        })
    }

    if(book === null){
        navigate("/")
    } else {
        return (
            <>
            <Container className='p-3'>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <h1>Edit Book</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title :</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={initial.title} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" placeholder="Enter author name" value={initial.author} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Container>
            </>
        )
    }
}

export default EditBook;