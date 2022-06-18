class FilterHelper {
  static getFilteredArray(array, { column, type, query }) {
    if (type === 'over') {
      return array.filter((el) => {
        if (typeof el[column] === 'number') return el[column] > Number(query);
        return el[column].toLowerCase().includes(query);
      });
    }

    if (type === 'less') {
      return array.filter((el) => {
        if (typeof el[column] === 'number') return el[column] < Number(query);
        return el[column].toLowerCase().includes(query);
      });
    }

    if (type === 'equals') {
      return array.filter((el) => {
        if (typeof el[column] === 'number') return el[column] === Number(query);
        return el[column].toLowerCase().includes(query);
      });
    }

    if (type === 'include') {
      return array.filter((el) => {
        if (typeof el[column] === 'number') return el[column].toString().includes(query);
        return el[column].toLowerCase().includes(query);
      });
    }
    return array;
  }
}

export default FilterHelper;
