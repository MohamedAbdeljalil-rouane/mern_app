import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from 'uuid';



class ShoppingList extends Component {

    state = {
        items: [
            { id: uuidv4(), name: "Eggs" },
            { id: uuidv4(), name: "Milk" },
            { id: uuidv4(), name: "Steak" },
            { id: uuidv4(), name: "Water" }
        ]
    }


    render() {
        const { items } = this.state;
        console.log(items);
        return <Container>
            <Button color="dark" style={{ marginBottom: "2rm" }}
                onClick={() => {
                    const name = prompt("Enter Item")
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuidv4(), name: name }]
                        }));
                    }
                }
                }>
                Add Item
            </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: this.state.items.filter(item => item.id != id)
                                        }))
                                    }

                                    }>

                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    }

}

export default ShoppingList;