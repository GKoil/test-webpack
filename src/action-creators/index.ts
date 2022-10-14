import { ADD, EDIT_CELL } from '../action-types';
import { TableItem } from '../types/tableData.type';

export const addTableAction = (payload: TableItem[]) => ({
  type: ADD,
  payload,
});

export const editTableCellAction = (payload: {
  id: number;
  value: string | number;
}) => ({
  type: EDIT_CELL,
  payload,
});
