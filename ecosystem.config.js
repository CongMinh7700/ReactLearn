module.exports = {
  apps: [
    {
      name: "ReactLearn",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
