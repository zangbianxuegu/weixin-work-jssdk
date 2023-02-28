import { Wx } from '../wx'

declare global {
  interface Window {
    wx: Wx
  }
}
