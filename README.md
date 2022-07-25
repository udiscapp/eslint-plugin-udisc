# eslint-plugin-udisc

UDisc&#39;s remix-specific rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-udisc`:

```sh
npm install eslint-plugin-udisc --save-dev
```

## Usage

Add `udisc-web` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "udisc-web"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "udisc-web/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


