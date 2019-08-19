import Image from '../components/Image'
import Navbar from '../components/Navbar'
import App from '../App'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Enzyme from 'enzyme';
import {shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
})

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
  <BrowserRouter>
  <Image />
  </BrowserRouter>,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
})


it('se renderea correctamente el componente Navbar', () => {  
  const component = shallow(<Navbar />);
  expect(toJson(component)).toMatchSnapshot();
});