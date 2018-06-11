import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DisplayTable from './DisplayTable';

it('renders without crashing', () => {
	shallow(<DisplayTable 
				displayData={[]}
				handlePageChange={jest.fn()}
				currentPage={1} 
				sortPlanets={jest.fn()} />
			);
});
