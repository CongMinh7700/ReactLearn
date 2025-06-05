module.exports = {
  apps: [
    {
      name: "ReactLearn",
      script: "/usr/bin/serve",
      args: "-s build --listen=3001",
      env: { NODE_ENV: "production" },
    },
  ],
};