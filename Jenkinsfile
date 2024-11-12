pipeline{
    agent any

    // environment {
    //     // Mendapatkan credential berisi JSON dari Jenkins
    //     CYPRESS_ENV = credentials('CYPRESS_ENV')
    // }

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
                    // writeFile file: 'cypress.env.json', text: CYPRESS_ENV

                    echo "Building application"

            }
        }
        stage('Testing'){
            // steps{
            //     bat 'ls -l cypress.env.json'
            //     bat 'type cypress.env.json'
            //     bat 'copy %CYPRESS_ENV% %WORKSPACE%\\cypress.env.json'
            //     bat "npm i"
            //     bat "npx cypress run --browser ${BROWSER} --config-file partial_cypress/${MODULE}/cypress.config.js cypress.env.json"
            // }
            steps {
                // Menggunakan kredensial yang telah diatur di Jenkins dengan ID 'CYPRESS_ENV_JSON'
                withCredentials([file(credentialsId: 'CYPRESS_ENV', variable: 'CYPRESS_ENV_FILE')]) {
                    script {
                        // Membaca isi dari file cypress.env.json yang disimpan di kredensial Jenkins
                        def envData = readJSON file: env.CYPRESS_ENV_FILE
                        
                        // Mengonversi data JSON ke format yang bisa digunakan di perintah Cypress
                        env.CYPRESS_ENV_STRING = envData.collect { key, value -> "${key}=${value}" }.join(',')
                        bat "npx cypress run --browser ${BROWSER} --config-file partial_cypress/${MODULE}/cypress.config.js --env ${env.CYPRESS_ENV_STRING}"
                        // bat "npm run merge_reports"
                        // bat "npm run mochawesome_report"

                    }
                }
            }
        
        }
        stage('Deploying'){
            steps{
                    echo "Deploy the application"

            }
        }
    }

    post {
    always {
        publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: false,
            reportDir: 'cypress/reports/',
            reportFiles: 'index.html',
            reportName: 'HTML Report',
            reportTitles: '',
            useWrapperFileDirectly: true
        ])
    }
}
}
