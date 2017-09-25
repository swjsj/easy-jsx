import Head from 'preact-head'
import {h} from 'preact'
import Layout from './Layout'

export default ({ menu,children}) => (
    <Layout>
        {menu}

        {children}
    </Layout>
)