export function selectQueryString<T>(tableName: string, obj: T): string {
  let queryString = `SELECT * FROM ${tableName} WHERE`;

  const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);
  for (let i = 0; i < arrayValues.length; i++) {
    if (!arrayValues[i]) {
      arrayValues.splice(i, 1);
      arrayKeys.splice(i, 1);
      i -= 1;
    };
  };

  for (let i = 0; i < arrayKeys.length; i++) {
    queryString += ` ${arrayKeys[i]} = '${arrayValues[i]}'`;
    if(arrayValues[i + 1]) queryString += 'AND';
  };
  return queryString;
};
