import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";
import { CardProduct, TypeCard } from "../Entity"

type Props = {
    card: CardProduct;
}

export class Card extends React.Component<Props>{

    constructor(props: any){
        super(props)
    }

    render() {
        const { card } = this.props;
        var picture = "";
        if (card.images.length > 0) {
            picture = card.images.find(_ => _.main)!.path;
        }
        return (
            <Link to={TypeCard[card.type].toString() + "/" + card.id} className="card">
                <img src={"../../../Images/" + card.type + "/" + card.id + "/" + picture} className="ImageCard" alt="Image" />
                <div className="header">{card.title}</div>
            </Link>
        )
    }
}
