import querystring from 'querystring'
import { setCookie } from '../../utils/cookies'

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
  //if no client id provided use my app id
  let client_id = (req.id) ? req.id : process.env.CLIENT_ID
  if(method != 'GET'){
      res.send(400)
  } else {
      let state = randState(16)
      setCookie(res, 'spotify_auth_state',state)
      res.redirect('https://accounts/spotify.com/authorize?' +
        querystring.stringify({
          response_type:'code',
          client_id: client_id,
          scope:'user-read-playback-state user-read-currently-playing',
          redirect_uri: 'https://panel.evannishi.me/setup',
          state: state
        })
      )
  }
} 