import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static getData = async () => {
    const response = await axios.get(`${BASE_URL}/api/table`);
    return response.data;
  };
}

export default HttpTable;
