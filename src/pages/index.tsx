import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
export default function Index(){
    return(
        <Layout>
            <h1>Spotify LED panel</h1>
            <br/>
            <Card>
                <p>
                    This is the website where you can generate a dotenv for the spotify LED panel.
                    There will also be documentation on how to setup the software shortly.
                </p>
            </Card>
            <br/>
            <br/>
            <Button href='/setup'>get dotenv</Button>
            
        </Layout>
    )
}