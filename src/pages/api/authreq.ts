import querystring from 'querystring'
import { setCookie } from '../../utils/cookies'

const SECRET = process.env.CLIENT_SECRET
const ID = process.env.CLIENT_ID


function randState(len) {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export default async (req, res) => {
    const { method } = req
    if(method != 'GET'){
        res.send(400)
    } else {
        let state = randState(16)
        setCookie(res, 'spotify_auth_state',state)
        res.cookie('spotify_auth_state', state)
        res.redirect('https://accounts/spotify.com/authorize?' +
        querystring.stringify({
            response_type:'code',
            scope:'user-read-playback-state user-read-currently-playing',
            redirect_uri: 'https://panel.evannishi.me/setup',
            state: state
        })
    )
    }
} 