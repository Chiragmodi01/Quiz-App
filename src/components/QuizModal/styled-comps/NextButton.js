import styled from 'styled-components'


export const NextButton = styled.button`
    color: #FFFF;
    width: 100%;
    background-color: red;
    border-radius: 25px;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    margin: 20px 0px;
    cursor: pointer;

    .btn-text {
        flex: 1;
        margin: 0;
    }

    animation: ${(props) => props && props.isInvalidSubmit ? `shake 300ms` : 'none'};

    @keyframes shake {
    25% {
        transform: translateX(4px);
    }
    50% {
        transform: translateX(-4px);
    }
    75% {
        transform: translateX(4px);
    }
}
`