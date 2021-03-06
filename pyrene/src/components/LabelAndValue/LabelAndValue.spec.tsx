import React from 'react';
import { shallow } from 'enzyme';

import LabelAndValue, { LabelAndValueProps } from './LabelAndValue';

const props = {
  label: 'someLabel',
  value: 'somePath',
};

const propsTiny: LabelAndValueProps = {
  ...props,
  size: 'tiny',
};

const propsLarge: LabelAndValueProps = {
  ...props,
  size: 'large',
};

describe('<LabelAndValue />', () => {
  it('renders without crashing', () => {
    shallow(<LabelAndValue {...props} />);
  });

  it('renders the label', () => {
    const rendered = shallow(<LabelAndValue {...props} />);
    expect(rendered.contains(props.label)).toBe(true);
  });

  it('renders the value', () => {
    const rendered = shallow(<LabelAndValue {...props} />);
    expect(rendered.contains(props.value)).toBe(true);
  });

  it('renders tiny size', () => {
    const rendered = shallow(<LabelAndValue {...propsTiny} />);
    expect(rendered.find('.label-and-value-tiny .value')).toHaveLength(1);
  });

  it('renders large size', () => {
    const rendered = shallow(<LabelAndValue {...propsLarge} />);
    expect(rendered.find('.label-and-value-large .value')).toHaveLength(1);
  });

  it('renders a neutral badge', () => {
    const rendered = shallow(<LabelAndValue {...props} />);
    const valueClassName = rendered.find('.value').prop('className');
    expect(valueClassName).toContain('type-neutral');
  });
});
