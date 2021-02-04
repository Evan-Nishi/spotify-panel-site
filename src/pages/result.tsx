import Card from '../components/Card'
import Layout from '../components/Layout'
import Output from '../components/Output';

function copy(){
    let text = document.getElementById('');

}

export default function Result(){
    return(
        <Layout title={'dotenv'}>
            <h1>Generated Dotenv</h1>
            <br/>
            <br/>
            <Card>
            <Output>
                    USER_TOKEN:
                    REFRESH_TOKEN:
                    CLIENT_SECRET: 'YOUR CLIENT SECRET'
                    CLIENT_ID: 'YOUR CLIENT ID'
                </Output>
            </Card>
            <br/>
            <br/>
        </Layout>
    )
}


/**         <Output>
                USER_TOKEN:
                REFRESH_TOKEN:
                GPIO_MAPPING:
                CLIENT_SECRET: 'YOUR CLIENT SECRET'
                CLIENT_ID: 'YOUR CLIENT ID'
            </Output>*/
