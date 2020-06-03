import {h} from 'preact';
import {Summary} from './';

export default {
  title: 'Summary'
};

const FIXTURE = {
  number: '00',
  heading: 'Summary',
  text: 'The agency AKQA and their client Nike Jordan worked together to complete dozens of champaign webpages. Nike ran the majority of the creative process with their in-house copywriters, photographers, and creative directors.  AKQA was the production muscle, bring together all the creative assets into a www.nike.com hosted webpage.  Both Nike and AKQA did great work together; however, AKQA’s goal was to have more creative ownership.  Unfortunatly for AKQA this ownership was seemingly impossible.  The process between AKQA and Nike was fragemented, we were given hard deadlines, short production times, and low budgets.  All of which, created a bottleneck that essentially blocked any progress towards more creative ownership. We had a mission to fix this fragemented process by bridging the the communication gap between Client Nike and Agency AKQA.',
  videos: [
    {poster: 'sample.jpg', title: 'hello title'},
    {poster: 'sample.jpg', title: 'hello title'}
  ]
};

export const Main = () => {
  return (<Summary {...FIXTURE} />)
};