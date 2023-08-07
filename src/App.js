import { useEffect, useState } from 'react';
import supabase from './supabase';
import './style.css';
import { Header } from './Header';
import { NewFactForm } from './NewFactForm';
import { CategoryFilter } from './CategoryFilter';
import { FactsList } from './FactsList';

function App() {
  // 1. Define state variable
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from('facts').select('*');

      if (currentCategory !== 'all') query = query.eq('category', currentCategory);

      const { data: facts, error } = await query
        .order('votesInteresting', { ascending: false })
        .limit(1000);

      if (!error) setFacts(facts);
      else alert('There was a problem getting data');
      setIsLoading(false);
    }
    getFacts();

  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {/* 2.Use state variable */}
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <FactsList facts={facts} setFacts={setFacts} />}

      </main>
    </>
  );
}

function Loader() {
  return (<p className='message'>Loading...</p>);
}

export const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

export default App;