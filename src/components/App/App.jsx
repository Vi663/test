import React, { useState } from 'react';
import { fetchCard } from "../../services/cardsAPI";
import { CardItem } from "../CardItem/CardItem";
import { CardList } from "../CardList/CardList";

function App() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const fetchCards = async () => { 
    try {
      const data = await fetchCard();
      if (data.success === true) {
        setStatus('resolved')
        setCards(data.users)
      } else {
        setError(data.message)
        setStatus('rejected')
      }
    } catch (err) {
      console.log(error);
    } finally {
      // this.scrollDown();
    }
  }

  fetchCards()
  return (
    <div className="App">
      <CardList>
          <CardItem response={cards}/>
          </CardList>
    </div>
  );
}

export default App;
