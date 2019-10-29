import React from 'react';

import Bar from './Bar';
import RelativeBar from './RelativeBar';

const parentSize = { width: 50, height: 40 };

const props = {
  barWeight: 10,
  color: 'blue',
  maxValue: 100,
  value: 53,
  size: parentSize.width,
};

const propsRelative = {
  ...props,
  colors: ['blue', 'red'],
};

const svgWrapper = (bar) => (
  <svg width={parentSize.width} height={parentSize.height}>
    {bar}
  </svg>
);

describe('<Bar />', () => {
  it('renders without crashing', () => {
    shallow(svgWrapper(<Bar {...props} />));
  });

  it('renders its content', () => {
    const rendered = mount(svgWrapper(<Bar {...props} />));
    const bar = rendered.find('rect').at(0);
    expect(bar.prop('className')).toBe('vx-bar');
    // height for horizontal bar should be equal to barWeight
    expect(bar.prop('height')).toBe(10);
    expect(bar.prop('fill')).toBe('blue');
  });

  it('renders RelativeBar without crashing', () => {
    shallow(svgWrapper(<RelativeBar {...propsRelative} />));
  });

  it('renders RelativeBar content', () => {
    const rendered = mount(svgWrapper(<RelativeBar {...propsRelative} />));
    const bar = rendered.find('rect').at(0);
    expect(bar.prop('className')).toBe('vx-bar');
    // height for horizontal bar should be equal to barWeight
    expect(bar.prop('height')).toBe(10);
    expect(bar.prop('fill')).toBe('blue');

    const barRelative = rendered.find('rect').at(1);
    expect(barRelative.prop('className')).toBe('vx-bar');
    // height for horizontal bar should be equal to barWeight
    expect(barRelative.prop('height')).toBe(10);
    expect(barRelative.prop('fill')).toBe('red');
  });
});
