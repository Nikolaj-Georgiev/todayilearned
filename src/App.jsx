import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { NewFactForm } from './components/NewFactForm';
import { CategoryFilter } from './components/CategoryFilter';
import { FactsList } from './components/FactsList';
import { Loader } from './components/Loader';
import { getFacts } from './services/getFacts';

function App() {
  // 1. Define state variable
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const fetchFacts = async () => {
      await getFacts(setFacts, setIsLoading, currentCategory);
    };

    fetchFacts();
  }, [currentCategory]);

  return (
    <>
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {/* 2.Use state variable */}
      {showForm ? (
        <NewFactForm
          setFacts={setFacts}
          setShowForm={setShowForm}
        />
      ) : null}

      <main className='main'>
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactsList
            facts={facts}
            setFacts={setFacts}
          />
        )}
      </main>
    </>
  );
}

export default App;
// function () {
//   async function getFacts() {
//     setIsLoading(true);

//     let query = supabase.from('facts').select('*');

//     if (currentCategory !== 'all')
//       query = query.eq('category', currentCategory);

//     const { data: facts, error } = await query
//       .order('votesInteresting', { ascending: false })
//       .limit(1000);

//     if (!error) setFacts(facts);
//     else alert('There was a problem getting data');
//     setIsLoading(false);
//   }
