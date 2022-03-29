import React from 'react';
import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({name:e.target.name, value: e.target.value})
    console.log(e.taget.name);
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>Search form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleChange}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
