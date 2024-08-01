# Kong Gateway Services Test Demo

## 🚀 About

This is a quick demo project for implementing Cypress + Javascript testcases to simulate user interaction with Kong Manager UI.

## 📝 Testcases:

1. Create a new service.
2. Create a new route associated with that service.
3. Delete created route.
4. Delete created service to recover environment.

## 📚 Local setup and testcases execution:

1. Open a terminal (Command Prompt or PowerShell for Windows, Terminal for macOS or Linux)， or your IDE(eg:VScode)
2. Make sure docker has been installed, and service is up and running on your local.
3. Clone the repository: "git clone https://github.com/kevinlee52/Kong.git"
4. Navigate to the project directory: "cd Kong"
5. Execute "npm install"
6. Execute "docker-compose up -d"
7. Navigate to http://localhost:8002/ in your browser. Make sure you can access the Kong Gateway UI (Kong Manager)
8. Execute "npx cypress open" if you want test with Cypress UI, or Execute "npx cypress run" if you only need a test result in your terminal.

## 🤝 CI/CD

This demo project has been integrated with Github actions.
Whenever new code has been pushed, an automated CI run will be triggered! Check below historical auto CI runs:
https://github.com/kevinlee52/Kong/actions

### Design considerations:

    Setup & Teardown:
        1. "docker-compose.yml" file has been added under root folder for quick setup.
        2. "docker-compose up -d" execution has been integrated in github actions for quick CI.
        3. "docker-compose down" execution has been integrated in github actions after testcases finished.

    Testcases:
        1. To keep environment clean and simple, I added "delete route" and "delete service" testcases.
        2. This can also make github action CI can run in a stable conditions, we don't need to write code to generate services with random names(service with same name will fail the testcase).
        3. For testcase coverage improvement, we can add more complicated input or unexpected input for testcase robustness.

    Todo:
        1. For test report, we can implement with Mochawecome or Allure

### Assumptions:

        1. Service list is empty and no existing service named "mock_service".
        2. Route list is empty and no existing route named "mock_route".

### Trade-offs:

        1. Keep the logic simplicity for a quick demo. Need to conside more complex conditions for improving testcase robustness.
        2. Need to update code logic to handle slow network speed or low CPU/Memory.
