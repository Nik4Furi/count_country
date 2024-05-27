# <h1 id="count_country"> count_country <span>![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/count_country)
</span> </h1>

### A API stuff used to get list of the countries, states and cities .

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#routersRef" >Routers References</a></p>
####   <p><a href="#features" >Features</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/count_country?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/count_country?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/count_country)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/count_country?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/count_country) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/count_country)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/count_country)

<a href="#count_country">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p text-align=left>
  <img src="https://github.com/Nik4Furi/count_country/assets/91304976/ebaa040e-b170-4180-be7e-6d3d6b6747f1" width="500" height="" alt="count_country_home"/>
 </p>
 


<a href="#count_country">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>


**Server:** NodeJS, ExpressJS, 

<a href="#count_country">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/count_country
```

Go to the project directory

```bash
  cd count_country
```

Install dependencies

```bash
 yarn
```
If yarn not in your system, can use *npm i* to install dependies

OR

``` bash
npm i -g yarn

yarn -v
```

Start the server or can be use "npm run" command

```bash
  yarn start (start at only time)

  yarn dev (Run or restart, whenever you save any file(js))
```

<a href="#count_country">Go Home </a>



## <h2 id="routersRef">Routers Reference </h2>


start with **/api/country?**

#### Get all countries


```http
  GET 
```

G

| Params | Query   | Description                |
| :-------- | :------- | :------------------------- |
| - | `-` | if not pass any query get all the countries |

#### Get all states


```http
  GET 
```

G

| Params | Query   | Description                |
| :-------- | :------- | :------------------------- |
| - | `country` | **country**  query parameter pass to get all states |


#### Get all cities

start with **/api/country?**

```http
  GET 
```

G

| Params | Query   | Description                |
| :-------- | :------- | :------------------------- |
| - | `country=&state=` | **country** & **state** query parameter pass to get all cities |


<a href="#count_country">Go Home </a>

## <h2 id="features">Features </h2>

- Get all the countries, 
- Pass **country** name to get all the *states*
- Pass **country** and **state** name to get all *cities*


<a href="#count_country">Go Home </a>
