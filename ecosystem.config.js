module.exports = {
  apps: [{
    name: 'nodejs-app',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-145-187-124.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/nodejs-server.pem',
      ref: 'origin/main',
      repo: 'git@github.com:caseymcspadden/nodejs-app.git',
      path: '/home/ubuntu/nodejs-app',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}