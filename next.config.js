const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "eduardopereyra",
        mongodb_password: "68Wc7asiPqM6Z9qz",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "eduardopereyra",
      mongodb_password: "68Wc7asiPqM6Z9qz",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
