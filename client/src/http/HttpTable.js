import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static getData = async (limit, page) => {
    const response = await axios.get(`${BASE_URL}/api/table`, {
      params: {
        limit,
        page,
      },
    });
    return response;
  };
}

export default HttpTable;
