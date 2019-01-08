import React, { Component } from 'react';
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";
import ToDoAPI from "../utils/toDoApi"

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #30c5ff; */
  /* border: 4px solid #30c5ff; */
`;

class InputBox extends Component {
    state = {
        text: '',
        completed: false
    };

    saveToState = e => {
        console.log("SAVING TO STATE")
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        ToDoAPI.createToDo({
            text: this.state.text
        })
    }

    render(){
        return <StyledBox>
            <Input placeholder="ToDo" type="text" name="text" value={this.state.text} onChange={this.saveToState} />
            <Button secondary onClick={this.handleFormSubmit}>
              Add
            </Button>
          </StyledBox>;
    }
    
}

export default InputBox;