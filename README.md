# AptivWebclient

This is the front side of the Aptiv Inventory Management application and is the visual functionality for the web portal. There is also an api written in Ruby-on-Rails at the following url: https://github.com/csteamproject/aptiv_api.git which this web portal needs to function properly. Aptiv Inventory Mangement is a Web Portal tool to manage and maintain all ITV assets like test tools, cabinets, SW licenses, Laptops, Desktops, Test Units, screw drivers, multi meters, etc.. The system provides information/ details of the item as owner, project, status, calibration date, capital/expense equipment, etc..

# Table of Contents  
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
    - [How to Install Bootstrap](#how-to-install-bootstrap)
        - [Installing Bootstrap From NPM](#installing-bootstrap-from-npm)
- [Installation](#installation)
- [Usage](#usage)
    - [Development Server](#development-server)
    - [Code Scaffolding](#code-scaffolding)
    - [Build](#build)
    - [Git Scaffolding](#git-scaffolding)
        - [SourceTree](#sourcetree)
        - [Git Commands](#git-commands)
    - [Running Unit Tests](#running-unit-tests)
    - [Running End to End Tests](#running-end-to-end-tests)
    - [Further Help](#further-help)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

# Getting Started

1. Run `git clone https://github.com/csteamproject/aptivWebclient.git` should copy down the project to your computer.
2. Run `cd aptivWebclient` go into the project folder before running the next commands.
3. Run `npm install` this should grab down any missing node module packages that were not mentioned in the prerequisites. 
4. Run `ng build` it should build without any errors.
5. Run `ng serve` it should compile without any errors.
6. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Prerequisites

- [GIT v.2.0.0](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- [NodeJS v.8.11.4](https://nodejs.org/en/download/).
- [Angular v.6.1.5](https://www.npmjs.com/package/@angular/cli).

## How to Install Bootstrap
https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a

### Installing Bootstrap From NPM

* First install bootstrap and jquery: `npm install bootstrap@3 jquery --save`

* Then In the `angular.json` file add the following lines:

```
"styles": [
    "styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
```

* You should now have Bootstrap on the site.

# Installation
These are a more detailed area of steps if the Get Started notes were not detailed enough.

1. First open a terminal or command prompt in a folder you wish the project to be pulled down to from github.
2. Then run the following command:

```
git clone https://github.com/csteamproject/aptivWebclient.git
```

This should clone down the project if you have full access to it, if you do not then you have to ask the owner if you can have access to collaborate.

3. After the project finishes cloning down inside your terminal or command prompt you can `cd aptivWebclient` so that you are within the cloned project. There you can run this command:


```
npm install
```

This should get all the packages not mentioned in the prerequisites and update any old packages that have fallen behind in age.

4. Next you can now compile the project to make sure it runs by running this command:

```
ng serve
```

This will run the application in a localserve window at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* If by some chance port 4200 is being used you can run this command to kill all other running instances: (Mac/ Linux/ Unix) `sudo kill $(sudo lsof -t -i:4200)` | (Windows) `lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill`

--Output--
NOT IMPLEMENTED YET

# Usage
The usage of our application has a variety of useful commands provided by Angular which can be used with the site to make certain contributions.

Our setup for our Application would be the following:

- Any Calls to the API and a services functionality should be generated as a service.
- Certain Objects/ Components used on a page should have a separate component with its functionality.
- A page is a component and should be as clean as possible with references to components and services used on the page
- Declared objects should be defined with a class.
- A class should be implemented with an interface.
- Any type of security should be protected and used by a guard and through a guard.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate serviceWorker|application|class|component|directive|enum|guard|interface|module|pipe|service|universal|appShell|library`.

* To Generate an app-routing Run `ng generate module app-routing --flat --module=app`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To build it for our project on the nmsu systems you have to attach a base-href to the production build shown below is an example:

```
ng build --prod --base-href /~jsteele/InventoryProject/aptivWebclient/
```

So wherever you run the server you need the url of where the aptivWebclient is.

### SourceTree
You can follow the above rules of the git scaffolding visually through sourcetree.

### Git Commands
Using Git commands are quick and powerful especially if you can remember them.<br/>
So following the scaffolding rules we can use the following commands:

#### Open the VSCode Command Terminal:  
```
 ^ ~ 
```


#### To Create a new Branch

```
git checkout -b *branch-name*
```

#### To Commit Changed Code use the commands [git commit](https://git-scm.com/docs/git-commit) and [git add](https://git-scm.com/docs/git-add)

```
git add
```

* `git add` will commit all new files

```
git commit -a -m "Your Message"
```

* `git commit -a` will commit all modified files

#### To add all new files and commit all modified files just run the combined command:

```
git add -A && git commit -m "Your Message"
```

#### To Push a Branch
```
git push
```

#### To Change Branches 

```
git checkout *branch-name*
```
* NOTE: Be carefult to type the right name or you will go to a nonexisting branch.<br/>

#### To Merge from another branch

```
git merge *branch-name*
```

#### When Running into a merge comment it is just requesting for you to put in a message you can do so by typing `i` then when you are done inserting a message you then click `ESC` and then just type: `:wq` which will conclude the merge with a message.

#### To Check for branch names on remote and local:
```
git branch -a
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* To Test all CRUD functionality just go to `localhost:4200/testing`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the Aptiv Webclient are hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

- None so far...

# Credits

Main Developers

* Jonathan F. Steele
* Zachary Morgan
* Xitally Salmon
* Robert Dale
* Gilbert Carrillo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.


# License

Copyright (c) 2018 CS448 New Mexico State University

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

