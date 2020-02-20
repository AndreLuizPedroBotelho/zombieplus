pipeline{
   agent {
       docker { 
           image "andredede/node-wd"
           args  "--network=dockerwork_projeto-network"     
       }
   } 
   stages {
       stage('Build'){
           steps {
                sh "npm install"
           }
       }
       stage('Tests'){
           steps {
                sh "npm run test:ci"
           }
       }
   }
}