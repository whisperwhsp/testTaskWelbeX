import React from 'react';
import FilterPanel from './components/FilterPanel';
import FilterHelper from './components/FilterPanel/FilterHelper';
import Pagination from './components/Pagination';
import Table from './components/Table';
import HttpTable from './http/HttpTable';

const App = () => {
  const [data, setData] = React.useState();
  const [filter, setFilter] = React.useState({ column: 'title', type: 'include', query: '' });
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const getPageCount = (_totalCount, _limit) => Math.ceil(_totalCount / _limit);

  const getData = async () => {
    const response = await HttpTable.getData(limit, page);
    const totalCount = response.headers['total-count-rows'];
    setTotalPages(getPageCount(totalCount, limit));
    setData(response.data);
  };

  const filteredData = React.useMemo(() => {
    if (!filter.query) return data;
    return FilterHelper.getFilteredArray(data, { ...filter });
  }, [data, filter]);

  React.useEffect(() => {
    getData();
  }, [page]);

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
          <>
            <Table
              data={filteredData}
              setData={setData}
            />
            <Pagination page={page} data={data} setPage={setPage} count={totalPages} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
