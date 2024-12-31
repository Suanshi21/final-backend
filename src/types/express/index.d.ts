/* eslint-disable prettier/prettier */
declare global {
  namespace Express {
    interface Request {
      user: any;  
  }
}
}