import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import './App.css';
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://www.breakingbadapi.com/api/characters');
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  },[]);
  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
