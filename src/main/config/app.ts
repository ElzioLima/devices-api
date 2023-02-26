import { ORMDeviceRepository } from '@/infra/repos/typeorm'
import { setupMiddlewares } from '@/main/config/middlewares'
import { setupRoutes } from '@/main/config/routes'
import { setupWebSocket } from './websocket'
import { setupMQTTClient } from './mqtt'
import express from 'express'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
setupWebSocket(app)
setupMQTTClient()

export { app }
