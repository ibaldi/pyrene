import React from 'react';
import moment from 'moment';
import { Banner, Loader } from 'pyrene';
import TimeSeriesBucketGraph from './TimeSeriesBucketGraph';
import { downloadedVolumes } from '../../examples/timeSeriesData';
import colorSchemes from '../../styles/colorSchemes';

const props = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  dataSeries: downloadedVolumes,
  description: 'Downloaded volume',
  from: moment('2019-10-01 00:00').valueOf(),
  lowerBound: moment('2018-10-01 00:00').valueOf(),
  minZoomRange: moment.duration({ minutes: 30 }).valueOf(),
  onZoom: () => {},
  title: 'Volume',
  timezone: 'Europe/Zurich',
  to: moment('2019-10-03 12:00').valueOf(),
  upperBound: moment('2020-10-01 00:00').valueOf(),
  yUnit: 'B',
  timeFormat: {
    tooltip: (d) => d,
    zoomTooltip: (d) => d,
  },
};

const props1 = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  dataSeries: { label: 'Volume', data: [] },
  description: 'Downloaded volume',
  from: moment('2019-10-01 00:00').valueOf(),
  loading: true,
  onZoom: () => {},
  timezone: 'Europe/Zurich',
  title: 'Volume',
  to: moment('2019-10-03 12:00').valueOf(),
  yUnit: 'B',
  timeFormat: {
    tooltip: (d) => d,
    zoomTooltip: (d) => d,
  },
};

const props2 = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  dataSeries: { label: 'Volume', data: [] },
  description: 'Downloaded volume',
  error: 'No data is found',
  from: moment('2019-10-01 00:00').valueOf(),
  loading: false,
  onZoom: () => {},
  timezone: 'Europe/Zurich',
  title: 'Volume',
  to: moment('2019-10-03 12:00').valueOf(),
  yUnit: 'B',
  timeFormat: {
    tooltip: (d) => d,
    zoomTooltip: (d) => d,
  },
};

// dataSeries: { label: 'Volume', data: [] },

describe('<TimeSeriesBucketGraph />', () => {
  it('renders without crashing', () => {
    shallow(<TimeSeriesBucketGraph {...props} />);
  });

  it('renders its content correctly', () => {
    const rendered = mount(<TimeSeriesBucketGraph {...props} />);

    // Header
    expect(rendered.contains(props.title)).toBe(true);
    expect(rendered.contains(props.description + ' in kB')).toBe(true);

    // Numerical Y-Axis
    const yAxis = rendered.find('.vx-axis-left');
    expect(yAxis.children().find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(yAxis.children().find('.vx-axis-tick').length).toBeGreaterThan(0);

    // Time X-Axis
    const xAxis = rendered.find('.vx-axis-bottom');
    expect(xAxis.children().find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(xAxis.children().find('.vx-axis-tick').length).toBeGreaterThan(0);

    // Bars
    expect(rendered.find('.vx-bar')).toHaveLength(downloadedVolumes.data.length);
    expect(rendered.find('.vx-bar').at(0).props().fill).toBe(colorSchemes.colorSchemeDefault.categorical[0]);

    // Tooltip
    const hoverArea = rendered.find('.hoverArea');
    hoverArea.simulate('mousemove');
    expect(rendered.find('.vx-tooltip-portal')).toHaveLength(1);
    hoverArea.simulate('mouseout');
    expect(rendered.find('.vx-tooltip-portal')).toHaveLength(0);
  });

  it('renders loading state correctly', () => {
    const rendered = mount(<TimeSeriesBucketGraph {...props1} />);

    expect(rendered.contains(props1.title)).toBe(true);
    expect(rendered.contains(props1.description)).toBe(true);
    expect(rendered.find('.vx-bar')).toHaveLength(0);
    expect(rendered.find(Loader).exists()).toBe(true);
  });

  it('renders error message correctly', () => {
    const rendered = mount(<TimeSeriesBucketGraph {...props2} />);

    expect(rendered.contains(props2.title)).toBe(true);
    expect(rendered.contains(props2.description)).toBe(true);
    expect(rendered.find('.vx-bar')).toHaveLength(0);
    expect(rendered.find(Banner).exists()).toBe(true);
  });
});
