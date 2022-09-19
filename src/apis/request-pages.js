import { get } from './request'
export const getHealthCodeData = () => {
  return get('/healthCode/codeCount')
}
