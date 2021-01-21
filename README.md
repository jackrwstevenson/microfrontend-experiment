microfrontend-experiment
=====

Experiment using [Module Federation](https://webpack.js.org/concepts/module-federation/) to load two distinct microfrontends within a single container

# Build & Run

In separate terminal sessions...

```sh
cd microfrontend-a && yarn && yarn start
cd microfrontend-b && yarn && yarn start
cd microfrontend-container && yarn && yarn start
```

# Acknowledgments

[Practical Module Federation](https://module-federation.github.io/) for guidance
