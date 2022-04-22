
export const BasicTypes = () => {

  let firstName: string = 'Daniel';
  const age: number = 31;
  const isActive: boolean = false;

  const powers: string[] = [];

  return (
    <>
      <h3>Basic Types</h3>
      { firstName }, { age }, { (isActive) ? 'Active' : 'Inactive' }
      <br />
      { powers.join(', ')}
    </>
  )
}
