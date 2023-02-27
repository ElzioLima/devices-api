[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

# **Elzio-Lima - Backend - Devices API**

---

Teste de competência

> # Posts API

An API for a simple Devices Manager
* Node.JS
* Express.JS
* TypeORM
* MongoDB
* WebSocket

<br /><br />

> ## Database configuration

* create database "your_database"
* Change database connection credentials at ormconfig.js or create a .env file

<br /><br />

> ## Usage

* npm install --save-dev
* npm run dev

* npm run build
* npm run start(remove ou comment TS_NODE_DEV from .env before run this command)

<br /><br />

> ## Notes

* The TypeORM version for this project is 0.2.x . version 0.3.x are incompatible to current arch project.

<br /><br />

> ## Code Repository Architecture

src
|-application
| |-contracts
| |-controllers
| | |-devices
| |
| |-decorators
| |-erros
| |-helpers
| |-middlewares
| |-validation
|
|-domain
| |-contracts
| | |-gateways
| | |-repos
| |
| |-entities
| | |-errors
| |
| |-use-cases
|   |-device
|
|-infra
| |-gateways
| |-repos
|   |-entities
|   |-helpers
|
|-main
  |-adapters
  |-config
  |-factories
  | |-application
  | | |-controllers
  | | | |-devices
  | | |
  | | |-decorators
  | | |-middlewares
  | |
  | |-domain
  | | |-use-cases
  | |   |-device
  | |
  | |-infra
  |   |-gateways
  |   |-repos
  |     |-typeorm
  |       |-helpers
  |
  |-middlewares
  |-routes
  |-types


<br /><br />
