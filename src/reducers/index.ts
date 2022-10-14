import { ADD, EDIT_CELL } from '../action-types';
import { TableItem } from '../types/tableData.type';

const initialState: { tableData: TableItem[] } = {
  tableData: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tableData: action.payload,
      };

    case EDIT_CELL:
      const itemIndex = state.tableData.findIndex(
        item => item.id === action.payload.id
      );
      const element = {
        ...state.tableData[itemIndex],
        title: action.payload.value,
      };
      const processedTableData = [...state.tableData];
      processedTableData.splice(itemIndex, 1, element);

      return { ...state, tableData: processedTableData };

    default:
      return { ...state };
  }
};

export default reducer;
