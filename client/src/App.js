import React from 'react';
import FilterPanel from './components/FilterPanel';
import Table from './components/Table';
import mock from './components/Table/mock.json';

const App = () => {
  const [columnFilter, setColumnFilter] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('');
  const [valueFilter, setValueFilter] = React.useState('');

  const data = mock.rows;

  const handleSetColumnFilter = (event) => setColumnFilter(event.target.value);
  const handleSetTypeFilter = (event) => setTypeFilter(event.target.value);
  const handleSetValueFilter = (event) => setValueFilter(event.target.value);
  const resetFilter = () => {
    setColumnFilter('');
    setTypeFilter('');
    setValueFilter('');
  };

  return (
    <div className="App">
      <div className="my-3 container-fluid">
        <div className="mb-3 row align-items-center">
          <FilterPanel
            column={columnFilter}
            typeFilter={typeFilter}
            valueFilter={valueFilter}
            handleSetColumnFilter={handleSetColumnFilter}
            handleSetTypeFilter={handleSetTypeFilter}
            handleSetValueFilter={handleSetValueFilter}
            resetFilter={resetFilter}
          />
        </div>
        <Table
          data={data}
        />
      </div>
    </div>
  );
};

export default App;
