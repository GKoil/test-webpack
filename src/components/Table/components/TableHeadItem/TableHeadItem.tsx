import React from 'react';
import styles from './TableHeadItem.module.css';

type TableHeadItemType = {
  value: string;
  onClickSortUp: () => void;
  onClickSortDown: () => void;
};

const TableHeadItem = React.memo(
  ({ value, onClickSortUp, onClickSortDown }: TableHeadItemType) => {
    return (
      <th className={styles.cell}>
        <span>{value}</span>
        <button className={styles.button} onClick={onClickSortUp} type='button'>
          🔽
        </button>
        <button
          className={styles.button}
          onClick={onClickSortDown}
          type='button'
        >
          🔼
        </button>
      </th>
    );
  }
);

export default TableHeadItem;
