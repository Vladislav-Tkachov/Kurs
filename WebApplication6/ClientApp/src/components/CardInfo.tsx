import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import "./Card.css";
import CardDetails from './CardDetails';

type Props = {
    id: string
}
export class CardInfo extends React.Component<Props>{

    constructor(props: any){
        super(props)
    }

    render() {
        return (
            <CardDetails id={this.props.id} />
        )
    }
}
