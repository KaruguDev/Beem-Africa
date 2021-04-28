pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'Building....'
          }
        }

        stage('Installation of Modules') {
          steps {
            sh 'npm install'
          }
        }

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