/* eslint-disable @typescript-eslint/no-floating-promises */
import fastify, { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';
import { database } from './types/types';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import dotenv from 'dotenv';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const options: FastifyServerOptions = { logger: true };
const server: FastifyInstance = fastify(options);

server.register(helmet);
server.register(cors);
dotenv.config();

const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
	baseURL: process.env.API_URL,
	headers: {
		'Authorization': process.env.NOTION_TOKEN,
		'Notion-Version': process.env.NOTION_VERSION
	}
} 

const instance: AxiosInstance = axios.create(axiosConfig);

const port: string | number = process.env.SERVER_PORT || 3001;

server.listen(port , (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

server.get('/v1/databases' , async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    console.log(req);
    const { data: results } = await instance.get<AxiosResponse<database>>('https://api.notion.com/v1/databases');
    return { results }
  } catch (error) {
    reply.send(error);
  }
});