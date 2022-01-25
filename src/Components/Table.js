import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import {columns} from'../Constants/DisplayColumn';
function Table(props) {

  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={props.data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default Table;
