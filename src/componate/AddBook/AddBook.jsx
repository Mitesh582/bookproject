import { v4 as uuid } from 'uuid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddBook } from '../../service/actions/book.action';
import { Container, Form, Button} from 'react-bootstrap'

function Book() {

    const [initial, setinitial] = useState({
        title: '',
        author: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setinitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const uid = uuid();
        const data = { ...initial, id: uid.slice(0, 6) }
        dispatch(AddBook(data))

        setinitial({
            title: '',
            author: ''
        })
    }
    return (
        <>
            <Container className='p-3'>
                
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <h1>Add Book</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title :</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name='title' value={initial.title} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" placeholder="Enter author name" name='author' value={initial.author} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Book;