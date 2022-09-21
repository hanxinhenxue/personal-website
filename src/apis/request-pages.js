import { get } from './request'
export const getHealthCodeData = () => {
  return get('http://supervise.bmsoft.com:9080/supervise/healthCode/codeCount')
  // return get('/supervise/healthCode/codeCount')
}
