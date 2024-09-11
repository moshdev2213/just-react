# CI/CD With GitHub Actions, Azure Container Registry, and Azure App Service

This project automates the deployment process using GitHub Actions for continuous integration and continuous deployment (CI/CD). The Docker image is built and pushed to **Azure Container Registry (ACR)**, from where it is deployed to **Azure App Service**.

 This diagram visually explains the flow from GitHub to Azure App Service using Docker containers stored in Azure Container Registry.

<img width="1152" alt="acr drawio (2) 1" src="https://github.com/user-attachments/assets/2499f6e7-6522-46dd-a31f-00a684182c40">


## 📊 Architecture Overview

The architecture follows a streamlined CI/CD pipeline:

1. **GitHub**: Hosts the source code.
2. **GitHub Actions**: Automates the building and pushing of Docker images.
3. **Azure Container Registry (ACR)**: Stores the Docker images.
4. **Azure App Service**: Pulls the images from ACR and deploys them.

### Architecture Flow:
- **Code Push** ➡️ GitHub triggers GitHub Actions.
- **Build & Push Docker Image** ➡️ Docker image is built and pushed to ACR.
- **Deploy** ➡️ Azure App Service pulls the latest image from ACR and deploys it.

### CI/CD Workflow Steps:

| Step                       | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| **1. Code Push**            | Code pushed to the `master` branch triggers the CI/CD workflow in GitHub Actions. |
| **2. Build Docker Image**   | GitHub Actions builds a Docker image from the codebase.                     |
| **3. Push to ACR**          | The built image is pushed to **Azure Container Registry** for storage.      |
| **4. Deploy to App Service**| Azure App Service pulls the image from ACR and redeploys the app.           |
| **5. Build Summary**        | GitHub Actions generates a summary for the completed build and deployment.  |

### 🔗 Component Overview

| Component                    | Description                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| **GitHub**                    | The source control platform where code is stored and updated.                                        |
| **GitHub Actions**            | The CI/CD pipeline that automates building, pushing, and deploying the Docker image.                 |
| **Docker**                    | A platform used to build the application into a containerized image.                                 |
| **Azure Container Registry**  | Stores the Docker image for future deployments.                                                      |
| **Azure App Service**         | Hosts the application and pulls the latest Docker image from ACR for deployment.                     |

## ⚙️ Deployment Workflow

1. **Code Push**: When you push code to the `master` branch, the CI/CD workflow is triggered.
2. **GitHub Actions**: Automatically builds the Docker image and pushes it to ACR.
3. **Azure App Service**: Fetches the latest image from ACR and deploys it.

### 🚀 Key Benefits of this CI/CD Setup:

- **Automated Deployment**: No need for manual deployment, every push to `master` results in an automated build and deployment.
- **Scalable**: With Azure App Service, you can easily scale your app without changing the pipeline.
- **Versioned Docker Images**: Each build is tagged with a unique Git commit SHA to maintain versioning.
- **Containerized Workflow**: Leveraging Docker ensures consistency between development and production environments.

## 👨‍💻 How to Use

1. **Clone the repository** and push your code changes to the `master` branch.
2. The GitHub Actions pipeline will automatically build and push the Docker image to ACR.
3. Azure App Service will pull the latest image and redeploy the app.
4. You can view the build summary in the GitHub Actions page for every commit.

