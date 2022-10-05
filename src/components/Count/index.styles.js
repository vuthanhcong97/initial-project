import styled from "styled-components"

const WrapCount = styled.div`
	flex-grow: 1;
	background: var(--seafoam);
	display: flex;
	align-items: center;
	justify-content: center;

	.wrap-modal {
		width: 400px;
		min-height: 300px;
		background: var(--ocean);
		border-radius: 20px;
		padding: 1.25rem;
		text-align: center;

		.num-of-count {
			font-size: 12rem;
			color: white;
		}

		.wrap-action {
			display: flex;
			gap: 5px;
			button {
				flex-grow: 1;
				border: none;
				outline: none;
				padding: 1rem;
				font-size: 2rem;
				cursor: pointer;
				background: var(--seafoam);
				border-radius: 8px;
			}
		}
	}
`

export { WrapCount }
