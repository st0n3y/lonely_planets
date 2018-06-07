import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import PaginationControls from './PaginationControls';

class DisplayTable extends Component {

	handlePageChange = page => {
		this.props.handlePageChange(page);
	}

	render() {
		const planetRows = this.props.displayData.map(planet => {
			const terrain = planet.terrain;

			return (
				<tr key={planet.name}>
					<td>{planet.name}</td>
					<td>{planet.population}</td>
					<td>{planet.diameter}</td>
					<td>{planet.rotation_period}</td>
					<td>{planet.orbital_period}</td>
					<td>{terrain}</td>
					<td>{planet.films}</td>
				</tr>
			);
		});

		return (
			<div className="table-container">
				<div>
					<div id="table-topper"></div>
					<Table id="data-table">
					  <thead id="table-head">
					    <tr>
					      <th scope="col" onClick={() => this.props.sortPlanets('name')}>NAME</th>
					      <th scope="col" onClick={() => this.props.sortPlanets('population')}>POPULATION</th>
					      <th scope="col" onClick={() => this.props.sortPlanets('diameter')}>DIAMETER</th>
					      <th scope="col" onClick={() => this.props.sortPlanets('rotation_period')}>ROTATION PERIOD</th>
					      <th scope="col" onClick={() => this.props.sortPlanets('orbit_period')}>ORBITAL PERIOD</th>
					      <th scope="col">TERRAIN</th>
					      <th scope="col">FILMS</th>
					    </tr>
					  </thead>
					  <tbody>
					  	{ planetRows }
					  </tbody>
					</Table>
					<div id="table-footer"></div>
				</div>
				<PaginationControls
					handlePageChange={this.props.handlePageChange}
					currentPage={this.props.currentPage} />	
		    </div>		
		);
	}
}

DisplayTable.propTypes = {
	displayData: PropTypes.array.isRequired,
	handlePageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	sortPlanets: PropTypes.func.isRequired,
}

export default DisplayTable;
