import * as React from 'react';
import { connect } from 'react-redux';
import { CardProduct, TypeCard } from '../Entity';
import { Card } from './Card';
import "./Card.css";
import { actionCreators } from '../store/CardStore';
import { ApplicationState } from '../store';

type OwnProps = {
    type: TypeCard   
}

type StateProps = {
    cards: CardProduct[];
    isLoading: boolean;
}
type State = {
    
}
type CardsProps =
    OwnProps & typeof actionCreators & StateProps;

class Cards extends React.Component<CardsProps, State> {

    componentDidMount() {
        this.props.requestCards(this.props.type);
    }

    constructor(props: any) { 
        super(props)
    }
    public render() {
        //if (this.props.isLoading)
        //    return;

        return (
            <div className="catalog">
                {this.props.cards !== undefined && this.props.cards.length != 0 ? this.props.cards.map(_ => <Card card={_} />) : this.props.type}
            </div>
        );
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        cards: state.cards.cards,
        isLoading: state.cards.isLoading
    };
}

export default connect(mapStateToProps, actionCreators)(Cards)
