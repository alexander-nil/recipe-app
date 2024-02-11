"use client";
import { Button } from "@/components/button";
import { Colors } from "./theme/colors";

export default function Home() {
	return (
		<main>
			<Button color={Colors["Celtic Blue"]} onClick={() => console.log("ok")}>
				Hello
			</Button>
		</main>
	);
}
