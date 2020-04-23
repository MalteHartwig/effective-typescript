This project is supposed to illustrate several caveats of improper use of TypeScript and how to overcome them. Since TypeScript eventually just runs JavaScript, insufficient type-safety can introduce subtle bug. In addition, lacking compiler support can lead to dead code accumulating. 

Each additional commit deals with another problem in the code base, and will subsequently be explained more in detail. Use GitHub's your IDE's diff editor to view the changes commit by commit.

## Commits

### Add return type to mapping functions of `Login` component

The functions mapping state and dispatch to `LoginProps` do not have explicitly defined return types. This prevents the compiler from notifying us a piece of deprecated code:
1. An easy solution is adding `Partial<LoginProps>` as a return type to both methods. This would would cause a compiler error on `environment` being mapped in `mapStateToProps` as it is not defined in `LoginProps`. While easy, it is still insufficient because you could map dispatch props in the state mapper and vice versa.
2. The better solution is to split the definition of `LoginProps` in separate types, joining them together afterwards. `LoginStateProps` and `LoginDispatchProps` can then serve as specific return types for the mappers.
3. Realising that `environment` is now injected via context, we can proceed to delete it from the redux state altogether!

## Further reading
* [TypeScript Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) explains basic ways to create new types from existing ones, for example Union Types, Literal Types, and Type Guards.
* [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) are another way to modify existing types. Examples are `Pick`, `Partial`, and `ReturnType`.
* [This blog post on how to set up a redux application](https://levelup.gitconnected.com/set-up-a-typescript-react-redux-project-35d65f14b869) loosely follows the [Ducks pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks). By bundling redux code by feature (user, product...) instead of splitting it by type (action, reducer...), ducks makes it easier to keep redux strongly typed.

