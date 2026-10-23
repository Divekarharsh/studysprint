pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Run Automated Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'StudySprint checks and tests completed successfully.'
        }
        failure {
            echo 'The pipeline failed. Review the console output and fix the reported issue.'
        }
    }
}
