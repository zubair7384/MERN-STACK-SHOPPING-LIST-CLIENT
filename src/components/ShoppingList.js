import React, {useEffect} from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'


const ShoppingList = (props) => {

    const { items } = props.item

   useEffect (() =>{
        props.getItems()
    },[])



    return (
        <Container>
            <ListGroup>
                <TransitionGroup>
                    {items.map((item) => (
                        <CSSTransition classNames="fade" timeout={500} key={item._id}>
                            <ListGroupItem>
                                <Button className="remove-btn"
                                    color="danger"
                                    sz='sm'
                                    onClick={() => props.deleteItem(item._id)}
                                >
                                    &times;
                                    </Button>
                                {item.name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}


const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {deleteItem,getItems})(ShoppingList)
