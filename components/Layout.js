import Head from "next/head";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	);
};

export default Layout;
