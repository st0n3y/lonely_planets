import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import DisplayTable from './components/DisplayTable';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    pendingSearch: "",
    planetsToDisplay: [],
    currentPage: 1,
    sortOrder: 'descending',
  }

  films = {
      'https://swapi.co/api/films/1/': 'A New Hope',
      'https://swapi.co/api/films/2/': 'The Empire Strikes Back',
      'https://swapi.co/api/films/3/': 'Return of the Jedi',
      'https://swapi.co/api/films/4/': 'The Phantom Menace',
      'https://swapi.co/api/films/5/': 'Attack of the Clones',
      'https://swapi.co/api/films/6/': 'Revenge of the Sith',
      'https://swapi.co/api/films/7/': 'The Force Awakens'
  }

  componentDidMount = () => {
    this.requestData();
  }

  requestData = (requestedPage) => {
    let slug = '';
    if(requestedPage) slug = `?page=${requestedPage}`;
    if(this.state.pendingSearch && slug === '') slug = `?search=${this.state.pendingSearch}`;

    fetch(`https://swapi.co/api/planets/${slug}`)
      .then(res => res.json())
      .then(data => this.formatPlanetObjects(data.results))
      .then(processedData => {
        this.setState({
          planetsToDisplay: processedData
        });
      })
      .catch(err => console.error("There was a problem", err.message));
  }

  handleSearchInput = e => {
    if(/^[a-zA-Z\s]*$/.test(e.target.value)) { // Only allows letters of the English alphabet and spaces
      this.setState({
        pendingSearch: e.target.value
      });
    }
  }

  handleNewSearch = e => {
    e.preventDefault();
    
    this.requestData();
    this.setState({
      pendingSearch: ""
    });
  }

  handlePageChange = (page) => {
    if(page !== this.state.currentPage) {
      this.requestData(page);
      this.setState({
        currentPage: page
      });
    }
  }

  formatPlanetObjects = data => {
    const processedData = data.map(planet => {
      const filmTitles = planet.films.map(film => {
        return this.films[film];
      });

      return {
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        terrain: planet.terrain,
        films: filmTitles
      }
    });

    return Promise.resolve(processedData);
  }

  sortPlanets = attribute => {
    const sortedPlanets = this.state.planetsToDisplay.sort((a, b) => {
      let attributeA = a[attribute];
      let attributeB = b[attribute];

      if(attributeA === 'unknown') attributeA = 0;
      if(attributeB === 'unknown') attributeB = 0;

      if(attribute === 'name') { 
        attributeA.toUpperCase();
        attributeB.toUpperCase();

        let comparison = 0;
        if (attributeA > attributeB) {
          comparison = 1;
        } else if (attributeA < attributeB) {
          comparison = -1;
        }

        if(this.state.sortOrder === 'descending') {
        this.setState({
          sortOrder: 'ascending'
        });
          return comparison;
        } else {
          this.setState({
            sortOrder: 'descending'
          });
          return comparison * -1;
        }
      }

      if(this.state.sortOrder === 'descending') {
        this.setState({
          sortOrder: 'ascending'
        });
        // return comparison;
        return attributeA - attributeB;
      } else {
        this.setState({
          sortOrder: 'descending'
        });
        // return comparison * -1;
        return attributeB - attributeA;
      }
    });
    this.setState({
      planetsToDisplay: sortedPlanets
    });  
  }

  render() {
    return (
      <div className="main-container">
        <header id="header">
          <h2>Lonely Planets</h2>
          <p>Data on the planets of Star Wars</p>
        </header>

        <SearchBar 
          handleSearchInput={this.handleSearchInput}
          handleNewSearch={this.handleNewSearch}
          pendingSearch={this.state.pendingSearch} />

        <DisplayTable
          displayData={this.state.planetsToDisplay}
          handlePageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
          sortPlanets={this.sortPlanets} />
      </div>
    );
  }
}

export default App;
