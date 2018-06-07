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
			planet.terrain = planet.terrain.split(', ');
			const terrainItems = planet.terrain.map(i => {
				return <div key={i}>{i}</div>;
			});
			const filmItems = planet.films.map(i => {
				return <div key={i}>{i}</div>;
			});

			return (
				<tr key={planet.name}>
					<td>{planet.name}</td>
					<td>{planet.population}</td>
					<td>{planet.diameter}</td>
					<td>{planet.rotation_period}</td>
					<td>{planet.orbital_period}</td>
					<td>{terrainItems}</td>
					<td>{filmItems}</td>
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
					      <th scope="col" onClick={() => this.props.sortPlanets('orbital_period')}>ORBITAL PERIOD</th>
					      <th scope="col" id="terrain">TERRAIN</th>
					      <th scope="col" id="films">FILMS</th>
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
