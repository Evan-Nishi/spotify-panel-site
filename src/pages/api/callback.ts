import { clearCookie } from '../../utils/cookies'
import axios from 'axios'
import * as crypto from 'crypto-js'

/**
 * gives application refresh/access tokens
 * @name callback
 * @param SECRET: hashed client app secret
 * @param ID: hashed client app ID
 * @method GET
 */
// for now
let client_id = process.env.CLIENT_ID

//this is horrible but alas there is no other way
export default async (req, res) => {
    //TODO: make this not horrible
    //crypto.AES.decrypt(req.ID, process.env.PASSPHRASE)
    const { method } = req
    if(method != 'GET'){
        res.send(400)
    }
    let code = req.query.code
    let state = req.query.state 
    let storedState = req.cookies ? req.cookies['spotify_auth_state'] : null
    //checks if cookie state matches returned state
    if(state == null || state != storedState){
        res.status(400).json({error: 'state mismatch'})
    } else {
        clearCookie(res, 'spotify_auth_state')
        let payload = {
            headers:{'Authorization': 'Basic '}

        }
        axios.post('https://api.spotify.com/v1/me', payload)
    }
}
