import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PaginationControls from './PaginationControls';

it('renders without crashing', () => {
	shallow(<PaginationControls 
				handlePageChange={jest.fn()}
				currentPage={1} />
			);
});
