import React, { useState } from 'react';
import logo from '../img/tiidelab.jpg';
import '../css/Navbar.css';
import Data from '../components/Data';
import List from '../components/List';

function Navbar() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState(Data);

  const filteredPeople = search.length === 0 ? [0] :
    people.filter(people => people.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <nav>
        <img src={logo} alt='logo'></img>
        <div>
          <input
            type='text'
            placeholder='Search'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <List people={filteredPeople} /> */}
        <p> Self-Reliant</p>
      </nav>
    </div>
  )
}
export default Navbar
