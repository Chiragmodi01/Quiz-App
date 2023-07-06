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

    .insideCounter {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: 7px solid var(--gray);
        align-items: center;
        justify-content: center;
        display: flex;
        position: relative;
    }

    .ques-count-border {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
        position: relative;
        background-color: transparent;
        position: absolute;
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
`