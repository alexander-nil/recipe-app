"use client";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
	const user = useSession();
	console.log("is auth", user);

	if (user.status === "unauthenticated") {
		console.log("is auth", user);
		signIn();
	}
	return <main></main>;
}
