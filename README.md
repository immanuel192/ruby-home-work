[![Coverage Status](https://coveralls.io/repos/github/immanuel192/ruby-home-work/badge.svg?branch=master)](https://coveralls.io/github/immanuel192/ruby-home-work?branch=master)

# ruby-home-work
Code clone from https://github.com/framework7io/framework7-appstore-react

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit

```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Release

Release flow:
- Any changes to `master` will deploy to DEV
- To release PROD, run `release` task on `master` branch

```
# Make sure you configured GH_TOKEN / GITHUB_TOKEN in your shell
# 
git checkout master
git pull
npm run release
```

