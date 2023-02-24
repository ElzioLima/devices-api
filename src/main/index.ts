import './config/module-alias'
import { env } from '@/main/config/env'
import { ORMConnection } from '@/infra/repos/typeorm/helpers'
import { WebSocketApplication } from '@/infra/gateways/websocket'

import 'reflect-metadata'

ORMConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    const server = app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
    WebSocketApplication.getInstance().startServer(server)
  })
  .catch(console.error)
