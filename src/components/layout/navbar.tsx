"use client";

import { useSession } from "next-auth/react";
import { useCallback, useMemo } from "react";
import { Menu } from "./menu";
import { RecipeModal } from "../modal";
interface IModal extends HTMLElement {
	showModal: () => void;
}
export const Navbar = () => {
	const user = useSession();

	const newRecipe = useCallback(() => {
		console.log("was clicked");
		const modal = document.getElementById("my_modal_1") as IModal;
		modal && modal.showModal();
	}, []);

	const userInitials = useMemo(() => {
		if (user.data?.user?.name) {
			return user.data?.user?.name
				.split(" ")
				.map((i) => i[0])
				.join("")
				.toUpperCase();
		}
		return "";
	}, [user.data?.user?.name]);

	return (
		<>
			<Menu username={user.data?.user?.name ?? ""} onClick={newRecipe} />
			<RecipeModal />
		</>
	);
};
