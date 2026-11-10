# Inkeep-Agents_Docs - Deployment

**Pages:** 12

---

## Build a Custom Docker Image - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/docker-build

**Contents:**
- Build a Custom Docker Image

How to build your own Docker images

If you created a project from the quick start, the template includes a set of Dockerfiles and docker-compose.yml files.

To build and run locally:

Deploy to Hetzner with Docker Compose

Set up authentication and authorization for user sign-in and team management

**Examples:**

Example 1 (unknown):
```unknown
docker compose build
docker compose up -d
```

---

## Deploy to Azure VM - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/azure-vm

**Contents:**
- Deploy to Azure VM
- Create a VM Instance
- Install Docker Compose
- Deploy SigNoz and Nango
  - Retrieve your SigNoz and Nango API Keys
- Deploy the Inkeep Agent Framework
- Production
  - Application Gateway
  - Front Door
  - Restrict VM Access

Deploy to Azure VM with Docker Compose

Set up Docker's apt repository

Clone this repo, which includes Docker files with SigNoz and Nango:

Run this command to autogenerate a .env file from the template .env.docker.example:

Nango requires a NANGO_ENCRYPTION_KEY. Once you create this, it cannot be edited.

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

Build and deploy SigNoz, Nango, OTEL Collector, and Jaeger:

This may take up to 5 minutes to start.

To get your SigNoz API key SIGNOZ_API_KEY:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

To get your Nango secret key NANGO_SECRET_KEY:

From the root directory, create a new project directory for the Docker Compose setup for the Inkeep Agent Framework

Generate a .env file from the example:

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

For long-running agents or custom deployment requirements, you can override runtime limits like execution timeouts, maximum transfers, and generation steps. See Configure Runtime Limits for examples and the complete list of overridable settings.

Then open http://<vm_ip>:3000 in a browser!

For a production deployment, you will want to restrict access to the VM and only expose 3002. To do this, we'll setup an Application Gateway and a Front Door (with https).

To upgrade the Inkeep Agent Platform to the latest version, run the following commands:

These commands replace your Docker Compose file with the latest version, pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

To upgrade Signoz and Nango, run the following commands:

These commands pull the latest changes from the repository (including the Docker Compose file), pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

Deploy to AWS EC2 with Docker Compose

Deploy to GCP Compute Engine with Docker Compose

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

Example 2 (unknown):
```unknown
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Example 3 (bash):
```bash
sudo usermod -aG docker $USER
newgrp docker
```

Example 4 (unknown):
```unknown
git clone https://github.com/inkeep/agents-optional-local-dev inkeep-external-services
cd inkeep-external-services
```

---

## Datadog - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/add-other-services/datadog-apm

**Contents:**
- Datadog
- Overview
- Step 1: Install Datadog APM
- Step 2: Set up tracer.ts
- Additional Resources
  - On this page

Add Datadog APM to your Inkeep Agent Framework services

Learn how to add Datadog APM to your Inkeep Agent Framework services.

From the root of your workspace, run the following command:

In apps/agents-api create a new file called tracer.ts and add the following code:

In apps/run-api/src/index.ts and apps/manage-api/src/index.ts add the following code to the top of the file before all other imports:

For more information on how to configure APM, you can consult the official Datadog Node.js documentation.

Add Sentry monitoring to your agent services

Join the Inkeep community on Slack, GitHub, and social media for support, updates, and collaboration.

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
pnpm install dd-trace
```

Example 2 (sql):
```sql
import tracer from "dd-trace";
tracer.init(); // initialized in a different file to avoid hoisting.
export default tracer;
```

Example 3 (unknown):
```unknown
import "./tracer";
```

---

## Get Started with Inkeep Enterprise - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/inkeep-enterprise/get-started

**Contents:**
- Get Started with Inkeep Enterprise
- Overview
  - Prerequisites
  - Step 1: Login using your credentials
  - Step 2: Enter a project
  - Step 3: Inspect the project
  - Step 4: Build your agent
  - Step 5: Try the agent
  - Step 6: Edit the agent
  - Next Steps

Get started with Inkeep Enterprise

With Inkeep Enterprise, we manage the infrastructure for you so you can focus on building your agents. This guide walks you through building your first agent in the Inkeep Enterprise Visual Builder.

Once you're logged in, you'll be redirected to the Inkeep Enterprise project overview page. If you are part of a team, you might see a list of existing projects like this:

If you are part of a team, click into the project your team has created. If you are not part of a team, you can create a new project by clicking the "Create Project" button.

Once you're in the project, you'll see the project overview page. You can see the list of agents that are part of the project.

In the MCP Servers section, you can see the list of MCP servers that are part of the project:

MCP servers are the tools that your agents can use to interact with external APIs and services.

Notice the Inkeep Enterprise Search MCP server, part of Inkeep's Enterprise offering. It allows your agent to connect to 25+ data sources to create a unified knowledge base that your agents can access.

Back on the agent overview page, click Create Agent. Name the agent Knowledge agent.

Inkeep will prompt you to build your agent using natural language. Let's ask Inkeep to build a knowledge agent that can answer questions about your knowledge base:

Once Inkeep has built your agent, try it out by clicking the "Try it" button.

You can edit your agent by dragging new sub agents and tools onto the canvas. Add a web search sub agent and connect it to the knowledge agent so it can delegate requests that require current information.

Learn how to build a meeting prep agent that can help you prepare for meetings by researching the company and creating a meeting outline.

Operations for managing Slack workspaces

Configure the Inkeep Content Writer agent and trigger it from GitHub and Zendesk.

Tell us how this can be better.

---

## Deploy to AWS EC2 - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/aws-ec2

**Contents:**
- Deploy to AWS EC2
- Create a VM Instance
- Install Docker Compose
- Deploy SigNoz and Nango
  - Retrieve your SigNoz and Nango API Keys
- Deploy the Inkeep Agent Framework
- Upgrading
  - Upgrading the Inkeep Agent Platform
  - Upgrading SigNoz and Nango
  - On this page

Deploy to AWS EC2 with Docker Compose

SSH into the EC2 Instance

Clone this repo, which includes Docker files with SigNoz and Nango:

Run this command to autogenerate a .env file from the template .env.docker.example:

Nango requires a NANGO_ENCRYPTION_KEY. Once you create this, it cannot be edited.

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

Build and deploy SigNoz, Nango, OTEL Collector, and Jaeger:

This may take up to 5 minutes to start.

To get your SigNoz API key SIGNOZ_API_KEY:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

To get your Nango secret key NANGO_SECRET_KEY:

From the root directory, create a new project directory for the Docker Compose setup for the Inkeep Agent Framework

Generate a .env file from the example:

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

For long-running agents or custom deployment requirements, you can override runtime limits like execution timeouts, maximum transfers, and generation steps. See Configure Runtime Limits for examples and the complete list of overridable settings.

Then open http://<vm_ip>:3000 in a browser!

To upgrade the Inkeep Agent Platform to the latest version, run the following commands:

These commands replace your Docker Compose file with the latest version, pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

To upgrade Signoz and Nango, run the following commands:

These commands pull the latest changes from the repository (including the Docker Compose file), pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

Deploy locally with Docker Compose

Deploy to Azure VM with Docker Compose

Tell us how this can be better.

**Examples:**

Example 1 (sql):
```sql
sudo dnf update
sudo dnf install -y git
sudo dnf install -y docker
```

Example 2 (sass):
```sass
sudo mkdir -p /usr/libexec/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-$(uname -m) -o /usr/libexec/docker/cli-plugins/docker-compose
sudo chmod +x /usr/libexec/docker/cli-plugins/docker-compose
```

Example 3 (unknown):
```unknown
git clone https://github.com/inkeep/agents-optional-local-dev inkeep-external-services
cd inkeep-external-services
```

Example 4 (unknown):
```unknown
./scripts/generate-env-from-example.sh
```

---

## Deploy to Hetzner - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/hetzner

**Contents:**
- Deploy to Hetzner
- Create a server
- Install Docker Compose
- Deploy SigNoz and Nango
  - Retrieve your SigNoz and Nango API Keys
- Deploy the Inkeep Agent Framework
- Upgrading
  - Upgrading the Inkeep Agent Platform
  - Upgrading SigNoz and Nango
  - On this page

Deploy to Hetzner with Docker Compose

SSH into the server as root

Set up Docker's apt repository

Clone this repo, which includes Docker files with SigNoz and Nango:

Run this command to autogenerate a .env file from the template .env.docker.example:

Nango requires a NANGO_ENCRYPTION_KEY. Once you create this, it cannot be edited.

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

Build and deploy SigNoz, Nango, OTEL Collector, and Jaeger:

This may take up to 5 minutes to start.

To get your SigNoz API key SIGNOZ_API_KEY:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

To get your Nango secret key NANGO_SECRET_KEY:

From the root directory, create a new project directory for the Docker Compose setup for the Inkeep Agent Framework

Generate a .env file from the example:

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

For long-running agents or custom deployment requirements, you can override runtime limits like execution timeouts, maximum transfers, and generation steps. See Configure Runtime Limits for examples and the complete list of overridable settings.

Then open http://<vm_ip>:3000 in a browser!

To upgrade the Inkeep Agent Platform to the latest version, run the following commands:

These commands replace your Docker Compose file with the latest version, pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

To upgrade Signoz and Nango, run the following commands:

These commands pull the latest changes from the repository (including the Docker Compose file), pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

Deploy to GCP Compute Engine with Docker Compose

How to build your own Docker images

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

Example 2 (unknown):
```unknown
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Example 3 (unknown):
```unknown
git clone https://github.com/inkeep/agents-optional-local-dev inkeep-external-services
cd inkeep-external-services
```

Example 4 (unknown):
```unknown
./scripts/generate-env-from-example.sh
```

---

## Inkeep Content Writer - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/inkeep-enterprise/content-writer

**Contents:**
- Inkeep Content Writer
- Overview
- Customizing the Content Writer
- GitHub integration
  - Required permissions and app installation
  - Install the Inkeep GitHub app
  - Add the Content Writer workflow
  - Store the trigger URL
  - Triggering the Content Writer from GitHub
- Zendesk integration

Configure the Inkeep Content Writer agent and trigger it from GitHub and Zendesk.

The Inkeep Content Writer ensures that your documentation is comprehensive and up-to-date with the latest production changes.

Given a GitHub pull request or a solved Zendesk support ticket, the Content Writer will analyze your documentation for gaps and generate updates for you to review and publish.

You can also request documentation changes directly from Slack by mentioning @inkeep.

The Inkeep team will deploy and set up the Content Writer in your Inkeep Enterprise tenant. Once set up, you can fully customize the agent to fit your needs.

Customization options include:

Use the GitHub integration to trigger the Content Writer on merged pull requests or when you mention @inkeep in a pull request comment or review.

To use Content Writer with GitHub, install the GitHub Work App and grant it access to the necessary repositories. You must be a GitHub admin to install the GitHub Work App.

The GitHub App requests the following permissions:

Follow the steps below to install and configure the GitHub Work App.

From app.inkeep.com/<your-tenant-id>/work-apps/github, click Connect GitHub Organization.

Add the following workflow to each repository where you want comment-based or merge-based triggers.

Add the Content Writer trigger URL to your repository secrets as INKEEP_CONTENT_WRITER_TRIGGER_URL. The trigger URL can be found at https://app.inkeep.com/<your-tenant-id>/projects/content-writer/triggers?tab=webhooks.

The workflow triggers the Content Writer in the following cases:

The Inkeep team can help you customize the GitHub workflow to fit your needs.

Use the Zendesk integration to trigger the Content Writer from support tickets.

Create a custom Zendesk role for the service account that the Content Writer will use.

In Zendesk Admin Center, go to People → Roles.

Select these Support permissions for the Content Writer service account role:

Create a Zendesk team member that Content Writer will use to access ticket data.

In Zendesk Admin Center, go to People → Team members.

Click Add team member.

Create a new user with a shared email address, such as support-bot@yourcompany.com.

Set the Support role to the custom service account role you created.

Add the Zendesk service account to the groups that contain the tickets Content Writer should be able to read.

In Zendesk Admin Center, go to People → Groups.

Add the service account to each group that Content Writer should access.

Create an API token for the Zendesk service account.

In Zendesk Admin Center, go to Apps and integrations → APIs → API tokens.

Click Add API token and name it something like Inkeep Content Writer Integration.

Click Save, then copy and store the token. Zendesk will not show the full token again after you leave the page.

Connect the Zendesk service account token to the Zendesk MCP server in Inkeep.

Log in to Inkeep Enterprise and open your Content Writer project.

In the left-hand menu, click Credentials → New → Bearer Authentication.

Check Link this credential to an MCP server, then select the Zendesk MCP server from the dropdown.

Create a Zendesk webhook that sends ticket updates to the Content Writer.

In Zendesk Admin Center, go to Apps and integrations → Webhooks. You can also search for Webhooks from Admin Center.

Click Create webhook. Under Select a way to connect, choose Trigger or automation.

Click Create webhook.

Open the new webhook, find Secret key, click Reveal secret, and send it to the Inkeep team through your shared secure credential store.

In the following example, the trigger is configured to send solved tickets with the inkeep_content_writer tag to the Content Writer. The Inkeep team can help you customize the trigger to fit your needs.

Set Trigger Category to Notifications.

Under Conditions, configure the trigger to meet ALL of these conditions:

This trigger runs when a ticket is solved and the inkeep_content_writer tag is present.

Under Actions, add Notify by → Active webhook, then select the webhook you created.

In the webhook payload body, paste:

Click Create to enable the trigger.

Get started with Inkeep Enterprise

Deploy the Inkeep Agent Framework to Vercel

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
name: Inkeep Content Writer

on:
  pull_request:
    types: [closed]
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  pull_request_review:
    types: [submitted]

permissions:
  contents: read
  pull-requests: write
  id-token: write

jobs:
  trigger-agent:
    if: |
      (github.event_name == 'pull_request' && github.event.pull_request.merged == true && github.event.pull_request.user.login != 'inkeep[bot]') ||
      (
        (github.event_name == 'issue_comment' && github.event.issue.pull_request && contains(github.event.comment.body, '@inkeep') &&
         (github.event.comment.author_association == 'OWNER' || github.event.comment.author_association == 'MEMBER' || github.event.comment.author_association == 'COLLABORATOR')) ||
        (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@inkeep') &&
         (github.event.comment.author_association == 'OWNER' || github.event.comment.author_association == 'MEMBER' || github.event.comment.author_association == 'COLLABORATOR')) ||
        (github.event_name == 'pull_request_review' && contains(github.event.review.body || '', '@inkeep') &&
         (github.event.review.author_association == 'OWNER' || github.event.review.author_association == 'MEMBER' || github.event.review.author_association == 'COLLABORATOR'))
      )
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Inkeep Agent
        uses: inkeep/inkeep-agents-action@fbbc92842bd025f044cb7e4d827882fd85914f26
        with:
          trigger-url: ${{ secrets.INKEEP_CONTENT_WRITER_TRIGGER_URL }}
          # Filters out PRs that don't match the given regex. Update regex as desired or remove entirely
          pr-title-regex: '^(feat|fix|docs|chore)(\(.+\))?:'
```

Example 2 (json):
```json
{"ticket_id":"{{ticket.id}}"}
```

---

## Configure Email - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/email

**Contents:**
- Configure Email
- How It Works
- Environment Variables
  - Option A: Resend (Recommended for Production)
  - Option B: Generic SMTP
- Local Development with Mailpit
  - Configure environment variables
  - Start services and verify
- What Happens Without Email
- Verifying Email Configuration

Set up SMTP email for team invitations and password resets

Configure email delivery so the platform can send team invitation emails and password reset links. Without email configured, these features degrade gracefully — invitation links are shown directly in the UI and password reset is disabled.

For a feature overview of invitations and password reset, see Access Control.

The email system uses a priority-based transport selection:

Both transports require SMTP_FROM_ADDRESS to be set. If the from address is missing, email is disabled even when a transport is configured.

Resend provides a managed email delivery service with high deliverability.

When using Resend, you don't need to configure any SMTP host or port variables — the system connects to Resend's SMTP relay automatically.

Use any SMTP server (Amazon SES, SendGrid, Gmail, self-hosted Postfix, etc.).

Mailpit captures outgoing email locally without sending it to real recipients. This is the recommended setup for development and testing.

Mailpit is included in the default Docker Compose configuration. Configure the SMTP environment variables to point to it:

Open http://localhost:8025 to view the Mailpit inbox. Any emails sent by the platform (invitations, password resets) will appear here.

When email is not configured, the platform adjusts its behavior:

No errors are thrown — the UI adapts automatically based on whether email is available.

After configuring your environment variables, restart services and test:

If using Mailpit, open http://localhost:8025 to see the captured email.

This is expected behavior when email is not configured. Set up SMTP or Resend to enable email delivery.

The forgot-password page shows this when email is not configured. Configure email to enable self-service password resets.

Set up authentication and authorization for user sign-in and team management

Configure S3 for file attachment storage with presigned URL delivery

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
RESEND_API_KEY=re_your_api_key
SMTP_FROM_ADDRESS=notifications@yourdomain.com
SMTP_FROM_NAME=Inkeep
```

Example 2 (sass):
```sass
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-smtp-password
SMTP_FROM_ADDRESS=noreply@example.com
SMTP_FROM_NAME=Inkeep
```

Example 3 (lua):
```lua
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_SECURE=false
SMTP_FROM_ADDRESS=noreply@inkeep.local
SMTP_FROM_NAME=Inkeep
```

Example 4 (unknown):
```unknown
docker compose up -d
```

---

## S3 Blob Storage - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/add-other-services/s3-blob-storage

**Contents:**
- S3 Blob Storage
- Overview
- Step 1: Create an S3 Bucket
- Step 2: Create IAM Credentials
- Step 3: Configure Environment Variables
  - S3-Compatible Services
  - Optional: Presigned URL Expiry
- Storage Backend Priority
- How It Works
  - On this page

Configure S3 for file attachment storage with presigned URL delivery

The Inkeep Agent Framework stores file attachments (images, PDFs, documents) uploaded during conversations. By default, files are stored on the local filesystem. For production deployments, configure S3 (or an S3-compatible service) for durable storage with presigned URL delivery.

When S3 is configured, media URLs in conversation responses are presigned S3 URLs — clients fetch files directly from S3 with no proxy overhead. This provides:

When S3 is not configured, the framework falls back to Vercel Blob (if BLOB_READ_WRITE_TOKEN is set) or the local filesystem. Both Vercel Blob and local storage serve files through a server-side media proxy rather than presigned URLs.

Create a private S3 bucket in your preferred AWS region. No public access or special bucket policies are required — all access uses presigned URLs generated server-side.

Create an IAM user or role with the following permissions on your bucket:

Add the following to your .env file:

All four variables are required when S3 is enabled.

For S3-compatible services, set BLOB_STORAGE_S3_ENDPOINT and enable path-style access where required:

By default, presigned URLs expire after 2 hours (7200 seconds). To customize:

Accepted range: 60–604800 (1 minute to 7 days).

The framework selects a storage backend based on which environment variables are set:

Changing the storage backend after files have been uploaded will make previously stored files inaccessible. Plan your storage backend before going to production.

Set up SMTP email for team invitations and password resets

Add Sentry monitoring to your agent services

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
aws s3 mb s3://your-media-bucket --region us-east-1
```

Example 2 (json):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-media-bucket/*"
    }
  ]
}
```

Example 3 (sass):
```sass
BLOB_STORAGE_S3_BUCKET=your-media-bucket
BLOB_STORAGE_S3_REGION=us-east-1
BLOB_STORAGE_S3_ACCESS_KEY_ID=your-access-key-id
BLOB_STORAGE_S3_SECRET_ACCESS_KEY=your-secret-access-key
```

Example 4 (sass):
```sass
BLOB_STORAGE_PRESIGNED_URL_EXPIRY_SECONDS=900  # 15 minutes
```

---

## Deploy to Vercel - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/vercel

**Contents:**
- Deploy to Vercel
- Deploy to Vercel
  - Step 1: Create a GitHub repository for your project
  - Step 2: Create a Postgres Database
  - Step 3: Create a Doltgres Database
  - Step 4: Configure Database Connection
  - Step 5: Create a Vercel account
  - Step 6: Create a Vercel project for Manage API
  - Step 7: Create a Vercel project for Run API
  - Step 8: Create a Vercel project for Manage UI

Deploy the Inkeep Agent Framework to Vercel

If you do not have an Inkeep project already, follow these steps to create one. Then push your project to a repository on GitHub.

Create a Postgres database on the Vercel Marketplace or directly at Neon.

Create a Doltgres database at DoltHub.

Set your database connection string as an environment variable:

Sign up for a Vercel account here.

The Framework Preset should be "Hono" and the Root Directory should be apps/manage-api.

Required environment variables for Manage API:

The Framework Preset should be "Hono" and the Root Directory should be apps/run-api.

Required environment variables for Run API:

The Framework Preset should be "Next.js" and the Root Directory should be apps/manage-ui.

Required environment variables for Manage UI:

To prevent anyone from being able to access the UI, we recommend enabling Vercel authentication for all deployments: Settings > Deployment Protection > Vercel Authentication > All Deployments.

The Framework Preset should be "Next.js" and the Root Directory should be apps/mcp.

For more information on how to add MCP servers to your project, see Create MCP Servers.

Create a new configuration file named inkeep-cloud.config.ts in your project's src directory, alongside your existing configuration file.

When deploying to serverless environments like Vercel, you can configure function tools to execute in Vercel Sandbox MicroVMs instead of your Agent's runtime service. This is required for serverless platforms since child process spawning is restricted.

When to use each provider:

You'll need three credentials from your Vercel account:

Update your Run API to use Vercel Sandbox.

In the apps/run-api/src folder, create a sandbox.ts file:

Import it into your index.ts file:

Add these environment variables in your Vercel project to your Run API app:

The Inkeep Agent Framework provides health endpoints for Kubernetes-style probes and optional integration with Vercel Checks for automated deployment protection.

Two health endpoints are available for monitoring deployment readiness:

A lightweight endpoint that returns immediately to indicate the service is running.

A comprehensive endpoint that verifies database connectivity before serving traffic.

Enable automated deployment protection using Vercel Deployment Checks combined with a GitHub Action. This approach blocks production deployments from being promoted until your health checks pass.

The Inkeep Agent Framework includes a pre-configured workflow at .github/workflows/deployment-health-check.yml:

Configure the Inkeep Content Writer agent and trigger it from GitHub and Zendesk.

Deploy locally with Docker Compose

Tell us how this can be better.

**Examples:**

Example 1 (markdown):
```markdown
# Doltgres Database
INKEEP_AGENTS_MANAGE_DATABASE_URL=
# Postgres Database
INKEEP_AGENTS_RUN_DATABASE_URL=
```

Example 2 (sass):
```sass
ENVIRONMENT=production

INKEEP_AGENTS_MANAGE_API_BYPASS_SECRET=

# Doltgres Database
INKEEP_AGENTS_MANAGE_DATABASE_URL=
# Postgres Database
INKEEP_AGENTS_RUN_DATABASE_URL=

NANGO_SECRET_KEY=
NANGO_SERVER_URL=https://api.nango.dev
```

Example 3 (sass):
```sass
ENVIRONMENT=production

ANTHROPIC_API_KEY=
OPENAI_API_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
AI_GATEWAY_API_KEY=

INKEEP_AGENTS_RUN_API_BYPASS_SECRET=

# Postgres Database
INKEEP_AGENTS_RUN_DATABASE_URL=

OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=https://ingest.us.signoz.cloud:443/v1/traces
OTEL_EXPORTER_OTLP_TRACES_HEADERS=signoz-ingestion-key=<your-ingestion-key>

NANGO_SECRET_KEY=
NANGO_SERVER_URL=https://api.nango.dev

INKEEP_AGENTS_JWT_SIGNING_SECRET=

# Optional: set to 'false' to disable Inkeep-attached Anthropic prompt caching
# INKEEP_PROMPT_CACHING_ENABLED=false
```

Example 4 (sass):
```sass
ENVIRONMENT=production

PUBLIC_INKEEP_AGENTS_RUN_API_URL=
PUBLIC_INKEEP_AGENTS_RUN_API_BYPASS_SECRET=

PUBLIC_INKEEP_AGENTS_MANAGE_API_URL=
INKEEP_AGENTS_MANAGE_API_URL=
INKEEP_AGENTS_MANAGE_API_BYPASS_SECRET=

PUBLIC_SIGNOZ_URL=https://<your-organization>.signoz.cloud
SIGNOZ_API_KEY=

PUBLIC_NANGO_SERVER_URL=https://api.nango.dev
PUBLIC_NANGO_CONNECT_BASE_URL=https://connect.nango.dev
NANGO_SECRET_KEY=
```

---

## Sentry - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/add-other-services/sentry

**Contents:**
- Sentry
- Overview
- Step 1: Install Sentry
- Step 2: Update your .env file
- Step 3: Configure Sentry
- Forward Error Logs to Sentry
  - Step 1: Install pino-sentry-transport
  - Step 2: Configure pino-sentry-transport
- Additional Resources
  - On this page

Add Sentry monitoring to your agent services

Learn how to add Sentry monitoring to your Inkeep Agent Framework services.

Add your Sentry DSN to the .env file in the root of your workspace.

In apps/agents-api create a new file called sentry.ts and add the following code:

In apps/agents-api/src/index.ts add the following code to the top of the file before all other imports:

You can use pino-sentry-transport to forward error logs to Sentry.

Add the following code to the top of your apps/agents-api/src/index.ts file:

For more information on how to configure Sentry, you can consult the official Sentry Node.js documentation.

Configure S3 for file attachment storage with presigned URL delivery

Add Datadog APM to your Inkeep Agent Framework services

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
pnpm install @sentry/node
```

Example 2 (sass):
```sass
SENTRY_DSN=https://<your-sentry-dsn>@sentry.io/<your-sentry-project>
```

Example 3 (sql):
```sql
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  sampleRate: 1.0,
  tracesSampleRate: 1.0,
});
```

Example 4 (unknown):
```unknown
import "./sentry";
```

---

## Deploy to GCP Compute Engine - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/deployment/gcp-compute-engine

**Contents:**
- Deploy to GCP Compute Engine
- Create a VM Instance
- Install Docker Compose
- Deploy SigNoz and Nango
  - Retrieve your SigNoz and Nango API Keys
- Deploy the Inkeep Agent Framework
- Upgrading
  - Upgrading the Inkeep Agent Platform
  - Upgrading SigNoz and Nango
  - On this page

Deploy to GCP Compute Engine with Docker Compose

Set up Docker's apt repository

Clone this repo, which includes Docker files with SigNoz and Nango:

Run this command to autogenerate a .env file from the template .env.docker.example:

Nango requires a NANGO_ENCRYPTION_KEY. Once you create this, it cannot be edited.

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

Build and deploy SigNoz, Nango, OTEL Collector, and Jaeger:

This may take up to 5 minutes to start.

To get your SigNoz API key SIGNOZ_API_KEY:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

To get your Nango secret key NANGO_SECRET_KEY:

From the root directory, create a new project directory for the Docker Compose setup for the Inkeep Agent Framework

Generate a .env file from the example:

Here's an overview of the important environment variables when deploying to production. Make sure to review all of these in your .env file.

For long-running agents or custom deployment requirements, you can override runtime limits like execution timeouts, maximum transfers, and generation steps. See Configure Runtime Limits for examples and the complete list of overridable settings.

Then open http://<vm_ip>:3000 in a browser!

To upgrade the Inkeep Agent Platform to the latest version, run the following commands:

These commands replace your Docker Compose file with the latest version, pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

To upgrade Signoz and Nango, run the following commands:

These commands pull the latest changes from the repository (including the Docker Compose file), pull any newer image versions, and restart all the services. Existing database data is preserved, but there will be downtime while the services restart.

To clean up old unused Docker images and free disk space:

Deploy to Azure VM with Docker Compose

Deploy to Hetzner with Docker Compose

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

Example 2 (unknown):
```unknown
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Example 3 (bash):
```bash
sudo usermod -aG docker $USER
newgrp docker
```

Example 4 (unknown):
```unknown
git clone https://github.com/inkeep/agents-optional-local-dev inkeep-external-services
cd inkeep-external-services
```

---
