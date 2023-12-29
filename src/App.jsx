import * as React from 'react'

// const title = "React!";

// App compnent - THE PARENT COMPONENT, Root or Entry Point that spans a tree of components below it
  const App = () => {
    const stories = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];

    const handleSearch = (event) => {
      console.log(event.target.value);
    }

    return (
    <div>
          <h1>My Hacker Stories</h1>
          <Search onSearch={handleSearch} />
          <hr />
          <List list={stories}/>  {/* <--- Passes stories to List()  */}
    </div>
    );
  };

// List component - Child of App component
const List = (props) => {
  console.log('List renders')
  return (
    <ul>
      {props.list.map((item) => (
          <Item key={item.objectID} item={item}/>  /* <--- Passes item to Item()  */
        ))}
    </ul>
  )
}

// Item component is a child of thje List() component
const Item = (props) => {
  console.log('Item renders')
  return(
    <li>
      <span>
      <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>
        &nbsp;{props.item.author}
      </span>
    </li>
  )
};

// Search component - Child of App component - refer to pg 50
const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };
console.log('Search renders')
return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default App