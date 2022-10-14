import React, { useState, useEffect } from 'react';
import { TableItem } from '../../types/tableData.type';
import TableCell from './components/TableItem';
import groupBy from '../../utils/groupBy';
import TableHeadItem from './components/TableHeadItem';
import styles from './Table.module.css';

type TableType = {
  itemsData: TableItem[];
};

const Table = ({ itemsData }: TableType) => {
  const [body, setBody] = useState<TableItem[][]>();

  const groupByColumns = groupBy(itemsData, 'userId');
  const tableValues = Object.values(groupByColumns);
  // TODO: Вынести в отдельную функцию
  const processedBody = tableValues[0].map((val, index) =>
    tableValues.map(row => row[row.length - 1 - index])
  );

  useEffect(() => {
    setBody(processedBody);
  }, [itemsData]);

  const sortUp = React.useCallback(
    (id: number) => {
      const sorted = processedBody.sort((a, b) =>
        a[id - 1].title < b[id - 1].title ? -1 : 1
      );

      setBody(sorted);
    },
    [processedBody]
  );

  const sortDown = React.useCallback(
    (id: number) => {
      const sorted = processedBody.sort((a, b) =>
        a[id - 1].title > b[id - 1].title ? -1 : 1
      );

      setBody(sorted);
    },
    [processedBody]
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(groupByColumns).map(item => (
            <TableHeadItem
              onClickSortUp={() => sortUp(Number(item))}
              onClickSortDown={() => sortDown(Number(item))}
              key={item}
              value={item}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {body &&
          body.map((item, index) => {
            return (
              <tr key={index}>
                {item.map(({ title, id }) => (
                  <TableCell key={id} id={id} value={title} />
                ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
