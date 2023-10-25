import { useState } from 'react';
import { IPerson } from '@services/types';
import CardsService from '@services/CardsService';
import PersonCard from '@components/Card/PersonCard';
import './Search.scss';

const CARDS_SERVICE = new CardsService();

export default function Search() {
  const [input, setInput] = useState('');
  const [people, setPeople] = useState<IPerson[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { results } = await CARDS_SERVICE.getCards(input);
    setPeople([...results]);
  };

  const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          placeholder="enter character name ..."
          type="text"
          onInput={inputValue}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      <div className="person-cards">
        {people.length > 0 ? (
          people.map((item) => <PersonCard key={item.name} person={item} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  );
}
