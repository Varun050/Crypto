import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Header from './Header.js'
function App() {

  const [data, setData] = useState([])
  const columns = [
    {
      name: "MarketName",
      selector: "MarketName",
      sortable: true
    },
    {
      name: "Volume",
      selector: "Volume",
      sortable: true
    },
    {
      name: "BaseVolume",
      selector: "BaseVolume",
      sortable: true,

    },
    {
      name: "OpenBuyOrders",
      selector: "OpenBuyOrders",
      sortable: true
    },
    {
      name: "OpenSellOrders",
      selector: "OpenSellOrders",
      sortable: true
    },
    {
      name: "Created",
      selector: "Created",
      sortable: true
    },

  ];

  useEffect(() => {
    axios.get(`/getmarketsummaries`)
      .then(res => {
        setData(res.data.result)
      }).catch(error => alert("error caught"));

  }, []);

  // const b= data.map((val)=>{
  //   for(let key in val){
  //     if(val[key]===null)
  //       val[key]=0
  //   }
  //   let c={...val}
  //   c.Volume=Number(c.Volume.toFixed(2));
  //   return c;
  // });

  // const tableData = {
  //   columns,
  //   data
  // };

  return (
    <div className="App">
      <Header/>
      {/* <DataTableExtensions {...tableData}> */}
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
      {/* </DataTableExtensions> */}
    </div>
  );
}

export default App;
