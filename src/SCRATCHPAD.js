/*************************************************************** */
import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios';

const Table = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://lq-time-tracking.firebaseio.com/user.json")
      .then(function(response) {
        setData(response.data);
      }).catch(function(error) {
        console.log(error);
      })
  }, []);

  const columns = [{
    id: 'Name',
    Header: 'Name',
    accessor: data.user
  }, {
    Header: 'Date',
    accessor: 'Date',
  }, {
    Header: 'Comment',
    accessor:'Comment' 
  }]

  return <ReactTable
    data={...data}
    columns={columns}
    pivotBy={ ['Date', 'Name']}
  />
}



function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }