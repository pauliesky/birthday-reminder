import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Main from './components/Main';
import List from './components/List';
import './css/Main.css'
import Data from './components/Data'
import Pagination from './components/Pagination';


function App() {

  const [people, setPeople] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * peoplePerPage;
  const indexOfFirstPost = indexOfLastPost - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPost, indexOfLastPost);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Navbar />
      <main>
        <section className='container'>
          <h3> {people.length} TiideLab Cohort 3 Fellows</h3>
          <List people = {currentPeople} />
          <div className='m-auto text-center w-100 bg-primary'>
            <Pagination peoplePerPage={peoplePerPage} totalPosts={people.length} paginate={paginate} />
          </div>
          <button onClick={() => setPeople([])}>Clear all</button>
        </section>
      </main>

    </div >
  );
}

export default App;
