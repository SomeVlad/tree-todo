import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';

import {FormControl, Form} from 'react-bootstrap';
import {changeFilters} from '../redux/actions';

class Filter extends React.Component {

  componentWillMount() {
    const { filters, match, location, history, changeFilters } = this.props;
    if(location.search) {
      const filtersParsed = queryString.parse(location.search);
      Object.keys(filtersParsed).forEach(key => {
        if (key === 'showDone') {
          filtersParsed[key] = (filtersParsed[key] === "true")
        }
      });
      changeFilters(filtersParsed);
    } else {
      const filtersStringified = queryString.stringify(filters);
      history.push(`${match.url}?${filtersStringified}`)
    }
  }

  handleFilterChange = e => {
    const {changeFilters, history, filters, match} = this.props;
    const filter = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const newFilter = {
      ...filters,
      [filter]: value,
    };
    const newFilterStringified = queryString.stringify(newFilter);
    changeFilters(newFilter);
    history.push(`${match.url}?${newFilterStringified}`)
  };

  render() {
    const {
      filters: {
        showDone,
        searchQuery,
      }
    } = this.props;
    return (
      <Form
        style={{
          marginBottom: "20px",
          marginTop: "20px"
        }}
        inline
        className="pull-right"
        onSubmit={e => e.preventDefault()}
      >
        <label>
          <input
            type="checkbox"
            checked={showDone}
            name='showDone'
            onChange={this.handleFilterChange}
          />{" "}Show Done
        </label>
        <FormControl
          style={{marginLeft: "10px"}}
          type="text"
          name='searchQuery'
          value={searchQuery}
          onChange={this.handleFilterChange}
        />
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilters: (filter, value) => dispatch(changeFilters(filter, value)),
  }
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;