import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

/**
 * sets cookie
 * @param {NextApiResponse} res - the response object
 * @param {string} name - cookie name
 * @param {unknown} value - value of cookie
 * @param {CookieSerializeOptions} options - any cookie options
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}


/**
 * clears cookie
 * @param {NextApiResponse} res - response object 
 * @param {string} name - name of tag
 */
export const clearCookie = (
  res:NextApiResponse,
  name:string
) => {
  res.removeHeader(name)
  console.log('cookie removed')
}