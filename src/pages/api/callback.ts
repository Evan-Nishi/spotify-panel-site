import axios from 'axios'

export default async (req, res) => {
    const { method } = req
    if(method != 'GET'){
        res.send(400)
    }

    let code = req.query.code
    let state = req.query.state 
    let storedState = req.cookies ? req.cookies['spotify_auth_state'] : null
    //checks if cookie state matches returned state
    if(state == null || state != storedState){
        res.send(400)
    }
}
