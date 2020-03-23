![linting examples](https://github.com/brendanmorrell/styled-components-a11y-example/blob/master/example.png)

## Eslint Plugin Styled Components A11y

This is the minimal configuration necessary to activate linting of styled components with eslint-plugin-styled-components-a11y

- run 'yarn' or 'npm i' to install all the dependencies

- from there, using styled components should run all of the currently configured jsx-a11y rules on styled components when linting

## IMPORTANT

This library is currently a work in progress. At the moment, some of the rules do not fire in all cases, and there is some debugging and testing still to be done.

## Usage

Add styled-components-a11y to the plugins section of your .eslintrc configuration file. You can omit the eslint-plugin- prefix:

```
{
  "plugins": [
    "styled-components-a11y"
  ]
}
```

You enable the recommeded rules or strict rules. Add `plugin:styled-components-a11y/recommended` or `plugin:styled-components-a11y/`strict in extends:

```
{
  "extends": [
    "plugin:styled-components-a11y/recommended"
  ]
}
Alternatively, you can configure individual rules under the rules section.
```

```
{
  "rules": {
  "styled-components-a11y/rule-name": 2
  }
}
```

## Contributing

Contributions are very welcome at the moment, as I don't have a lot of free time to work on this currently. My personal todo list is in Todo.md in the main repo (https://github.com/brendanmorrell/eslint-plugin-jsx-a11y-styled-components). I will try to make this more intelligible to other contributors, but if you'd like to start before I get around to that, let me know, and I can tell you what still needs work. Thanks!
