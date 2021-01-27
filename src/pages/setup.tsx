import Card from '../components/Card'
import Layout from '../components/Layout'
import Output from '../components/Output';

function copy(){
    let text = document.getElementById('');
    

}

export default function Setup(){
    return(
        <Layout title={'setup dotenv'}>
            <h1>Dotenv Setup</h1>
            <br/>
            <br/>
            <Card>
            </Card>
            <br/>
            <br/>
            <Output>
                USER_TOKEN:
                REFRESH_TOKEN:
                GPIO_MAPPING:
                CLIENT_SECRET: 'YOUR CLIENT SECRET'
                CLIENT_ID: 'YOUR CLIENT ID'
            </Output>
        </Layout>
    )
}