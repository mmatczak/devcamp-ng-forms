## Getting started

### Install prerequisites

#### Git
Check if you have a Git client already installed:

```
git --version
```

If your OS can not recognize this command, install Git. For details please refer to [this page](http://git-scm.com).
When installing under Windows, please make sure you check the following option:

* Use git from Windows command prompt

#### Node.js

[Angular CLI](https://github.com/angular/angular-cli) requires [Node.js](https://nodejs.org/) 6.9.0 or higher. 

It is highly recommended to install the [Node Version Manager](https://github.com/creationix/nvm) which manages multiple active
[Node.js](https://nodejs.org/) versions on your machine. The latest windows version of nvm can be downloaded [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip).

Having the [Node Version Manager](https://github.com/creationix/nvm) installed, install Node.js, e.g. `6.10.2`:

```
nvm install 6.10.2
```

and set it to be used:

```
nvm use 6.10.2
```

#### npm

Having the Node.js installed you have also its package manager - [npm](https://www.npmjs.com/) installed, but we need its version 5 or higher, e.g. `5.3.0`:

```
npm install -g npm@5.3.0
```

#### Angular CLI

Having [npm](https://www.npmjs.com/) installed you can install [Angular CLI](https://github.com/angular/angular-cli) like this:

```
npm install -g @angular/cli
```

### Clone, install dependencies and run

Clone this repository:
```
https://github.com/mmatczak/devcamp-ng-forms.git
```

Install dependencies using [npm](https://www.npmjs.com/):
```
cd devcamp-ng-forms
npm install
```
This may take several minutes...

Start the application using [Angular CLI](https://github.com/angular/angular-cli):
```
ng serve -o
```

The application should open in your default browser displaying a header containing: `Demystifying Angular (Reactive) Forms` 

### How did I generate this project using [Angular CLI](https://github.com/angular/angular-cli)?
```
mkdir devcamp-ng-forms
ng new dev-camp-ng-forms --prefix=dc --style=scss --skip-install --directory=devcamp-ng-forms
cd devcamp-ng-forms
npm install
```


