import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import { CountdownForm } from 'CountdownForm';

describe('CountdownForm', () => {
  it('shuold exist', () => {
    expect(CountdownForm).toExist();
  });

  it ('should call onSetCountdown if valid second entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.secondRef.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });
  it ('should not call onSetCountdown if invalid second entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.secondRef.value = '109bb';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
