export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dba24644e5db4cb457b3af0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-heqxm4cu',
                  apiId: 'c10906cb-4282-456d-a3a7-f79171dfaba2'
                },
                {
                  buildHookId: '5dba24649412e459adab4988',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-182wzq83',
                  apiId: '7cac648f-8bda-4e7d-919c-ecf9a18acd12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikecrittenden/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-182wzq83.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
