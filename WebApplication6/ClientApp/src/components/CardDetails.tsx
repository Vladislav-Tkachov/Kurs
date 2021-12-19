import * as React from 'react';
import "./Card.css";
import { CardProduct } from "../Entity"
import { actionCreators } from '../store/CardStore';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import './CardDetails.css'
import './Slider.css'
import BtnSlider from './BtnSlider';

type OwnProps = {
    id: string;
}

type StateProps = {
    cards: CardProduct[];
    isLoading: boolean;
}

type State = {
    slideIndex: number;
    dataSlider: JSX.Element[];
}

type Props = OwnProps & typeof actionCreators & StateProps;


class CardDetails extends React.Component<Props, State>{

    constructor(props: any) {
        super(props)
        this.state = {
            slideIndex: 1,
            dataSlider: []
        }
    }

    componentDidMount() {
        let card = this.props.cards.find(_ => _.id === this.props.id);
        if (card === undefined) {
            this.props.GetCard(this.props.id);
        }
    }

    private nextSlide = () => {
        if (this.state.slideIndex !== this.state.dataSlider.length) {
            this.setState({ slideIndex: this.state.slideIndex + 1})
        }
        else if (this.state.slideIndex === this.state.dataSlider.length) {
            this.setState({ slideIndex: 1})
        }
    }

    private prevSlide = () => {
        if (this.state.slideIndex !== 1) {
            this.setState({ slideIndex: this.state.slideIndex - 1 })
        }
        else if (this.state.slideIndex === 1) {
            this.setState({ slideIndex: this.state.dataSlider.length })
        }
    }

    private moveDot = (index: number) => {
        this.setState({ slideIndex: index })
    }

    render() {
        const card = this.props.cards.find(_ => _.id === this.props.id);

        if (this.state.dataSlider.length === 0 && card !== undefined) {
            let images = card.images.map(_ => _);
            this.setState({ slideIndex: 0, dataSlider: images.map(_ => <img src={"../../../Images/" + card.type + "/" + card.id + "/" + _.path} />) });
        }
        //if (card !== undefined) {

        //    const image = card.images.map(_ => !_.main ? <img className="Image" src={"../../../Images/" + card!.type + "/" + card!.id + "/" + _.path} /> : <div></div>
        //        )

        //    return <div className="Details">
        //        <div className="Gallery">{image}</div>
        //        <div className="Info">
        //            <h1 className="Title">{card.title}</h1>
        //            <pre className="Descryption">{card.description}</pre>
        //        </div>
        //    </div>

        //}
        return (
            <div className="Details">
                {card !== undefined ? <div className="Info">
                    <h1 className="Title">{card.title}</h1>
                    <pre className="Descryption">{card.description}</pre>
                </div> : <></>}
                <div className="container-slider">
                    {this.state.dataSlider.map((obj, index) => {
                        return (
                            <div
                                className={this.state.slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                {obj}
                            </div>
                        )
                    })}
                    <BtnSlider moveSlide={this.nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={this.prevSlide} direction={"prev"} />

                    <div className="container-dots">
                        {Array.from({ length: this.state.dataSlider.length }).map((item, index) => (
                            <div
                                onClick={() => this.moveDot(index + 1)}
                                className={this.state.slideIndex === index + 1 ? "dot active" : "dot"}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state: ApplicationState) => {
    return {
        cards: state.cards.cards,
        isLoading: state.cards.isLoading
    };
}

export default connect(mapStateToProps, actionCreators)(CardDetails)