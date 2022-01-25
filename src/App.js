import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Components/Table.js';
import Header from './Components/Header';
import Footer from "./Components/Footer";
function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [loader,setLoader] =useState(true);

    useEffect(() => {
        axios.get(`/getmarketsummaries`)
            .then(res => {
                setData(res.data.result)
                setSearch(res.data.result)
                setLoader(false)
            }).catch(error => console.log("error caught"));

    }, []);
    
    function handleChange(e) {

        const val = e.target.value;

        if (val !== "") {
            let arr = []
            data.map(ele => {
                if (ele.MarketName.toLowerCase().includes(val.toLowerCase())) {
                    arr.push(ele);
                }
            })
            setSearch(arr)
        }
        else
            setSearch(data)
    }
    return (
        <div>
         <Header handleChange={handleChange}/>
            {loader?<p style={{textAlign:'center'}}><h3>Please wait while we are processing your request....</h3></p>:<Table data={search} />}
            <Footer/>
        </div>
    );
}
export default App;