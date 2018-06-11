import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
	shallow(<SearchBar 
				handleSearchInput={jest.fn()}
				handleNewSearch={jest.fn()}
				pendingSearch={''} />
			);
});
