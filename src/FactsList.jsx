import { Fact } from './Fact';

export function FactsList({ facts, setFacts }) {
  if (facts.length === 0) {
    return (
      <p className='message'>
        No facts for this category yet! Create the first one 😎✌
      </p>
    );
  }

  return (
    <section>
      <ul className='facts-list'>
        {facts.map((fact) => (
          <Fact
            key={fact.id}
            fact={fact}
            setFacts={setFacts}
          />
        ))}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
}
