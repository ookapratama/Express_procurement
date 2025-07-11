import { Request, Response, NextFunction } from 'express';

interface IExpress {
  req: Request;
  res: Response;
  next: NextFunction;
}

type IFn = (req: Request, res:Response, next: NextFunction) => Promise<void>

const catchAsync = (fn: IFn) => {
  return ({req, res, next}: IExpress ) => {
    fn(req, res, next).catch(next)
  };
};

export default catchAsync;
