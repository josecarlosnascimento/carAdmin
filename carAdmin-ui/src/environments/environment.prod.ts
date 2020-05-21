export const environment = {
  production: true,

  apiUrl: 'http://34.72.159.8:8080',

  tokenWhitelistedDomains: [ new RegExp('http://34.72.159.8:8080') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
