pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\\Program Files\\nodejs' // sửa 'Program File' → 'Program Files'
        YARN_HOME = 'C:\\Users\\Deployer\\AppData\\Roaming\\npm' // sửa 'Program File' → 'Program Files'
        PATH = "${NODEJS_HOME};${YARN_HOME};${env.PATH}"
        DEPLOY_PATH = 'ReactLearn/ui-web_publish'
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
            environment {
                CI = 'false'
            }
            steps {
                bat 'yarn build'
            }
        }

        stage('Archive Build') {
            environment {
                CI = 'false'
            }
            steps {
                bat 'tar -czf build.tar.gz .next public package.json ecosystem.config.js'
            }
        }

        stage('Deploy') {
            environment {
                CI = 'false'
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'UbtService01',
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: 'build.tar.gz',
                                        removePrefix: '',
                                        remoteDirectory: "${env.DEPLOY_PATH}",
                                        execCommand: """
                                            cd ${env.DEPLOY_PATH} &&
                                            tar -xzf build.tar.gz &&
                                            rm build.tar.gz &&
                                            yarn install --production &&
                                            pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
                                        """.stripIndent(),
                                        execTimeout: 120000
                                    )
                                ],
                                usePromotionTimestamp: false,
                                verbose: true
                            )
                        ]
                    )
                }
            }
        }
    }
}
