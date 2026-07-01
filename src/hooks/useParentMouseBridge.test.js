import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import useParentMouseBridge from './useParentMouseBridge';

const BridgeHarness = () => {
  useParentMouseBridge();
  return null;
};

describe('useParentMouseBridge', () => {
  let container;
  let originalParent;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    originalParent = Object.getOwnPropertyDescriptor(window, 'parent');
  });

  afterEach(() => {
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    container.remove();
    Object.defineProperty(window, 'parent', originalParent);
  });

  it('sends one message for each press and release, then cleans up', () => {
    const postMessage = jest.fn();
    Object.defineProperty(window, 'parent', {
      configurable: true,
      value: { postMessage },
    });

    act(() => {
      ReactDOM.render(<BridgeHarness />, container);
    });
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

    expect(postMessage.mock.calls).toEqual([
      [{ type: 'mousedown' }, 'https://parent.example.com'],
      [{ type: 'mouseup' }, 'https://parent.example.com'],
    ]);

    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    expect(postMessage).toHaveBeenCalledTimes(2);
  });
});
