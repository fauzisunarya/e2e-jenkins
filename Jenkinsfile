pipeline{
    agent any

    parameters{
        string(name: 'MODULE', defaultValue: "1-getting-started", description: "Pilih Module")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Pilih Browser")
    }

    options{
        ansiColor('xterm')
    } 

    stages{
        stage('Building'){
            steps{
                    echo "Building application"

            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --config-file partial_cypress/${MODULE}/cypress.config.js"
            }
        }
        stage('Deploying'){
            steps{
                    echo "Deploy the application"

            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}