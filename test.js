function insert(tableName, param = {}) {

  let sql = '';
  let columnNames = '(';
  let values = '(';

  for (let key in param) {
    columnNames += (key + ',');
    values += (param[key] + ',');
  }

  columnNames = columnNames.substr(0, columnNames.length - 1);
  columnNames += ')';

  values = values.substr(0, values.length - 1);
  values += ')';

  sql = `INSERT INTO ${tableName} ${columnNames} VALUES${values}`;

  return sql;
}


console.log(insert('image', {id: 1, name: 'xxx'}))
