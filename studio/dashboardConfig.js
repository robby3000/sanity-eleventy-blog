export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '607a061c1d8fad00b35fa73b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1jh2g9ym',
                  apiId: 'd9cdfce1-2346-49ec-884e-c43fd32a4917'
                },
                {
                  buildHookId: '607a061c62e58315ffbaef9c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-uodn5uh1',
                  apiId: '9146d63a-c7e8-4619-8d44-c1bdfda03c0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robby3000/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-uodn5uh1.netlify.app', category: 'apps'}
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
