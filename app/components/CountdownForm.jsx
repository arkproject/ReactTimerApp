import React, { PropTypes } from 'react';

export class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(e) {
    e.preventDefault();
     const strSecond = this.refs.secondRef.value;
      console.log('input count', $('input').length);
     if (strSecond.match(/^[0-9]*$/)) {
       this.refs.secondRef.value = '';
       this.props.onSetCountdown(parseInt(strSecond, 10));
     }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='countdown-form' >
          <input
type="text" ref='secondRef'
            placeholder='Inserisci tempo in secondi'
          />
          <button className='button expanded'>Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
};
