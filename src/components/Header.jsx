export function Header({ showForm, setShowForm }) {
  const appTitle = 'Facts';

  return (
    <header className='header'>
      <div className='logo'>
        <img
          src='logo.png'
          height='68'
          width='68'
          alt='Today I Learned Logo'
        />
        <h1>{appTitle}</h1>
      </div>
      {/* 3. Update state variable */}
      <button
        className='btn btn-large btn-open'
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  );
}
