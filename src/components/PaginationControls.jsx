import React from 'react';
import PropTypes from 'prop-types';

const PaginationControls = props => 
	<div className="table-pagination">
        <nav className="my-4 pt-2">
            <ul className="pagination-controls">

                <li className={`pagination-item clearfix d-none d-md-block ${props.currentPage === 1 ? 'disabled' : ''}`}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(1)}>First</a>
                </li>

                <li className={`pagination-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
                    <a 
                    	className="pagination-link" 
                    	aria-label="Previous" 
                    	onClick={() => props.handlePageChange(props.currentPage - 1)}>
                    <span aria-hidden="true"><i className="fas fa-caret-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                </li>
				
                <li className={props.currentPage === 1 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(1)}>1</a>
                </li>
                <li className={props.currentPage === 2 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(2)}>2</a>
                </li>
                <li className={props.currentPage === 3 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(3)}>3</a>
                </li>
                <li className={props.currentPage === 4 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(4)}>4</a>
                </li>
                <li className={props.currentPage === 5 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(5)}>5</a>
                </li>
                <li className={props.currentPage === 6 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(6)}>6</a>
                </li>
                <li className={props.currentPage === 7 ? "pagination-item active" : "pagination-item"}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(7)}>7</a>
                </li>

                <li className={`pagination-item ${props.currentPage === 7 ? 'disabled' : ''}`}>
                    <a 
                    	className="pagination-link" 
                    	aria-label="Next" 
                    	onClick={() => props.handlePageChange(props.currentPage + 1)}>
                    <span aria-hidden="true"><i className="fas fa-caret-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
                </li>

                <li className={`pagination-item clearfix d-none d-md-block ${props.currentPage === 7 ? 'disabled' : ''}`}>
                	<a className="pagination-link" onClick={() => props.handlePageChange(7)}>Last</a>
                </li>

            </ul>
        </nav>
	</div>;

PaginationControls.propTypes = {
	handlePageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
}

export default PaginationControls;
