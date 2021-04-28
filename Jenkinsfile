pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building....'
      }
    }

    stage('Merge Request') {
      steps {
        sh '''git fetch
git checkout -b master

#Merge it with pull request (insert your pull id)
git merge --no-ff pull/ID/head:develop

#Push merged information back to git
git push origin master'''
      }
    }

  }
}