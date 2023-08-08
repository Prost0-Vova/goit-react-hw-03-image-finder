import { Component } from "react";
import propTypes from 'prop-types';
import {Modal, Overlay, Image} from './Modal.styled'

export default class Modall extends Component {
    static propTypes = {
        onClose: propTypes.func,
        url: propTypes.string
    }

    

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModal)
        document.addEventListener('click', this.handleCloseModal)

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModal)
        document.removeEventListener('click', this.handleCloseModal)  
    }

    handleCloseModal = (e) => {
        if (e.code === 'Escape' || e.target === e.currentTarget) {
            this.props.onClose();
        }
       }

    render() {
        return (
        <>
                <Overlay>
                    <Modal>
                    <Image src={this.props.url} alt=""/>
                </Modal>
            </Overlay>
        </>
    )
    }
    
}