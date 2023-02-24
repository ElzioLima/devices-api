import { adaptExpressRoute as adapt } from '@/main/adapters'
import {
  makeCreateDeviceController,
  makeListDeviceController,
  makeUpdateDeviceController,
  makeListOneDeviceController,
  makeDeleteDeviceController
} from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/device/create', adapt(makeCreateDeviceController()))
  router.get('/device/list', adapt(makeListDeviceController()))
  router.put('/device/update/:id', adapt(makeUpdateDeviceController()))
  router.get('/device/list-one/:id', adapt(makeListOneDeviceController()))
  router.delete('/device/delete/:id', adapt(makeDeleteDeviceController()))
}
