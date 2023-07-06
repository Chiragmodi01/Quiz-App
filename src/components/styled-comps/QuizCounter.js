import styled from 'styled-components'


export const QuizCounter = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: -25px;
    position: relative;

    .ques-count {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .curren-ques-count {
        font-size: 2.2rem;
        font-weight: 600;
    }
    .total-ques-count {
        font-size: 1rem;
        font-weight: 600;
        color: var(--darkgray);
    }




    .flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
    height: 200px;
    width: 200px;
  }
  
  .single-chart {
    width: 100%;
    justify-content: space-around ;
  }
  
  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }
  
  .circle-bg {
    fill: none;
    stroke: var(--lightgray);
    stroke-width: 3.8;
  }
  
  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
  }
  
  .circular-chart.orange .circle {
    stroke: var(--green);
  }
  
  .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`