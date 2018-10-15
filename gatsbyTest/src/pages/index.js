import React from 'react'
import Modal from 'react-modal';
import 'animate.css';
import img from './img/background.png';
import close from './img/close.png';
import button from './img/button.png';
import name from './img/name.png';


const customStyles = {
  content: {
    position: 'absolute',
    top: '20%',
    left: '40px',
    right: '40px',
    bottom: '20%',
    backgroundColor: 'red'
    // backgroundImage: `url(${img}) `,
    // backgroundSize:'100% 100%',
  },
};

const styles = {
  closeImg: {
    right: 0,
    width: '30px',
    position: 'relative',
  },
  inputView:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formView:{
    position: 'absolute',
    top: '26%',
    display: 'flex',
    flexDirection: 'column',
  },
  inputItemView: {
    marginBottom: '3%',
    backgroundImage: `url(${name}) `,
    backgroundSize: 'cover',
    display: 'flex',
    height: '32px',
  }
}


class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.beforeCloseModal = this.beforeCloseModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  beforeCloseModal() {
    // references are now sync'd and can be accessed.
    console.log('I am in beforeCloseModal')
    this.subtitle.style = 'zoomOut';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          // onBeforeCloseModal={this.beforeCloseModal}
          onRequestClose={this.closeModal}
          className="animated zoomIn"
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button style={{
            right: '0',
            position: 'absolute',
            top: '0',
          }} onClick={this.closeModal}>
            <img src={close} style={styles.closeImg} />
          </button>
          <div style={styles.inputView}>
            <img src={img}></img>
            <form style={styles.formView}>
              <div style={styles.inputItemView}>
                <input style={{ backgroundColor: 'transparent', border: 'none',textIndent:'35%' }} />
              </div>
              <div style={styles.inputItemView}>
                <input style={{ backgroundColor: 'transparent', border: 'none',textIndent:'35%' }} />
              </div>
            </form>
            <button style={{
              position: 'absolute',
              top: '45%',
            }} onClick={this.closeModal}>
              <img src={button} style={{ right: 0, width: '40%' }} />
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}




export default IndexPage
