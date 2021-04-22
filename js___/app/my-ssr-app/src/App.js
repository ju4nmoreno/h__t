import React from 'react';
import Home from './Home';

const MESSAGES = {
  NAME: 'The end of the f...ing world',
  DESCRIPTION:
    "The series is based on Forsman's mini-comics The End of the Fucking World, which were collected into a book in 2013. Series creator Jonathan Entwistle contacted him about making a film, and a short was made in 2014. Instead, an eight-part serial was commissioned, with filming beginning in April 2017. It was written by Charlie Covell, and episodes were directed by Entwistle and Lucy Tcherniak. In August 2018, the programme was renewed for a second series, which premiered on Channel 4 on 4 November 2019, after which all eight episodes were released on All 4, and internationally on Netflix the next day. Covell stated before the second series' release that she does not intend to produce a third series for the programme.",
};

export default () => (
  <>
    <Home name={MESSAGES.NAME} description={MESSAGES.DESCRIPTION} />
  </>
);
