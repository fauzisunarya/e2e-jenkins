pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/1-getting-started/**.cy.js", description: "modul getting started")
        choice(name: 'BROWSER', choice: ['chrome','edge','firefox'], description: "Pilih browsernya")
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
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                    echo "Deploy the application"

            }
        }
    }
}