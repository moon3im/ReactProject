function Header(props){
    return (
      <header>
        <h1> {props.name} my first react app</h1>
        <p>Copyright 
          <span style={undefined}>@moon3im {props.year}</span> </p>
      </header>
    )
}

export default Header