import './App.css';
import data from './data.json';
import { Rating } from '@mui/material'
import { BsArrowDown } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  // eslint-disable-next-line
  const [degree, setDegree] = useState([95, 130, 165, 200, 235, 270, 305, 340, 375, 410, 445, 480, 515,550]);


  const handlePreviousRotation = () =>
  {
    const interviewer = document.querySelectorAll('.interviewer');
    interviewer.forEach((curr, index) => 
    {
      degree[index] = degree[index] - 35;
      if (degree[index] < 95) {
        curr.style.transform = `rotate(+${degree[index] + 350}deg) translateX(300px)`;
      }
      curr.style.transform = `rotate(+${degree[index]}deg) translateX(300px)`;
    });
  }


  const handleNextRotation = () => 
  {
    const interviewer = document.querySelectorAll('.interviewer');
    interviewer.forEach((curr, index) => 
    {
      degree[index] = degree[index] + 35;
      // if (degree[index] >= 360) degree[index] = 200;
      curr.style.transform = `rotate(+${degree[index]}deg) translateX(300px)`;
    });
  }

  
  const userRotationPrev = () => 
  {
    const profile = document.querySelector('.interviewer-info');
    profile.style.transition = 'all 0.3s ease-in-out';
    profile.style.transform = 'translate(-50%, 50%) rotate(35deg) scale(0.7)';
    profile.classList.add('fade');
    setTimeout(() => 
    {
      profile.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
    }, 500);
  }


  const userRotationNext = () => 
  {
    const profile = document.querySelector('.interviewer-info');
    profile.style.transition ='all 0.3s ease-in-out';
    profile.style.transform ='translate(-50%, 50%) rotate(35deg) scale(0.7)';
    profile.classList.add('fade');
    setTimeout(() => 
    {
      profile.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
    }, 500);
  }

  
  const previousSlider = () => 
  {
    const interviewerName = document.querySelector('.slider-name');
    interviewerName.style.transition = 'all 0.2s ease-in-out';
    interviewerName.style.transform = 'translate(-50%, 270%) translateX(-50%)';
    interviewerName.classList.add('fade');
    setTimeout(() => 
    {
      interviewerName.style.transform = 'translate(-50%, 270%) translateX(0%)';
      interviewerName.classList.remove('fade');
    }, 500);
  }


  const nextSlider = () => 
  {
    const interviewerName = document.querySelector('.slider-name');
    interviewerName.style.transition = 'all 0.2s ease-in-out';
    interviewerName.style.transform = 'translate(-50%, 270%) translateX(50%)';
    interviewerName.classList.add('fade');
    setTimeout(() => 
    {
      interviewerName.style.transform = 'translate(-50%, 270%) translateX(0%)';
      interviewerName.classList.remove('fade');
    }, 500);
  }

  
  const downArrow = () => 
  {
    handlePreviousRotation();
    userRotationPrev();
    previousSlider();
    setTimeout(() => setState((state + 1 ) % data.length), 500);
    
  }


  const upArrow = () => 
  {
    handleNextRotation();
    userRotationNext();
    nextSlider();
    setTimeout(() => setState((state - 1 + 10) % data.length));
  }

  useEffect(() => {
    const interviewer = document.querySelectorAll('.interviewer');
    interviewer.forEach((curr, index) => {
      curr.style.transform = `rotate(+${degree[index]}deg) translateX(300px)`;
    });
  })

  return (
    <div className="App">
      <div className='left-container'>
        <h2 className='rating'
        >{data[state]?.rating}</h2>
        <div className='rating-star'>
          <Rating name="read-only" value={data[state]?.star} precision={0.5} readOnly />
        </div>
        <h4 className='interviewer-name'>{data[state]?.name}</h4>
        <h5 className='interviewer-title'>{data[state]?.company}</h5>
        <p className='interviewer-bio'>{data[state]?.desc}</p>
        <button className='btn'>Book a session</button>
      </div>
      <div className='right-lower'>
        <div className='interviewer-info'                       >
          <img
            src={data[state]?.pic}
            alt={data[state]?.name}
            className='curr-interviewer-img'
          />
        </div>
        <div className='slider-name'                  >
          <h2 className='curr-interviewer-name'>{data[state]?.name}</h2>
        </div>
      </div>
      <div className='right-upper'>
        <div className='img-border'>
          <div className='interviewer'>
            <img
              src={data[0].pic}
              alt={data[0].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[1].pic}
              alt={data[1].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[2].pic}
              alt={data[2].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[3].pic}
              alt={data[3].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[4].pic}
              alt={data[4].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[5].pic}
              alt={data[5].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[6].pic}
              alt={data[6].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[7].pic}
              alt={data[7].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[8].pic}
              alt={data[8].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[9].pic}
              alt={data[9].name}
              className='interviewer-image '
            />
          </div>
        </div>
      </div>
      <div className='right-lower'>
        <div className='img-border-overlay'>
          <button className='img-border-inner-left'
            onClick={downArrow}>
            <BsArrowDown className='arrow-down' />
          </button>
          <button className='img-border-inner-right'
            onClick={upArrow}>
            <BsArrowDown  className='arrow-down' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
