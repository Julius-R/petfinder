import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout title="Pet Finders | Find Your Missing Companion Here">
			<Hero />
			<CallToAction />
			<Footer />
		</Layout>
	);
}
