import Button from './Button'

/* const ButtonList = () => {
  const tenTimesText = () => {
    for (let i = 0; i < 10; i++) {
      render(<Button/>);
    }
  };

  return <button onClick={tenTimesText}>Tízszer</button>;
};
 */


const btnList = (props) => {
  let rows = []
  for (let i = 0; i < 10; i++) {
    rows.push(<Button text={props.text} key={i}/>)
    
  }

  return <div>{rows}</div>
}

export default btnList;
