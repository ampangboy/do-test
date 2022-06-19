import React from 'react';
import TableCell from '../TableCell/TableCell';
import './TableRow.css';

/**
 *
 * @param {bool} isHeader set table row is header
 * @returns
 */
function TableRow({ isHeader, children }) {
  const header = isHeader ? 'tablerow_header' : '';

  return (
    <div className={`tablerow ${header}`}>
      {children.map((element) => (
        <TableCell>{element}</TableCell>
      ))}
    </div>
  );
}

export default TableRow;
