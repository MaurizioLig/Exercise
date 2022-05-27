<h1 align="center"> Exercise 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/gate42srl/heyvoice-action/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
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

Before running, you must set the following environment variable:

- `NODE_CONFIG_DIR=.\src\config`: Tells config module where to find configuration variables (i.e. default.json file)

Then you can run the code

```sh
npm run start-win
```

**On Linux:**

```sh
npm run start
```


#### Development Environment


```sh
npm run dev
```

## Run tests


### Setup


**On Windows powershell:**

```shell
$env:GOOGLE_APPLICATION_CREDENTIALS="YOUR/ABSOLUTE/PATH/TO/SERVICE/ACCOUNT/KEY"
```

**On Linux:**

```shell
GOOGLE_APPLICATION_CREDENTIALS="YOUR/ABSOLUTE/PATH/TO/SERVICE/ACCOUNT/KEY"
```

Then you can run the following command:

```sh
npm run test
```

## Author

👤 **MaurizioLig**

## Show your support

Give a ⭐️ if this project helped you!
