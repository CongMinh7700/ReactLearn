module.exports = {
  apps: [
    {
      name: "ReactLearn",
      script: "/usr/bin/serve",
      args: "-s build -l 0.0.0.0:3001",
      env: { NODE_ENV: "production" },
    },
  ],
};