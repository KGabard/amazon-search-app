// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: ['src/schema.graphql', 'directives.graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}', 'my/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://graphql.canopyapi.co/',
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CANOPY_API_TOKEN}` },
          },
        },
      },
    },
    db: {
      schema: 'src/generated/db.graphql',
      documents: ['src/db/**/*.graphql', 'my/fragments.graphql'],
      extensions: {
        codegen: [
          {
            generator: 'graphql-binding',
            language: 'typescript',
            output: {
              binding: 'src/generated/db.ts',
            },
          },
        ],
        endpoints: {
          default: {
            url: 'https://graphql.canopyapi.co/',
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CANOPY_API_TOKEN}` },
          },
        },
      },
    },
  },
}
