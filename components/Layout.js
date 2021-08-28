import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{children}
		</>
	);
};

export default Layout;
