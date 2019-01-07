import React, { Component } from 'react';
import Nav from './Nav'
import styled, { createGlobalStyle } from "styled-components";
import Meta from './Meta'

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        background-color: #6F6866;
    }
    
`;

class Page extends Component {
    render() {
        return <div>
                <Meta />
                <GlobalStyle />
                <Nav />
                <div>{this.props.children}</div>
          </div>;
    }
}

export default Page;