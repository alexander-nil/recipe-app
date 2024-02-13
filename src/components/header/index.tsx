import { smoothColorScheme } from "@/app/theme/colors";
import styled from "styled-components";
import { StyledUser } from "./wrappers";

export const StyledHeader = styled.div`
	width: 100%;
	background-color: ${smoothColorScheme.secondary};
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: end;
`;
interface IHeader {
	name?: string | null;
}

export const Header = ({ name }: IHeader) => {
	return (
		<StyledHeader>
			<StyledUser>{name}</StyledUser>
		</StyledHeader>
	);
};
