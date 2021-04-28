pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:buster-slim'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Building....'
      }
    }

    stage('Merge Request') {
      steps {
        sh '''git checkout master

#Merge it with pull request (insert your pull id)
git merge --no-ff pull/ID/head:develop

#Push merged information back to git
git push origin master'''
      }
    }

  }
}