import styled from "styled-components";

export const OptionTab = styled.div`
	background-color: var(--lightgray);
	padding: 4px 16px;
	gap: 14px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 10px 0;
	cursor: pointer;
	border: 2px solid ${props => props.isSelected ? `var(--green)` : `var(--lightgray)`};

	.inputbox-container {
		position: relative;
	}

	label {
		background-color: var(--lightgray);
		border: 2px solid var(--gray);
		border-radius: 50%;
		cursor: pointer;
		height: 18px;
		left: 0;
		position: absolute;
		top: 0;
		width: 18px;
	}

	label:after {
		border: 2px solid #fff;
		border-top: none;
		border-right: none;
		content: "";
		height: 4px;
		left: 4px;
		opacity: 0;
		position: absolute;
		top: 5px;
		transform: rotate(-45deg);
		width: 9px;
	}

	input[type="checkbox"] {
		visibility: hidden;
	}

	input[type="checkbox"]:checked + label {
		background-color: var(--green);
		border-color: var(--green);
	}

	input[type="checkbox"]:checked + label:after {
		opacity: 1;
	}
`;
