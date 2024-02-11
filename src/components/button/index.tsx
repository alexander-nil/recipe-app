import styled from "styled-components";

interface IButton {
	color?: string;
	onClick: () => void;
	children: React.ReactNode;
}

export const Button = (props: IButton) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const StyledButton = styled.button<IButton>`
	background-color: ${(props) => props.color ?? "grey"};
	padding: 4px 8px;
	border-radius: 5px;

	&:hover {
		transition: 0.3s;
		opacity: 0.7;
	}
`;
