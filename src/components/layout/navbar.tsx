"use client";

import { useSession } from "next-auth/react";
import { Header } from "../header";
import { useMemo } from "react";

export const Navbar = () => {
	const user = useSession();

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

	return <Header name={userInitials} />;
};
