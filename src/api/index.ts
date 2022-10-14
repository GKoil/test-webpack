import { TableItem } from '../types/tableData.type';

class Service {
  getResource = async <T = unknown>(url: string) => {
    try {
      const response = await fetch(url, {});

      const responseContent: T = await response.json();

      return responseContent;
    } catch (error) {
      throw error.message;
    }
  };

  getTable() {
    return this.getResource<TableItem[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}

const service = new Service();

export default service;
