pipeline {
  agent any
  stages {
    stage('Install Libraries') {
      steps {
        sh '''su - root
apt install npm
npm install'''
      }
    }

  }
}