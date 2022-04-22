
interface Person {
  fullName: string;
  age: number;
  direction: Direction
}

interface Direction {
  country: string;
  houseNumber: number;
}

export const LiteralsObjects = () => {

  const person: Person = {
    fullName: 'Daniel Elías',
    age: 31,
    direction: {
      country: 'Chile',
      houseNumber: 123,
    }
  }

  return (
    <>
      <h3>Literals Objects</h3>
      { JSON.stringify( person, null, 2 ) }
    </>
  )
}
