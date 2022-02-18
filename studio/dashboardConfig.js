export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620f435f8e97ad01ebdd88bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8peu4s7z',
                  apiId: '442f3b80-386f-4e51-811f-a43dcd17c861'
                },
                {
                  buildHookId: '620f435faa79daf2fbc42a9b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bn1fj7md',
                  apiId: 'e5096e40-9881-4013-b9ad-df1769586024'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/binhthaitrinh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bn1fj7md.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
