import React from 'react';
import HeaderCell from '../HeaderCell/HeaderCell';
import TableRow from '../TableRow/TableRow';
import './SenaraiHeader.css';

function SenaraiHeader() {
  return (
    <TableRow isHeader>
      <HeaderCell text="Tarikh" />
      <HeaderCell text="Sumber" />
      <HeaderCell text="Nama" />
      <HeaderCell text="Operator" />
      <HeaderCell text="No Siri" />
      <HeaderCell text="No Rujukan Fail" />
      <HeaderCell text="Ketegori" />
      <HeaderCell text="Status" />
    </TableRow>
  );
}

export default SenaraiHeader;
