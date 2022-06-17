import React from 'react';
import FilterPanel from './components/FilterPanel';
import Table from './components/Table';
import HttpTable from './http/HttpTable';

const App = () => {
  const [data, setData] = React.useState();
  const [filter, setFilter] = React.useState({
    column: '',
    type: '',
    query: '',
  });

  const getData = async () => {
    const response = await HttpTable.getData();
    setData(response);
  };

  const filteredData = React.useMemo(() => {
    if (!filter.query) return data;
    return data.filter((row) => {
      if (typeof row[filter.column] === 'number') {
        return row[filter.column].toString().includes(filter.query);
      }
      return row[filter.column].toLowerCase().includes(filter.query);
    });
  }, [filter.query, filter.type, data]);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="my-3 container-fluid">
        <div className="mb-3 row align-items-center">
          <FilterPanel
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        {!filteredData ? (
          <p>загрузка данных...</p>
        ) : (
          <Table
            data={filteredData}
            setData={setData}
          />
        )}

      </div>
    </div>
  );
};

export default App;
