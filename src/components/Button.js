export default function Button(props) {
  console.log('Button run');
  return <button onClick={props.onClick}>{props.content}</button>;
}
