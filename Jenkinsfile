pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Install Libraries') {
      steps {
        sh '''echo installing libraries...

npm install'''
      }
    }

  }
}