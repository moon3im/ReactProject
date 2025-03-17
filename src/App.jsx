
import './App.css'

function Header(props){
    return (
      <header>
        <h1> {props.name} my first react app</h1>
        <p>Copyright 
          <span style={undefined}>@moon3im {props.year}</span> </p>
      </header>
    )
}

const items = [
  "cofee",
  "pizza",
  "cake",
  "soup"
];

const dishObject = items.map((dish , i) => ({
    id : i,
    title : dish ,
}));

function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish) => <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>)}      
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()}> </Header>
      <Main dishes = {dishObject} />
    </div>
  );
}


export default App
