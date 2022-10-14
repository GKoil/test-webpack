import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableItem } from './types/tableData.type';
import Table from './components/Table';
import service from './api';
import { addTableAction } from './action-creators';

const App = () => {
  const dispatch = useDispatch();
  const tableData = useSelector<{ tableData: TableItem[] }, TableItem[]>(
    state => state.tableData
  );

  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    setStatus('pending');
    service
      .getTable()
      .then(data => {
        setStatus('success');
        dispatch(addTableAction(data));
      })
      .catch(error => {
        setStatus('error');
      });
  }, []);

  return (
    <>
      {status === 'pending' && <div>spinner</div>}
      {status === 'success' && <Table itemsData={tableData} />}
      {status === 'error' && <div>error</div>}
    </>
  );
};

export default App;
