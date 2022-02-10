// flow-typed signature: ee385dd729a50f2a199f2cd78127a475
// flow-typed version: c6154227d1/cors_v2.x.x/flow_>=v0.104.x

// @flow
import type { $Request as Request, $Response as Response, NextFunction } from "express";

interface RequestHandler {
     (req: Request, res: Response, next?: NextFunction): mixed;
 }

type CustomOrigin = (
    requestOrigin: string,
    callback: (err: Error | null, allow?: boolean) => void
) => void;

type CorsOptions = {
    origin?: boolean | string | RegExp | string[] | RegExp[] | CustomOrigin,
    methods?: string | string[],
    allowedHeaders?: string | string[],
    exposedHeaders?: string | string[],
    credentials?: boolean,
    maxAge?: number,
    preflightContinue?: boolean,
    optionsSuccessStatus?: number,
    ...
}

declare module "cors" {
    declare module.exports: (options?: CorsOptions) => RequestHandler;
}
