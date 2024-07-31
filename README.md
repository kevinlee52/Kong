# Kong

🚀 About

This is a quick demo to implement Cypress + Javascript testcases to simulate user interaction with Kong Manager UI.
Testcases include: 1. Create a new service. 2. Create a new route associate that service. 3. Delete new created route. 4. Delete new created service to recover environment to origin

Local setup and execution:

1. Make sure docker has been installed, and up&running on your local.
2. Pull the code from this git repo(main branch).
3. cd into root folder ...{your workspace}/Kong/
4. Execute "docker-compose up -d"
5. Navigate to http://localhost:8002/ in your browser
6. Make sure you can access the Kong Gateway UI (Kong Manager)
7. Execute "npx cypress open" if you want test with Cypress UI.
8. Or Execute "npx cypress run" if you only want a test result output in your terminal.

This demo project has been integrated with Github actions.
Whenever new code has been pushed to this repo, an automated CI run will be triggered! Check below historical auto runs:
https://github.com/kevinlee52/Kong/actions
