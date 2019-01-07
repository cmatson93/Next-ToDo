import App, { Container } from 'next/app'
import Page from '../components/Page'

export default class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            toDos: ["eat", "play", "study"]
        };
    }

    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}