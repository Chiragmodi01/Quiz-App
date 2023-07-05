import styled from 'styled-components'


export const QuizCounter = styled.div`
    width: 90px;
    height: 90px;
    background-color: whitesmoke;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: -45px;

    .curren-ques-count {
        font-size: 2.2rem;
        font-weight: bold;
    }
    .total-ques-count {
        font-size: 1rem;
        font-weight: bold;
        color: var(--darkgray);
    }
`