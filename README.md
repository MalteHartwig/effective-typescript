This project is supposed to illustrate several caveats of improper use of TypeScript and how to overcome them. Since TypeScript eventually just runs JavaScript, insufficient type-safety can introduce subtle bug. In addition, lacking compiler support can lead to dead code accumulating. 

Each additional commit deals with another problem in the code base, and will subsequently be explained more in detail. Use GitHub's your IDE's diff editor to view the changes commit by commit.

## Commits

## Further reading
* [TypeScript Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) explains basic ways to create new types from existing ones, for example Union Types, Literal Types, and Type Guards.
* [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) are another way to modify existing types. Examples are `Pick`, `Partial`, and `ReturnType`.
* [This blog post on how to set up a redux application](https://levelup.gitconnected.com/set-up-a-typescript-react-redux-project-35d65f14b869) loosely follows the [Ducks pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks). By bundling redux code by feature (user, product...) instead of splitting it by type (action, reducer...), ducks makes it easier to keep redux strongly typed.

