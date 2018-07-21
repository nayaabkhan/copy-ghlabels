// Instantiate
var copyGitHubLabels = require('copy-github-labels')();

// Optionally use credentials
copyGitHubLabels.authenticate({
  type: "oauth",
  token: 'd08d0dd98f94b6e50e9985a2aee063c97ff2d036',
  dryRun: true
});

// Copy labels from one repository to another
copyGitHubLabels.copy('StarOfService/aurora', 'StarOfService/prism');
