import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

const mock = {
  name: 'APP',
  links: [
    {
      name: 'Colombia',
      path: '/gif/colombia',
    },
    {
      name: 'car',
      path: '/gif/car',
    },
    {
      name: 'bike',
      path: '/gif/bike',
    },
    {
      nam: 'sleep',
      path: '/gif/sleep',
    },
  ],
};

function App() {
  const { name, links } = mock;
  return (
    <div className="App">
      <section className="App-content">
        <h1>{name}</h1>
        <nav>
          {links.map((link, index) => {
            const key = `link-${index}`;
            return (
              <Link key={key} to={link.path}>
                {link.name}{' '}
              </Link>
            );
          })}
        </nav>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
