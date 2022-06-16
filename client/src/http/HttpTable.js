import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static getSomeRows = async (quantity) => {
    await axios.get(`${BASE_URL}/api/table/`, { quantity });
  };
}

export default HttpTable;
