import { clearCookie } from '../../utils/cookies'
import axios from 'axios'

/**
 * gives application refresh/access tokens
 * @name callback
 * @param secret: client secret
 * @method GET
 */
// for now
let client_id = process.env.CLIENT_ID
let base_url = process.env.BASE_URL

export default async (req, res) => {
    const { method } = req
    if(method != 'GET'){
        res.send(400)
    }
    let secret = req.secret
    let code = req.query.code
    let state = req.query.state 
    let storedState = req.cookies ? req.cookies['spotify_auth_state'] : null
    console.log(code)
    //checks if cookie state matches returned state

    if(state == null || state != storedState){
        console.log('state mismatch')
        res.status(400).json({error: 'state mismatch'})
    } else {
        clearCookie(res, 'spotify_auth_state')
        /*
        let payload = {
            form:{
                code: code,
                redirect_uri: base_url + '/setup',
                grant_type: 'authorization_code'
            },
            headers:{'Authorization': 'Basic ' + Buffer.from((client_id + ':' + secret),'base64')},
            json: true
        }*/

        //let resp = await axios.post('https://accounts.spotify.com/api/token', payload)
        let resp = await axios.post('https://accounts.spotify.com/api/token', {
            form:{
                code:code,
                redirect_uri: 'https://evannishi.me',
                grant_type: 'authorization_code'
            },
            headers: {
                Authorization: 'Basic' + Buffer.from((client_id + ':' + secret), 'base64'),
                json: true
            }
        })
        let refresh_token = resp.data.form.refresh_token
        console.log(refresh_token)

        //console.log(resp.data.form.refresh_token)
    }
}
