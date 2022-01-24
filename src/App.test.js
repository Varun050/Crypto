import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
jest.mock('axios');
test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  // expect.toBe(true);
  const data={
    data:{
      hits:[
        {
          objectid:'1',
        }
      ]
    }
  };
  axios.get.mockImplementationOnce(()=>Promise.resolve(data));
});



describe('fetchdata',()=>{
  test('fetchdata scucces',async()=>{
    const data={
      data:{
        hits:[
          {
            objectid:'1',
          }
        ]
      }
    };
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
  })
});