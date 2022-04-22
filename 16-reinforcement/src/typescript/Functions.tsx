
export const Functions = () => {

  const add = (a: number, b: number):number => {
    return a + b;
  }

  return (
    <>
      <h3>Functions</h3>
      <span>The result is: { add(1, 5) }</span>
    </>
  )
}
