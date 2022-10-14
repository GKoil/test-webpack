import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTableCellAction } from '../../../../action-creators';
import styles from './TableItem.module.css';

const DOUBLE_CLICK = 2;

type TableCellType = {
  value: string | number;
  id: number;
};

const TableCell = React.memo(({ value, id }: TableCellType) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [valueCell, setValueCell] = useState(value);

  const handleEdit = (e: React.MouseEvent) => {
    if (e.detail !== DOUBLE_CLICK) {
      return;
    }

    setIsEdit(true);
  };

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValueCell(target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    valueCell: string | number
  ) => {
    e.preventDefault();

    dispatch(editTableCellAction({ id, value: valueCell }));
    setIsEdit(false);
  };

  return isEdit ? (
    <td className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={e => handleSubmit(e, id, valueCell)}
        action=''
      >
        <input
          className={styles.formInput}
          placeholder='data'
          onChange={e => handleOnChange(e)}
          type='text'
          value={valueCell}
        />
      </form>
    </td>
  ) : (
    <td onClick={e => handleEdit(e)}>
      <span className={styles.text}>{valueCell}</span>
    </td>
  );
});

export default TableCell;
