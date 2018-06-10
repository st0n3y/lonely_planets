import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
	shallow(<App />);
});

it('renders the title and description', () => {
	const wrapper = shallow(<App />);
	const title = <h2>Lonely Planets</h2>;
	const description = <p>Data on the planets of Star Wars</p>;

	expect(wrapper.contains(title)).toEqual(true);
	expect(wrapper.contains(description)).toEqual(true);
});
