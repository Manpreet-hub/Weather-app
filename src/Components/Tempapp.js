import React,{useState,useEffect} from 'react';

const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('Mumbai');

    useEffect(() => {
        const fetchApi=async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ff35f8965b5aa598cd3e3e536823bbad&units=metric`;
            const response= await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
        };
       fetchApi();
    },[search]);

    return(
        <>
       <div className="box">
           <div className="inputData">
           <input type="search" className="inputField" value={search}
           onChange={(event)=>{ 
                setSearch(event.target.value);
           }}/>
           </div>

           {!city?(
                   <p className="error-msg">Data not found</p>
               ):(
               <div>
                    <div className="info">
                <div className="location">
                <h1><i className="fas fa-street-view"></i>{search}</h1>
                </div>
                <h1 className="temp">{city.temp} °C</h1>
                <h3 className="tempmin-max">Min: {city.temp_min}°C  || Max: {city.temp_max}°C </h3>
            </div>
               </div>
               )
           }
         
       </div> 
        </>
    )
}

export default Tempapp;