import React, { useEffect, useState } from 'react';
import './SenaraiTable.css';
import SenaraiHeader from '../SenaraiHeader/SenaraiHeader';
import SenaraiRow from '../SenaraiRow/SenaraiRow';
import TableNavigation from '../TableNavigation/TableNavigation';
import { getSenaraiData } from '../../apis';

function SenaraiTable() {
  const [senarai, setSenarai] = useState([]);

  useEffect(() => {
    setSenarai(getSenaraiData());
  }, []);

  return (
    <>
      <SenaraiHeader />
      {senarai.map((s) => {
        return <SenaraiRow senarai={s} />;
      })}
      <TableNavigation />
    </>
  );
}

export default SenaraiTable;
