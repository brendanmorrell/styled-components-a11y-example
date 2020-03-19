![linting examples](https://github.com/brendanmorrell/styled-components-a11y-example/blob/master/example.png)

## Eslint Plugin Styled Components A11y

This is the minimal configuration necessary to activate linting of styled components with eslint-plugin-styled-components-a11y

- run 'yarn' or 'npm i' to install all the dependencies

- from there, using styled components should run all of the currently configured jsx-a11y rules on styled components when linting

## IMPORTANT

This library is currently a work in progress. At the moment, some of the rules do not fire in all cases, and there is some debugging and testing still to be done.
Also, as the library is not fully packaged and prod ready, you currently have to manually enable each rule in the .eslintrc.js file (as shown in this example repo). withoiut this, none of the rules will fire. I will post updates to this as I make progress on the project.

## Contributing

Contributions are very welcome at the moment, as I don't have a lot of free time to work on this currently. My personal todo list is in Todo.md in the main repo (https://github.com/brendanmorrell/eslint-plugin-jsx-a11y-styled-components). I will try to make this more intelligible to other contributors, but if you'd like to start before I get around to that, let me know, and I can tell you what still needs work. Thanks!
