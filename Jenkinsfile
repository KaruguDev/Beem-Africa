pipeline {
  agent any
  stages {
    stage('Install Libraries') {
      steps {
        sh '''echo $USER
docker -v
apt install npm
npm install'''
      }
    }

  }
}