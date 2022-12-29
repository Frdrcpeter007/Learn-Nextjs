import Head from 'next/head'
import Layout from '../components/Layout'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'
import SectionC from '../components/SectionC'

export default function Home() {
	return (
		<>
			<Layout>
				<SectionA />
				<SectionB />
				<SectionC />
			</Layout>
		</>
	)
}
