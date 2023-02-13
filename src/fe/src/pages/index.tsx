import Head from 'next/head'

import Layout from '@components/Layout/Layout'
import Dashboard from '@components/Dashboard/Dashboard';


const Home: React.FC = () => {
  return (
     <Layout>
        <Dashboard/>
     </Layout>
  )
}

export default Home;
