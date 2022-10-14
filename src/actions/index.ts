import { ADD, EDIT_CELL } from '../action-types';
import { TableItem } from '../types/tableData.type';

const add = (tableData: TableItem[]) => {
  return {
    type: ADD,
    payload: tableData,
  };
};

const edit = (cell: { id: number; value: string | number }) => {
  return {
    type: EDIT_CELL,
    payload: cell,
  };
};

export { add, edit };
