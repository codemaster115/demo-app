# GraphQL

This project uses `@apollo/client`. It also uses the toolkit, `graphql-codegen`, to generate graphql boilerplate (types, enums, named queries/mutations/subscriptions) from the graph schema.

[Insomnia](https://insomnia.rest/download) is a helpful API development software. With the free version, Collections cannot be shared between accounts; contact a member of the team for their Collection + more info on setup day to day use.

## Code Generation

The `yarn` script, `codegen`, is what triggers the main cli command provided by `graphql-codegen` using the configuration contents located in [graphql.config.js](../graphql.config.js). Per [graphql.config.js](../graphql.config.js), the output can be found at [src/services/graphql/generated/index.ts](../src/services/graphql/generated/index.ts).

Whenever you want to autogenerate code for React hooks to be used with a new operation (`query`, `mutation`, `subscription`, or `fragment`), you'll need to use the contents of [src/services/graphql/generated/index.ts](../src/services/graphql/generated/index.ts) to write a new operation.

## Adding a Query, Mutation, or Subscription

1. Add a `*.graphql` file in the appropriate directory. For example, `queries.graphql`
2. Run `yarn codegen`

### Query Example

Here is a step-by-step example for how the `GetAccountOpenDate` query was added to arrive at the autogenerated `useGetAccountOpenDateQuery` hook.

Note that this example goes through the manual process. There is excellent GraphQL support for our development environment. If using VSCode, checkout [extensions.json](../.vscode/extensions.json) which includes many helpful VSCode extension recommendations.

In order for these extensions to work, be sure the `postinstall` script is successful. This writes a `.env` file, based on `.env.template.yaml`, which is then used, in `graphql.config.js`, to inject the `process` with env variables.

#### Step 1

Search [src/services/graphql/generated/index.ts](../src/services/graphql/generated/index.ts) for `type Query`. You will find these code blocks:

```typescript
export type Query = {
  __typename?: "Query";
  account: Account;
  //...
};
```

This tells us that there exists a query called `account` with queryable fields listed in the `Account` type.

#### Step 2

Based on what we've learned from `Step 1` above, we can declare the outline of our mutation in a file, [src/services/graphql/account/queries.graphql](../src/services/graphql/account/queries.graphql):

```graphql
query GetAccountOpenDate {
  account {
    accountOpenDate
  }
}
```

Note: This can be done with autocompletion in VSCode, Insomnia, or another environment you're comfortable using.

This means:

- we're querying `account`
- we're requesting `accountOpenDate` to be returned

#### Step 3

Run `yarn codegen` and note the newly-generated output:

- `useGetAccountOpenDateQuery` hook
- `useGetAccountOpenDateLazyQuery` hook
- associated typings
- comments detailing how to use the hooks

```typescript
export type GetAccountOpenDateQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountOpenDateQuery = {
  __typename?: "Query";
  account: { __typename?: "Account"; accountOpenDate: any };
};

export const GetAccountOpenDateDocument = gql`
  query GetAccountOpenDate {
    account {
      accountOpenDate
    }
  }
`;

/**
 * __useGetAccountOpenDateQuery__
 *
 * To run a query within a React component, call `useGetAccountOpenDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountOpenDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountOpenDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountOpenDateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountOpenDateQuery,
    GetAccountOpenDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountOpenDateQuery, GetAccountOpenDateQueryVariables>(
    GetAccountOpenDateDocument,
    options,
  );
}
export function useGetAccountOpenDateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountOpenDateQuery,
    GetAccountOpenDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountOpenDateQuery, GetAccountOpenDateQueryVariables>(
    GetAccountOpenDateDocument,
    options,
  );
}
export type GetAccountOpenDateQueryHookResult = ReturnType<
  typeof useGetAccountOpenDateQuery
>;
export type GetAccountOpenDateLazyQueryHookResult = ReturnType<
  typeof useGetAccountOpenDateLazyQuery
>;
export type GetAccountOpenDateQueryResult = Apollo.QueryResult<
  GetAccountOpenDateQuery,
  GetAccountOpenDateQueryVariables
>;
```
