import React from 'react';
import ReactDOM  from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
// import TestUtils from 'react-addons-test-utils';

import { Controls } from 'Controls';

describe('Controls', () => {
  it('shuold exist', () => {
    expect(Controls).toExist();
  });
  describe('render',() => {
  it ('should render pause when started', () => {
    let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
    let $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Pause)');

    expect($pauseButton.length).toBe(1);
  });
  it ('should render pause when paused', () => {
    let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
    let $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Start)');

    expect($pauseButton.length).toBe(1);
  });
  });
});
