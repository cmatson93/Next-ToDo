import React, { Component } from 'react';
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";
import API from "../utils/toDoApi";

const StyledList = styled.div`
    display: flex;
    justify-content: center;
`;

class List extends Component {
    state = {
        toDos: []
    };

    componentDidMount(){
        console.log("Component Mounted");
        API.getToDos()
            .then(res => {
                console.log("Data: ", res.data)
                this.setState({ toDos: res.data });
            })
            .catch(err => {
                throw err;
            })
    }

    render() {
        return <StyledList>
            <h1>LIST</h1>
            {this.state.toDos.map((toDo, i) => <ul key={i}>{toDo.text}</ul>)}
        </StyledList>;
    }

}

export default List;