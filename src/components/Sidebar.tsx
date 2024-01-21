import React from 'react';
import { Burger } from '../icons';
import '../styles/Sidebar.scss';

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
  rows: number;
  columns: number;
  setRows: (value: number) => void;
  setColumns: (value: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  toggleSidebar,
  rows,
  columns,
  setRows,
  setColumns,
}) => {
  return (
    <div className={'sidebar'}>
      <Burger onClick={toggleSidebar} />
      <input className='input' data-testid="rows-input" type="number" min="1" max="10" value={rows} onChange={(e) => setRows(Number(e.target.value))} />
      <input className='input' data-testid="columns-input" type="number" min="1" max="10" value={columns} onChange={(e) => setColumns(Number(e.target.value))} />
    </div>
  );
};

export default Sidebar;
