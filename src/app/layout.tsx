"use client";
import "./globals.css";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import StyledComponentsRegistry from "./lib/registry";
import { Session } from "next-auth";

export default function RootLayout({
	children,
	session,
}: Readonly<{
	children: React.ReactNode;
	session: Session;
}>) {
	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</body>
			</html>
		</SessionProvider>
	);
}
