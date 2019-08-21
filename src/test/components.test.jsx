import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Image />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('se renderea correctamente el componente Navbar', () => {
  const component = shallow(<Navbar />);
  expect(toJson(component)).toMatchSnapshot();
});
