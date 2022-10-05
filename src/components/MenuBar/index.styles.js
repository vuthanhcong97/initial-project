import styled from "styled-components"

const WrapMenuBar = styled.div`
	background-color: var(--ocean);
	display: flex;
	min-height: 4rem;

	& > * {
		text-decoration: none;
		display: flex;
		place-items: center;
		padding: 0 1rem;
		color: white;

		&:hover {
			background-color: var(--wave);
		}

		&.active {
			background-color: var(--wave);
		}
	}
`

export { WrapMenuBar }
