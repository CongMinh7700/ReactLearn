module.exports = {
  apps: [
    {
      name: "ReactLearn",
      script: "serve",
      args: "-s build -l 3001",
      env: { NODE_ENV: "production" },
    },
  ],
};