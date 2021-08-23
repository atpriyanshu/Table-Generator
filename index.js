console.log(tableTo(20));
function tableTo(to, from = 1) {
  if(typeof to !== "number" || typeof from !== "number") {return null;}
  let wholeTable = [];

  for (let index = from; index < to + 1; index++) {
    const table = getTable(index);
    wholeTable.push(table);
  }
  return wholeTable;
}

// console.log(getTable(2));
function getTable(num) {
  if(typeof num !== "number") {return null;}
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
  if(typeof num !== "number") {return null;}
  let tableArray = [];

  for (let i = 1; i < 11; i++) {
    const result = num * i;

    tableArray.push(result);
  }
  return tableArray;
}

