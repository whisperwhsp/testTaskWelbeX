import React from 'react';
import FilterPanel from './components/FilterPanel';
import Table from './components/Table';

const App = () => {
  const [column, setColumn] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('');
  const [valueFilter, setValueFilter] = React.useState('');

  const handleSetColumn = (event) => setColumn(event.target.value);
  const handleSetTypeFilter = (event) => setTypeFilter(event.target.value);
  const handleSetValueFilter = (event) => setValueFilter(event.target.value);

  const resetFilter = () => {
    setColumn('');
    setTypeFilter('');
    setValueFilter('');
  };

  React.useEffect(() => {
    console.log(column);
  }, [column]);

  return (
    <div className="App">
      <div className="my-3 container-fluid">
        <div className="mb-3 row align-items-center">
          <FilterPanel
            column={column}
            typeFilter={typeFilter}
            valueFilter={valueFilter}
            handleSetColumn={handleSetColumn}
            handleSetTypeFilter={handleSetTypeFilter}
            handleSetValueFilter={handleSetValueFilter}
            resetFilter={resetFilter}
          />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default App;
