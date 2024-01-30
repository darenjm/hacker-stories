import * as React from 'react';
import './App.css'
import Button from './Button';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};


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

  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => 
  story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const [count, setCount] = React.useState(0); 
    //  ^^ does [count, ] set the name used in the curley brackets after the button? expalin what is this [count, setCount]
    //  setCount is a function that is used to update the count variable
    const handleClick = () => {
      setCount(count + 1);
    }

    const [isOpen, setOpen] = React.useState(false); 

    const [itsOpen, setsOpen] = React.useState(false); 

    const doClick = () => {
      setOpen(!isOpen);
    }

    const showClick = () => {
      setsOpen(!itsOpen);
    }

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
        >
      <strong>Search:</strong>
      </InputWithLabel>
      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      <hr />
      <List list={searchedStories} />

      <button 
        type="button"
        className="button"
        >Click Me</button> <br></br> 

      <button 
        type="button"
        className="button" 
        onClick={handleClick}>
        Plus one per click
      </button>&nbsp;
       {count}
        <br></br>

       <button 
        type="button"
        className="button" 
        onClick={doClick}>
        Show content
      </button>&nbsp;
      {isOpen && <div>Content</div>}
      <br></br>

      <Button
        onClick={handleClick}>
        Toggle
        </Button>&nbsp;
      {count}
      <br></br>

      <Button
        onClick={showClick}>
          Show me
        </Button>&nbsp;
        {itsOpen && <div>More Content</div>}

    </div>
  );
};



const InputWithLabel = ({ 
  id, 
  label, 
  value, 
  type = 'text',
  onInputChange,
  isFocused,  
  children 
  }) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input 
      id={id} 
      type={type} 
      value={value} 
      autoFocus={isFocused}
      onChange={onInputChange}
      />
  </>
);

const Search = ({ search, onSearch }) => (
      <React.Fragment>
        <label htmlFor="search">Search: </label>
        <input 
        id="search" 
        type="text" 
        // value={search} 
        onChange={onSearch} />
      </React.Fragment>
    );

const List = ({ list }) => (
  <div>
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  </div>
);

const Item = ( { item } ) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>&nbsp;
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);



export default App;
