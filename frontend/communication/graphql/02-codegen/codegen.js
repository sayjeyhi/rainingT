module.exports = {
  schema: [
    {
      'https://URL/v1/graphql': {
        headers: {
          Authorization: 'Bearer ' + process.env.JWT,
          'X-Hasura-Role': 'editor',
        },
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/index.ts': {
      plugins: [
        {
          add: {
            content: '/* AUTO_GENERATED FILE, DO NOT CHANGE */'
          }
        },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        noNamespaces: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
      hooks: {
        afterOneFileWrite: 'prettier --write src/generated/index.ts'
      }
    },
    './schema.json': {
      plugins: ['introspection'],
    },
  },
};
