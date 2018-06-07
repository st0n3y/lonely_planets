import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationControls extends Component { 
	render() {
		return (
			<div className="table-pagination">
		        <nav className="my-4 pt-2">
		            <ul className="pagination pagination-circle pg-grey mb-0">

		                <li className={`page-item clearfix d-none d-md-block ${this.props.currentPage === 1 ? 'disabled' : ''}`}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(1)}>First</a>
		                </li>

		                <li className={`page-item ${this.props.currentPage === 1 ? 'disabled' : ''}`}>
		                    <a className="page-link" aria-label="Previous" onClick={() => this.props.handlePageChange(this.props.currentPage - 1)}>
		                    <span aria-hidden="true">&laquo;</span>
		                    <span className="sr-only">Previous</span>
		                </a>
		                </li>
						
		                <li className={this.props.currentPage === 1 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(1)}>1</a>
		                </li>
		                <li className={this.props.currentPage === 2 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(2)}>2</a>
		                </li>
		                <li className={this.props.currentPage === 3 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(3)}>3</a>
		                </li>
		                <li className={this.props.currentPage === 4 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(4)}>4</a>
		                </li>
		                <li className={this.props.currentPage === 5 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(5)}>5</a>
		                </li>
		                <li className={this.props.currentPage === 6 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(6)}>6</a>
		                </li>
		                <li className={this.props.currentPage === 7 ? "page-item active" : "page-item"}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(7)}>7</a>
		                </li>

		                <li className={`page-item ${this.props.currentPage === 7 ? 'disabled' : ''}`}>
		                    <a className="page-link" aria-label="Next" onClick={() => this.props.handlePageChange(this.props.currentPage + 1)}>
		                    <span aria-hidden="true">&raquo;</span>
		                    <span className="sr-only">Next</span>
		                </a>
		                </li>

		                <li className={`page-item clearfix d-none d-md-block ${this.props.currentPage === 7 ? 'disabled' : ''}`}>
		                	<a className="page-link" onClick={() => this.props.handlePageChange(7)}>Last</a>
		                </li>

		            </ul>
		        </nav>
			</div>
		);
	}
}

PaginationControls.propTypes = {
	handlePageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
}

export default PaginationControls;
