import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static getData = async () => {
    await axios.get(`${BASE_URL}/api/gettabledata`);
  };
}

export default HttpTable;
