import Head from 'next/head'
import Layout from '../components/Layout'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'

export default function Home() {
	return (
		<>
			<Layout>
				<SectionA />
				<SectionB />
			</Layout>
		</>
	)
}
