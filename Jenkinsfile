pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:12.0-slim'
    }

  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:lts-buster-slim'
          args '-p 3000:3000'
        }

      }
      steps {
        sh 'npm install'
      }
    }

  }
}