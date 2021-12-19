import * as React from 'react';
import "./Slider.css";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";
import { connect } from 'react-redux';

type Props = {
    direction: string;
    moveSlide: () => void;
}

class BtnSlider extends React.Component<Props>{

    render() {
        return (
            <button
                onClick={this.props.moveSlide}
                className={this.props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
            >
                <img src={this.props.direction === "next" ? rightArrow : leftArrow} />
            </button>
        );
    }
}
export default connect()(BtnSlider);