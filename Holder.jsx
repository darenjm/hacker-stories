function Holder () {
<div>
  <ul>
      {list.map(function (item) {
          return <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>&nbsp;
            </span>
            <span>{item.author}</span>&nbsp;
            <span># of comments{item.num_comments}</span>&nbsp;
            <span> Points: {item.points}</span>
            </li>;
      })}
    </ul>

      <h1>{welcome.greeting} {welcome.title}</h1>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" value="search..."/> 

        <form action="/submit-form" method="post">
          <h1>{welcome.greeting}  {welcome.title}</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>
            <br></br>
            <input type="submit" value="Submit"/>
        </form> 
  </div>
}


const App = () => (
  <div>
    <h1>Hello React!</h1>
  </div>
)

const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) 
  {
    return number * number;
  }
)

console.log(exponentialNumbers);


// List component - Child of App component
const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>
              &nbsp;{item.author}
            </span>
          </li>
        )
      })
      }
    </ul>
  )
}

// This is a JavaScript object called welcome
const welcome = {
  greeting: "Hello",
  title: "React"
}


// List component - Child of App component
const List = (props) => {
  return (
    <ul>
      {props.list.map((list) => (
          <li key={list.objectID}>
            <span>
              <a href={list.url}>{list.title}</a>
            </span>
            <span>
              &nbsp;{list.author}
            </span>
          </li>
        )
        )
      }
    </ul>
  )
}


// Search component - Child of App component - refer to pg 50
const Search = () => {

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}