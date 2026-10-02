# Welcome to My First Backend
***

## Task
The goal of this project is to build a first backend server that exposes a REST API.
The server receives HTTP requests from a client, processes them, and sends back JSON responses, allowing the client to create, read, update and delete data.
The challenge lies in understanding the request/response cycle, designing clear routes, validating the data received, and returning the right HTTP status codes.

## Description
I solved this problem by organizing the server into small, separated layers:
- **Server Setup** : an Express application listens on a configurable port and parses incoming JSON bodies.
- **Routing** : each resource has its own routes, following REST conventions (`GET` to read, `POST` to create, `PUT` to update, `DELETE` to remove).
- **Controllers** : the logic of each route is written in controller functions, which keeps the route files short and readable.
- **Data Storage** : the data is stored in a database (or a JSON file) through a dedicated module, so the storage can be changed without touching the routes.
- **Validation** : the data received from the client is checked before being used, and invalid requests are rejected with a clear error message.
- **Error Handling** : a central error handler returns appropriate status codes (`200`, `201`, `400`, `404`, `500`) and a JSON error body.
- **Configuration** : settings such as the port are read from environment variables, stored in a `.env` file that isn't committed.

## Installation
The project needs Node.js to run the server.
1. Get the project :
```bash
git clone [REPOSITORY_URL]
cd my_first_backend
```

2. Install the dependencies :
```bash
npm install
```

3. Create a `.env` file at the root of the project :
```
PORT=3000
```

4. Start the server :
```bash
npm start
```

The API is then available at `http://localhost:3000`.

## Usage
Send HTTP requests to the server with a tool such as `curl`, Postman or the browser.

**Routes :**
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/items` | Get all items |
| `GET` | `/items/:id` | Get one item by its id |
| `POST` | `/items` | Create a new item |
| `PUT` | `/items/:id` | Update an item |
| `DELETE` | `/items/:id` | Delete an item |

**Examples :**

Get all items:
```bash
curl http://localhost:3000/items
```

Create an item:
```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "My first item"}'
```

Update an item:
```bash
curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated item"}'
```

Delete an item:
```bash
curl -X DELETE http://localhost:3000/items/1
```

**Status codes :**
| Code | Meaning |
|------|---------|
| `200` | Request succeeded |
| `201` | Resource created |
| `400` | Invalid data sent by the client |
| `404` | Resource not found |
| `500` | Internal server error |

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
