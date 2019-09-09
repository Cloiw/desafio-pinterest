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

describe('<Image />', () => {
  let shallowComp;
  beforeEach(() => {
    const props = {
      key: 1,
      url: 'https://pixabay.com/get/57e8dd404c57a414f6da8c7dda79367d163fdaec5a526c48702973d4934ac35db0_1280.jpg',
    };

    shallowComp = shallow(<Image url={props.url} />);
  });

  test('deberia renderea 3imgs, save, dots e img', () => {
    const imgResult = shallowComp.find('img');
    expect(imgResult).toHaveLength(3);
  });

  test('deberia simular el evento hover y cambiar la clase', () => {
    shallowComp.find('.image-div').simulate('mouseEnter');
    const resultHover = shallowComp.find('.show-save-button');
    expect(resultHover).toHaveLength(1);
  });
});


describe('<Navbar/>', () => {
  let shallowComp;
  beforeEach(() => {
    shallowComp = shallow(<Navbar />);
  });

  test('deberia tener dos span', () => {
    const result = shallowComp.find('span');
    expect(result).toHaveLength(2);
  });
});

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
