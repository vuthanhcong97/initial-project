import styled from 'styled-components'

const WrapAllImage = styled.div`
	display: flex;
	align-items: flex-start;
	background: gray;
	min-height: 100vh;

	& > div {
		border: 1px solid white;
		margin: 0 5px;
		text-align: center;
		& > svg {
			width: 50px;
			height: 50px;
			object-fit: contain;
		}
	}

`;

export {
	WrapAllImage
}
