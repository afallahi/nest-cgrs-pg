import { Server } from "http";
import { Context } from "aws-lambda";
import { createServer, proxy, Response } from "aws-serverless-express";
import * as express from "express";

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from "@nestjs/platform-express";
import { INestApplication } from "@nestjs/common";
import { Express } from "express";

let cachedServer: Server;

async function bootstrap(): Promise<Server> {
  const expressApp = express();
  const app = await createApp(expressApp);
  await app.init();
  return createServer(expressApp);
}

async function createApp(expressApp: Express): Promise<INestApplication> {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    return app;
  }

export async function handler(event: any, context: Context): Promise<Response> {
  if (!cachedServer) {
    const server = await bootstrap();
    cachedServer = server;
  }

  return proxy(cachedServer, event, context, "PROMISE").promise;
}

