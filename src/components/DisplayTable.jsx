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
			let terrainItems;
			let filmItems;
			if(planet.terrain && planet.films) {
				const planetTerrain = planet.terrain.split(', ');
				terrainItems = planetTerrain.map(i => {
					return <div key={i}>{i}</div>;
				});
				filmItems = planet.films.map(i => {
					return <div key={i}>{i}</div>;
				});
			}

			return (
				<tr key={planet.name}>
					<td>{planet.name}</td>
					<td>{planet.population}</td>
					<td>{planet.diameter}</td>
					<td>{planet.rotation_period}</td>
					<td>{planet.orbital_period}</td>
					<td>{terrainItems || planet.terrain}</td>
					<td>{filmItems || planet.films}</td>
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
					      <th 
					      	scope="col" 
					      	id="name" 
					      	onClick={() => this.props.sortPlanets('name')}>
					      	NAME
					      </th>
					      <th 
					      	scope="col" 
					      	id="population" 
					      	onClick={() => this.props.sortPlanets('population')}>
					      	POPULATION
					      </th>
					      <th 
					      	scope="col" 
					      	id="diameter" 
					      	onClick={() => this.props.sortPlanets('diameter')}>
					      	DIAMETER
					      </th>
					      <th 
					      	scope="col" 
					      	id="rotation" 
					      	onClick={() => this.props.sortPlanets('rotation_period')}>
					      	ROTATION PERIOD
					      </th>
					      <th 
					      	scope="col" 
					      	id="orbit" 
					      	onClick={() => this.props.sortPlanets('orbital_period')}>
					      	ORBITAL PERIOD
					      </th>
					      <th 
					      	scope="col" 
					      	id="terrain">
					      	TERRAIN
					      </th>
					      <th 
					      	scope="col" 
					      	id="films">
					      	FILMS
					      </th>
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
