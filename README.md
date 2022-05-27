<h1 align="center"> Exercise 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  </a>
</p>

> Simple typescript project

### 🏠 [Homepage](https://github.com/MaurizioLig/Exercise/)

## Install

```sh
npm install
```

## Usage

### Setup

Before you can run the project, be sure to set the following environment variables stored in the default.json configuration file (that you can find in the config folder):
- `DB_CONNECTION_URI`: connection string to the database
- `PORT`: port to run the service on

### Run the project

#### Production Environment

Before running the code you should first trasnpile it for converting Typescript code to JavaScript

```sh
npm run build
```

Then you can run the code:

**On Windows powershell:**

Before running, you must set the following environment variable in the terminal:

- `set NODE_CONFIG_DIR=.\src\config`: Tells config module where to find configuration variables (i.e. default.json file)

Then you can run the code

```sh
npm run start
```

**On Linux:**

Before running, you must set the following environment variable in the terminal:

- `export NODE_CONFIG_DIR=./src/config`: Tells config module where to find configuration variables (i.e. default.json file)

Then you can run the code

```sh
npm run start
```


#### Development Environment

**On Windows powershell:**

Before running, you must set the following environment variable in the terminal:

- `set NODE_CONFIG_DIR=.\src\config`: Tells config module where to find configuration variables (i.e. default.json file)

Then you can run the code

```sh
npm run dev
```

**On Linux:**

Before running, you must set the following environment variable in the terminal:

- `export NODE_CONFIG_DIR=./src/config`: Tells config module where to find configuration variables (i.e. default.json file)

Then you can run the code

```sh
npm run dev
```

## Author

👤 **MaurizioLig**

## Show your support

Give a ⭐️ if this project helped you!
