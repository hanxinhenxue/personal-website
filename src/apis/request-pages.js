import { get } from './request'
export const getHealthCodeData = () => {
  return get('http://58.49.165.247:8081/18a9a2cc83ef4c74b0ecab7fb636b3ff')
  // return get('/supervise/healthCode/codeCount')
}
