module.exports = {
  apps: [
    {
      name: "ReactLearn",
      script: "serve",
      args: "-s build -l 000:3001",
      env: { NODE_ENV: "production" },
    },
  ],
};