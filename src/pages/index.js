import React from "react"
import { Layout } from '../components/Layout'
import { Portrait } from "../components/Portrait";

export default () => (
    <Layout>
        <Portrait>
            <img src="../../static/fountain.JPG" />
        </Portrait>
        <h1>Hi, I'm Matthew.</h1>
    </Layout>
)