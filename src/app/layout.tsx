"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Navbar } from "@/components/layout/navbar";

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
					<Navbar />
					{children}
				</body>
			</html>
		</SessionProvider>
	);
}
