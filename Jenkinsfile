pipeline {
  agent any
  stages {
    stage('Add Node') {
      steps {
        dockerNode(image: 'node:lts-buster-slim')
      }
    }

  }
}