import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';

const SearchBar = props => 
	<div className="search-bar">
		<Form className="form-inline" onSubmit={props.handleNewSearch}>
			<div className="input-group">
		      	<div className="input-group-prepend">
		        	<span className="input-group-text" id="basic-addon1">
		        		<i className="fas fa-search"></i>
		        	</span>
		      	</div>
		      	<Input 
		      		className="form-control"
					id="search-box"
					type="text" 
					name="search" 
					placeholder="search" 
					onChange={props.handleSearchInput}
					value={props.pendingSearch} />
		    </div>
		</Form>
	</div>;

SearchBar.propTypes = {
	handleSearchInput: PropTypes.func.isRequired,
	handleNewSearch: PropTypes.func.isRequired,
	pendingSearch: PropTypes.string.isRequired
}

export default SearchBar;
