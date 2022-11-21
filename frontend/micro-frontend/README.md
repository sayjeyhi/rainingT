# Micro-frontend

To create an app already setted up with Micro frontend structure we can run
```bash
pnpx create-mf-app
```
then answer the questions and create the apps. It will configure the great
webpack 5 plugin called `module federation` and we can use it to export
some of the components from main app and use it on other apps.

### Notes:
- Yes, we can use same react version for all of the apps with this plugin
- Yes, it supports lazy loading
- For safety we can create a component called `SafeComponent` and wrap our remote components inside of it.
- If the app goes down we need to handle it.

### Libraries
- single spa
- bit.dev
