import { useState } from 'react';
import { supabase } from '../supabaseClient';

import { CATEGORIES } from '../data/config';
import { isFormValid, resetFormFields } from '../data/helpers';

export function NewFactForm({ setFacts, setShowForm }) {
  const [formData, setFormData] = useState({
    text: '',
    source: '',
    category: '',
  });
  const [isUploading, setIsUploading] = useState(false);
  const textLength = formData.text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (isFormValid(formData)) {
      setIsUploading(true);
      try {
        const { data: newFact, error } = await supabase
          .from('facts')
          .insert([
            {
              text: formData.text,
              source: formData.source,
              category: formData.category,
            },
          ])
          .select();

        setIsUploading(false);

        if (!error) {
          setFacts((facts) => [newFact[0], ...facts]);
          resetFormFields(setFormData);
          setShowForm(false);
        } else {
          alert('There was a problem adding the fact.');
        }
      } catch (err) {
        setIsUploading(false);
        alert('An unexpected error occurred.');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <form
      className='fact-form'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='text'
        placeholder='Write your fact here! 200 characters max.'
        value={formData.text}
        // onChange={(e) => setText(e.target.value)}
        onChange={handleInputChange}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type='text'
        name='source'
        placeholder='(http/https)://example.com/...'
        value={formData.source}
        onChange={handleInputChange}
        disabled={isUploading}
      />
      <select
        name='category'
        value={formData.category}
        onChange={handleInputChange}
        disabled={isUploading}
      >
        <option value=''>Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option
            key={cat.name}
            value={cat.name}
          >
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button
        className='btn btn-large'
        disabled={isUploading}
      >
        Post
      </button>
    </form>
  );
}
