"use client";
import { Button } from "@/components/button";
import { Colors } from "./theme/colors";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
	const user = useSession();

	if (user.status === "unauthenticated") {
		signIn();
	}
	return (
		<main>
			<Button color={Colors["Celtic Blue"]} onClick={() => console.log("ok")}>
				Hello
			</Button>
		</main>
	);
}
