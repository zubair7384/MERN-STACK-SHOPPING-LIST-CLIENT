import React, { useState } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input } from 'reactstrap';
import { connect } from "react-redux"
import { addItem } from "../actions/itemActions"


const ItemModal = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const toggle = () => setModal(!modal);

    const onSubmit = (e) => {
        e.preventDefault()

        const newItem = { 
            name: name
        }
        props.addItem(newItem)
        
        toggle()
    }


    return (
        <Container>
            <Button style={{ margin: "2rem 0" }} color="dark" onClick={toggle}>Add Item</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">
                                Add Item
                            </Label>
                            <Input
                                type="text"
                                name='name'
                                id="item"
                                placeholder="Add shopping item"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={onSubmit}>Add now</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);