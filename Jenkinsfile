pipeline{
    agent any

    environment {
        // Mendapatkan credential berisi JSON dari Jenkins
        CYPRESS_ENV = credentials('CYPRESS_ENV')
    }

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
                // Membuat file cypress.env.json dari credential
                    writeFile file: 'cypress.env.json', text: "${CYPRESS_ENV}"
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
        success { 
            
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        // always{
        //     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        // }
    }
}
