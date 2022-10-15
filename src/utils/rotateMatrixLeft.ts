function leftMatrixLeft<T>(array: T[][]): T[][] {
  return array[0].map((_, index) =>
    array.map(row => row[row.length - 1 - index])
  );
}

export default leftMatrixLeft;
