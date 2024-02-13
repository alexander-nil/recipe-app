import { smoothColorScheme } from "@/app/theme/colors";
import styled from "styled-components";
import { Shadow, Size } from "../../../helpers/helpers";

export const StyledUser = styled.div`
	background-color: ${smoothColorScheme.background};
	margin: ${Size(0.5)};
	padding: ${Size(1.5)};
	font-weight: 600;
	font-size: ${Size(2)};
	border-radius: 50%;
	color: ${smoothColorScheme.primary};
	${Shadow};
`;
