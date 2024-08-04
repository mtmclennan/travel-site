module.exports = {
  apps: [
    {
      name: "business-site",
      script: "npm",
      args: "start",
      cwd: "./apps/business-site",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "travel-site",
      script: "npm",
      args: "start",
      cwd: "./apps/travel-site",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "bellhouse",
      script: "npm",
      args: "start",
      cwd: "./apps/Bellhouse-basic/frontend",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
