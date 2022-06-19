import React from 'react';
import Status from '../Status/Status';
import TableRow from '../TableRow/TableRow';
import './SenaraiRow.css';

function SenaraiRow({ senarai }) {
  return (
    <TableRow>
      <p>{senarai.date}</p>
      <p>{senarai.sourceFrom}</p>
      <p>{senarai.reporterName}</p>
      <p>{senarai.operatorName}</p>
      <p>{senarai.serialNo}</p>
      <p>{senarai.referenceNo}</p>
      <p>{senarai.category}</p>
      <Status text={senarai.status} />
    </TableRow>
  );
}

export default SenaraiRow;
