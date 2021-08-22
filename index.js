console.log(tableTo(20));
function tableTo(to, from = 1) {
  let wholeTable = [];

  for (let index = from; index < to + 1; index++) {
    const table = getTable(index);
    wholeTable.push(table);
  }
  return wholeTable;
}

// console.log(getTable(2));
function getTable(num) {
  let table = [];
  const tableArray = getTableArray(num);

  tableArray.forEach(function (item, index) {
    const tableItem = `${num} x ${index + 1} = ${item}`;
    table.push(tableItem);
  });

  return table;
}

// console.log(getTableArray(2));
function getTableArray(num = 1) {
  /**
   * RESOLVE: test input can be converted into a number.
   */
  let tableArray = [];

  for (let i = 1; i < 11; i++) {
    const result = num * i;

    tableArray.push(result);
  }
  return tableArray;
}

