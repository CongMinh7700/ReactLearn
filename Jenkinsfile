pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\\Program Files\\nodejs' // sửa 'Program File' → 'Program Files'
        YARN_HOME = 'C:\\Users\\Deployer\\AppData\\Roaming\\npm' // sửa 'Program File' → 'Program Files'
        PATH = "${NODEJS_HOME};${YARN_HOME};${env.PATH}"
    }

    stages {
        stage('Clone Source') {
            steps {
                git credentialsId: 'CongMinh7700', url: 'https://github.com/CongMinh7700/ReactLearn.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'yarn'
            }
        }

        stage('Build') {
            steps {
                bat 'yarn build'
            }
        }
    }
}
