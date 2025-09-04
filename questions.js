const questions = [
    {
        question: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        answers: ["Use of the Snowball Edge appliance for a 10-day period", "The transfer of data out of Amazon S3 and to the Snowball Edge appliance", "The transfer of data from the Snowball Edge appliance into Amazon S3", "Daily use of the Snowball Edge appliance after 10 days"],
        correctAnswer: "The transfer of data from the Snowball Edge appliance into Amazon S3",
        explanation: "Transferring data into S3 from Snowball Edge is free; other activities like appliance use and data out of S3 incur costs."
    },
    {
        question: "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
        answers: ["AWS Trusted Advisor", "Amazon Inspector", "AWS Config", "Amazon GuardDuty"],
        correctAnswer: "Amazon Inspector",
        explanation: "Amazon Inspector is specifically designed to assess application vulnerabilities and identify infrastructure best practices."
    },
    {
        question: "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
        answers: ["Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.", "Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.", "Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.", "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users."],
        correctAnswer: "Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.",
        explanation: "AWS Storage Gateway file gateway allows for local caching and access to S3, providing the performance of local storage with the scalability of the cloud."
    },
    {
        question: "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
        answers: ["Hard code an IAM user’s secret key and access key directly in the application, and upload the file.", "Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.", "Have the EC2 instance assume a role to obtain the privileges to upload the file.", "Modify the S3 bucket policy so that any service can upload to it at any time."],
        correctAnswer: "Have the EC2 instance assume a role to obtain the privileges to upload the file.",
        explanation: "Using an IAM role is the most secure method as it avoids hardcoding credentials and follows the principle of least privilege."
    },
    {
        question: "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
        answers: ["Physical security of DynamoDB", "Patching of DynamoDB", "Access to DynamoDB tables", "Encryption of data at rest in DynamoDB"],
        correctAnswer: "Access to DynamoDB tables",
        explanation: "Customers are responsible for managing access to their data in DynamoDB, while AWS manages the underlying infrastructure."
    },
    {
        question: "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
        answers: ["Sustainability", "Performance efficiency", "Governance", "Reliability"],
        correctAnswer: "Governance",
        explanation: "Governance is a foundational capability in AWS CAF, focusing on policies, standards, and compliance."
    },
    {
        question: "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
        answers: ["AWS Lambda", "Amazon RDS", "AWS Fargate", "Amazon Athena"],
        correctAnswer: "AWS Fargate",
        explanation: "AWS Fargate allows you to run containers without managing servers or clusters, simplifying container management."
    },
    {
        question: "A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?",
        answers: ["Update the guest operating system of the EC2 instances.", "Maintain high availability at the database layer.", "Patch the physical infrastructure that hosts the EC2 instances.", "Configure the security group firewall."],
        correctAnswer: "Patch the physical infrastructure that hosts the EC2 instances.",
        explanation: "AWS manages the physical infrastructure, while customers manage the OS and applications on EC2 instances."
    },
    {
        question: "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
        answers: ["AWS Cost Explorer", "AWS Billing Conductor", "Amazon CodeGuru", "Amazon SageMaker", "AWS Compute Optimizer"],
        correctAnswer: ["AWS Cost Explorer", "AWS Compute Optimizer"],
        explanation: "AWS Cost Explorer and AWS Compute Optimizer provide insights into resource utilization to identify rightsizing opportunities."
    },
    {
        question: "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
        answers: ["Providing high-performance container orchestration", "Creating and rotating encryption keys", "Detecting underutilized resources to save costs", "Improving security by proactively monitoring the AWS environment", "Implementing enforced tagging across AWS resources"],
        correctAnswer: ["Detecting underutilized resources to save costs", "Improving security by proactively monitoring the AWS environment"],
        explanation: "AWS Trusted Advisor helps reduce costs by identifying underutilized resources and improves security by monitoring best practices."
    },
    {
        question: "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
        answers: ["AWS Resource Explorer", "AWS Service Catalog", "AWS Organizations", "AWS Systems Manager"],
        correctAnswer: "AWS Service Catalog",
        explanation: "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS.",
        incorrectExplanations: [
            "Resource Explorer allows users to search for resources across AWS accounts and Regions.",
            "AWS Organizations helps you centrally manage and govern your AWS environment as you grow and scale your workloads.",
            "Systems Manager gives you visibility and control of your infrastructure on AWS."
        ]
    },
    {
        question: "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
        answers: ["AWS Organizations", "AWS Pricing Calculator", "AWS Cost Explorer", "AWS Service Catalog"],
        correctAnswer: "AWS Cost Explorer",
        explanation: "AWS Cost Explorer allows you to visualize, understand, and manage your AWS costs and usage over time.",
        incorrectExplanations: [
            "Organizations helps you centrally manage and govern your AWS environment.",
            "Pricing Calculator helps you estimate the cost of using AWS services.",
            "Service Catalog allows organizations to create and manage catalogs of IT services."
        ]
    },
    {
        question: "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
        answers: ["AWS Glue", "Amazon Elastic File System (Amazon EFS)", "Amazon Redshift", "Amazon QuickSight", "Amazon Quantum Ledger Database (Amazon QLDB)"],
        correctAnswer: ["AWS Glue", "Amazon QuickSight"],
        explanation: "AWS Glue is used for discovering and transforming data, and Amazon QuickSight is used for visualizing data.",
        incorrectExplanations: [
            "EFS is a scalable file storage service.",
            "Redshift is a data warehousing service.",
            "QLDB is a fully managed ledger database."
        ]
    },
    {
        question: "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
        answers: ["AWS Support", "AWS Professional Services", "AWS Launch Wizard", "AWS Managed Services (AMS)"],
        correctAnswer: "AWS Professional Services",
        explanation: "AWS Professional Services engages with you to help you achieve specific outcomes related to enterprise cloud adoption.",
        incorrectExplanations: [
            "AWS Support provides technical support for AWS services.",
            "Launch Wizard helps you size, configure, and deploy AWS resources for third-party applications.",
            "AMS provides ongoing management of your AWS infrastructure."
        ]
    },
    {
        question: "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
        answers: ["Reserved Instances", "Dedicated Hosts", "Spot Instances", "On-Demand Instances"],
        correctAnswer: "On-Demand Instances",
        explanation: "On-Demand Instances allow you to pay for compute capacity by the hour or second with no long-term commitments.",
        incorrectExplanations: [
            "Reserved Instances are for steady-state usage, not intermittent.",
            "Dedicated Hosts are for regulatory requirements or server-bound software licenses.",
            "Spot Instances are for flexible start and end times or applications that can withstand interruptions."
        ]
    },
    {
        question: "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
        answers: ["Amazon EC2", "AWS Elastic Beanstalk", "AWS CodeBuild", "Amazon Personalize"],
        correctAnswer: "AWS Elastic Beanstalk",
        explanation: "AWS Elastic Beanstalk allows you to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure.",
        incorrectExplanations: [
            "EC2 provides virtual servers in the cloud.",
            "CodeBuild is a fully managed continuous integration service.",
            "Personalize enables developers to build applications with real-time personalized recommendations."
        ]
    },
    {
        question: "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
        answers: ["S3 Lifecycle rules", "S3 Versioning", "S3 bucket policies", "S3 server-side encryption"],
        correctAnswer: "S3 Versioning",
        explanation: "S3 Versioning keeps multiple versions of an object in the same bucket, protecting against accidental deletion or overwriting.",
        incorrectExplanations: [
            "S3 Lifecycle rules manage object lifecycle.",
            "S3 bucket policies control access to S3 buckets.",
            "S3 server-side encryption protects data at rest."
        ]
    },
    {
        question: "Which AWS service provides the ability to manage infrastructure as code?",
        answers: ["AWS CodePipeline", "AWS CodeDeploy", "AWS Direct Connect", "AWS CloudFormation"],
        correctAnswer: "AWS CloudFormation",
        explanation: "AWS CloudFormation allows you to model and provision AWS and third-party resources using infrastructure as code.",
        incorrectExplanations: [
            "CodePipeline is a continuous delivery service.",
            "CodeDeploy automates code deployments.",
            "Direct Connect establishes a dedicated network connection to AWS."
        ]
    },
    {
        question: "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        answers: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Spot Fleet"],
        correctAnswer: "Reserved Instances",
        explanation: "Reserved Instances provide a significant discount compared to On-Demand Instances and are suitable for steady-state usage.",
        incorrectExplanations: [
            "On-Demand Instances are more expensive for long-term usage.",
            "Spot Instances are subject to interruptions.",
            "Spot Fleet is for flexible, fault-tolerant workloads."
        ]
    },
    {
        question: "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
        answers: ["Elimination of expenses for running and maintaining data centers", "Price discounts that are identical to discounts from hardware providers", "Distribution of all operational controls to AWS", "Elimination of operational expenses"],
        correctAnswer: "Elimination of expenses for running and maintaining data centers",
        explanation: "Moving to AWS eliminates the need to manage physical data centers, reducing infrastructure costs.",
        incorrectExplanations: [
            "AWS discounts differ from hardware providers.",
            "Customers retain control, AWS does not take over all operations.",
            "Operational expenses change, but are not eliminated."
        ]
    },
    {
        question: "Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?",
        answers: ["AWS Direct Connect", "VPC peering", "AWS VPN", "Amazon Route 53"],
        correctAnswer: "AWS Direct Connect",
        explanation: "AWS Direct Connect allows you to establish a dedicated network connection between your on-premises network and AWS.",
        incorrectExplanations: [
            "VPC peering connects VPCs, not on-premises networks.",
            "AWS VPN creates an encrypted connection over the internet.",
            "Amazon Route 53 is a DNS service."
        ]
    },
    {
        question: "Which option is a physical location of the AWS global infrastructure?",
        answers: ["AWS DataSync", "AWS Region", "Amazon Connect", "AWS Organizations"],
        correctAnswer: "AWS Region",
        explanation: "AWS Regions are physical locations around the world where AWS clusters data centers.",
        incorrectExplanations: [
            "AWS DataSync is a data transfer service.",
            "Amazon Connect is a cloud contact center service.",
            "AWS Organizations is an account management service."
        ]
    },
    {
        question: "A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?",
        answers: ["Reliability", "Security", "Operational excellence", "Performance efficiency"],
        correctAnswer: "Security",
        explanation: "The Security pillar of the AWS Well-Architected Framework focuses on protecting information, systems, and assets.",
        incorrectExplanations: [
            "Reliability focuses on recovery from failures.",
            "Operational excellence focuses on running and monitoring systems.",
            "Performance efficiency focuses on using computing resources efficiently."
        ]
    },
    {
        question: "What is the purpose of having an internet gateway within a VPC?",
        answers: ["To create a VPN connection to the VPC", "To allow communication between the VPC and the internet", "To impose bandwidth constraints on internet traffic", "To load balance traffic from the internet across Amazon EC2 instances"],
        correctAnswer: "To allow communication between the VPC and the internet",
        explanation: "An internet gateway allows instances in your VPC to connect to the internet.",
        incorrectExplanations: [
            "A VPN connection uses a virtual private gateway.",
            "Internet gateways do not impose bandwidth constraints.",
            "Load balancing is done by Elastic Load Balancers."
        ]
    },
    {
        question: "A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?",
        answers: ["Integrate functional testing as part of AWS deployment.", "Use automation to deploy changes.", "Deploy the application to multiple locations.", "Implement loosely coupled dependencies."],
        correctAnswer: "Implement loosely coupled dependencies.",
        explanation: "Implementing loosely coupled dependencies is a key best practice for building scalable and maintainable applications.",
        incorrectExplanations: [
            "Functional testing is part of operational excellence.",
            "Automation is part of operational excellence.",
            "Multiple locations are part of reliability."
        ]
    },
    {
        question: "A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?",
        answers: ["IAM Access Analyzer", "AWS Artifact", "IAM credential report", "AWS Audit Manager"],
        correctAnswer: "IAM credential report",
        explanation: "The IAM credential report provides details about password and access key rotation.",
        incorrectExplanations: [
            "IAM Access Analyzer analyzes resource access policies.",
            "AWS Artifact provides compliance reports.",
            "AWS Audit Manager automates compliance audits."
        ]
    },
    {
        question: "A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)",
        answers: ["Amazon Simple Queue Service (Amazon SQS)", "AWS Budgets", "Cost Explorer", "Amazon CloudWatch", "AWS Cost and Usage Report"],
        correctAnswer: ["AWS Budgets", "Amazon CloudWatch"],
        explanation: "AWS Budgets and Amazon CloudWatch can be used to set up cost alerts.",
        incorrectExplanations: [
            "SQS is a message queuing service.",
            "Cost Explorer visualizes costs.",
            "Cost and Usage Report provides detailed cost data."
        ]
    },
    {
        question: "Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?",
        answers: ["AWS Artifact", "Amazon Connect", "AWS Chatbot", "AWS Knowledge Center"],
        correctAnswer: "AWS Knowledge Center",
        explanation: "The AWS Knowledge Center provides answers to frequently asked questions.",
        incorrectExplanations: [
            "AWS Artifact provides compliance reports.",
            "Amazon Connect is a cloud contact center service.",
            "AWS Chatbot integrates with chat platforms."
        ]
    },
    {
        question: "Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)",
        answers: ["Configure the AWS provided security group firewall.", "Classify company assets in the AWS Cloud.", "Determine which Availability Zones to use for Amazon S3 buckets.", "Patch or upgrade Amazon DynamoDB.", "Select Amazon EC2 instances to run AWS Lambda on."],
        correctAnswer: ["Configure the AWS provided security group firewall.", "Classify company assets in the AWS Cloud."],
        explanation: "Customers are responsible for security in the cloud, including configuring security groups and classifying data.",
        incorrectExplanations: [
            "AWS manages Availability Zones for S3.",
            "AWS manages patching DynamoDB.",
            "AWS manages the infrastructure for Lambda."
        ]
    },
    {
        question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        answers: ["Availability", "Reliability", "Scalability", "Responsive design", "Operational excellence"],
        correctAnswer: ["Reliability", "Operational excellence"],
        explanation: "Reliability and Operational excellence are two of the five pillars of the AWS Well-Architected Framework.",
        incorrectExplanations: [
            "Availability is a characteristic of reliability.",
            "Scalability is a characteristic of performance efficiency.",
            "Responsive design is a web design concept."
        ]
    },
    {
        question: "Which AWS service or feature is used to send both text and email messages from distributed applications?",
        answers: ["Amazon Simple Notification Service (Amazon SNS)", "Amazon Simple Email Service (Amazon SES)", "Amazon CloudWatch alerts", "Amazon Simple Queue Service (Amazon SQS)"],
        correctAnswer: "Amazon Simple Notification Service (Amazon SNS)",
        explanation: "Amazon SNS can send notifications as both SMS text messages and emails, making it suitable for distributed applications.",
        incorrectExplanations: [
            "Amazon SES is primarily for email sending.",
            "CloudWatch alerts are for monitoring and triggering alarms.",
            "Amazon SQS is for message queuing, not direct notifications."
        ]
    },
    {
        question: "A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?",
        answers: ["Amazon Inspector", "Access keys", "SSH public keys", "AWS Key Management Service (AWS KMS) keys"],
        correctAnswer: "Access keys",
        explanation: "Access keys (access key IDs and secret access keys) are used for programmatic access to AWS services.",
        incorrectExplanations: [
            "Amazon Inspector is for security assessments.",
            "SSH public keys are for EC2 instance access.",
            "AWS KMS keys are for encrypting data."
        ]
    },
    {
        question: "A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?",
        answers: ["Reserved Instances", "Spot Instances", "On-Demand Instances", "Dedicated Instances"],
        correctAnswer: "Spot Instances",
        explanation: "Spot Instances offer significant cost savings for fault-tolerant, stateless workloads that can handle interruptions.",
        incorrectExplanations: [
            "Reserved Instances are for predictable, long-term workloads.",
            "On-Demand Instances are for short-term, unpredictable workloads.",
            "Dedicated Instances are for single-tenant hardware."
        ]
    },
    {
        question: "What does the concept of agility mean in AWS Cloud computing? (Choose two.)",
        answers: ["The speed at which AWS resources are implemented", "The speed at which AWS creates new AWS Regions", "The ability to experiment quickly", "The elimination of wasted capacity", "The low cost of entry into cloud computing"],
        correctAnswer: ["The speed at which AWS resources are implemented", "The ability to experiment quickly"],
        explanation: "Agility in AWS refers to the ability to quickly provision resources and experiment with new ideas.",
        incorrectExplanations: [
            "AWS Region creation speed is not a direct measure of customer agility.",
            "Eliminating wasted capacity is related to cost optimization.",
            "Low cost of entry is related to economic benefits."
        ]
    },
    {
        question: "A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?",
        answers: ["AWS WAF", "AWS Shield", "Network ACLs", "Security groups"],
        correctAnswer: "AWS WAF",
        explanation: "AWS WAF (Web Application Firewall) is designed to protect web applications from common web exploits like SQL injection.",
        incorrectExplanations: [
            "AWS Shield is for DDoS protection.",
            "Network ACLs are for network-level traffic control.",
            "Security groups are for EC2 instance traffic control."
        ]
    },
    {
        question: "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
        answers: ["AWS Service Catalog", "AWS Systems Manager", "AWS IAM Access Analyzer", "AWS Organizations"],
        correctAnswer: "AWS IAM Access Analyzer",
        explanation: "AWS IAM Access Analyzer helps identify resources shared with external entities for security auditing.",
        incorrectExplanations: [
            "AWS Service Catalog is for creating and managing catalogs of IT services.",
            "AWS Systems Manager is for operational management.",
            "AWS Organizations is for managing multiple AWS accounts."
        ]
    },
    {
        question: "A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?",
        answers: ["Contact the AWS Compliance team.", "Download the reports from AWS Artifact.", "Open a case with AWS Support.", "Generate the reports with Amazon Macie."],
        correctAnswer: "Download the reports from AWS Artifact.",
        explanation: "AWS Artifact provides on-demand access to AWS compliance reports.",
        incorrectExplanations: [
            "Direct contact is not the standard procedure.",
            "AWS Support is for technical issues, not compliance reports.",
            "Amazon Macie is for data security and privacy."
        ]
    },
    {
        question: "An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company’s direct responsibility?",
        answers: ["Cost of application software licenses", "Cost of the hardware infrastructure on AWS", "Cost of power for the AWS servers", "Cost of physical security for the AWS data center"],
        correctAnswer: "Cost of application software licenses",
        explanation: "Customers are responsible for their application software licenses in the AWS Cloud.",
        incorrectExplanations: [
            "AWS manages hardware infrastructure, power, and physical security."
        ]
    },
    {
        question: "A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?",
        answers: ["Use the account root user access keys for administrative tasks.", "Grant broad permissions so that all company employees can access the resources they need.", "Turn on multi-factor authentication (MFA) for added security during the login process.", "Avoid rotating credentials to prevent issues in production applications."],
        correctAnswer: "Turn on multi-factor authentication (MFA) for added security during the login process.",
        explanation: "MFA adds an extra layer of security to the login process.",
        incorrectExplanations: [
            "Root user access keys should be avoided for daily tasks.",
            "Principle of least privilege is preferred over broad permissions.",
            "Credential rotation is a security best practice."
        ]
    },
    {
        question: "Elasticity in the AWS Cloud refers to which of the following? (Choose two.)",
        answers: ["How quickly an Amazon EC2 instance can be restarted", "The ability to rightsize resources as demand shifts", "The maximum amount of RAM an Amazon EC2 instance can use", "The pay-as-you-go billing model", "How easily resources can be procured when they are needed"],
        correctAnswer: ["The ability to rightsize resources as demand shifts", "How easily resources can be procured when they are needed"],
        explanation: "Elasticity is the ability to scale resources up or down as needed.",
        incorrectExplanations: [
            "EC2 instance restart speed is related to fault tolerance.",
            "Maximum RAM is a hardware specification.",
            "Pay-as-you-go is a billing model, not elasticity."
        ]
    },
    {
        question: "Which service enables customers to audit API calls in their AWS accounts?",
        answers: ["AWS CloudTrail", "AWS Trusted Advisor", "Amazon Inspector", "AWS X-Ray"],
        correctAnswer: "AWS CloudTrail",
        explanation: "AWS CloudTrail records API calls made on your account and delivers log files to your Amazon S3 bucket.",
        incorrectExplanations: [
            "AWS Trusted Advisor provides recommendations on cost optimization, security, fault tolerance, service limits, and performance.",
            "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.",
            "AWS X-Ray helps developers analyze and debug distributed applications."
        ]
    },
    {
        question: "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
        answers: ["Managing the code within the Lambda function", "Confirming that the hardware is working in the data center", "Patching the operating system", "Shutting down Lambda functions when they are no longer in use"],
        correctAnswer: "Managing the code within the Lambda function",
        explanation: "Customers are responsible for the code they run in AWS Lambda, while AWS manages the underlying infrastructure.",
        incorrectExplanations: [
            "AWS is responsible for the hardware in the data center.",
            "AWS is responsible for patching the operating system.",
            "AWS manages the lifecycle of Lambda functions based on triggers, not manual shutdowns."
        ]
    },
    {
        question: "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
        answers: ["Amazon Redshift", "Amazon Athena", "Amazon Kinesis", "Amazon RDS"],
        correctAnswer: "Amazon Athena",
        explanation: "Amazon Athena allows you to query data directly in S3 using standard SQL, and you are charged only for the queries you run.",
        incorrectExplanations: [
            "Amazon Redshift is a data warehousing service for large-scale data analysis.",
            "Amazon Kinesis is for real-time streaming data processing.",
            "Amazon RDS is a relational database service."
        ]
    },
    {
        question: "Which AWS service can be used at no additional cost?",
        answers: ["Amazon SageMaker", "AWS Config", "AWS Organizations", "Amazon CloudWatch"],
        correctAnswer: "AWS Organizations",
        explanation: "AWS Organizations is offered at no additional charge; you only pay for the AWS services you use within the accounts you manage.",
        incorrectExplanations: [
            "Amazon SageMaker is a machine learning service with associated costs.",
            "AWS Config has costs associated with recording configuration changes.",
            "Amazon CloudWatch has costs associated with monitoring and logging."
        ]
    },
    {
        question: "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?",
        answers: ["Data architecture", "Event management", "Cloud fluency", "Strategic partnership"],
        correctAnswer: "Cloud fluency",
        explanation: "Cloud fluency focuses on enabling your workforce to understand and use cloud technologies effectively, which is a people perspective capability.",
        incorrectExplanations: [
            "Data architecture belongs to the platform perspective.",
            "Event management belongs to the operations perspective.",
            "Strategic partnership belongs to the business perspective."
        ]
    },
    {
        question: "A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost. Which pricing options meet these requirements with the LOWEST cost? (Choose two.)",
        answers: ["Spot Instances", "On-Demand Instances", "Reserved Instances", "Savings Plans", "Dedicated Hosts"],
        correctAnswer: ["Reserved Instances", "Savings Plans"],
        explanation: "Reserved Instances and Savings Plans offer significant discounts for long-term commitments.",
        incorrectExplanations: [
            "Spot Instances are for flexible workloads and can be interrupted.",
            "On-Demand Instances are for short-term, unpredictable workloads.",
            "Dedicated Hosts are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
        answers: ["Amazon Connect", "AWS Wavelength", "AWS Regions", "AWS Direct Connect"],
        correctAnswer: "AWS Regions",
        explanation: "AWS Regions are geographical locations where AWS clusters data centers, allowing you to choose the closest location.",
        incorrectExplanations: [
            "Amazon Connect is a cloud contact center service.",
            "AWS Wavelength brings AWS services to the edge of 5G networks.",
            "AWS Direct Connect establishes a dedicated network connection to AWS."
        ]
    },
    {
        question: "A company is exploring the use of the AWS Cloud, and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?",
        answers: ["AWS Free Tier", "AWS Pricing Calculator", "AWS Billing and Cost Management", "AWS Cost and Usage Report"],
        correctAnswer: "AWS Pricing Calculator",
        explanation: "AWS Pricing Calculator allows you to estimate the cost of AWS services before you deploy them.",
        incorrectExplanations: [
            "AWS Free Tier provides free usage of certain AWS services.",
            "AWS Billing and Cost Management is for managing and paying AWS bills.",
            "AWS Cost and Usage Report provides detailed cost data."
        ]
    },
    {
        question: "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?",
        answers: ["Deliver the content through Amazon CloudFront.", "Store the content on Amazon S3 and enable S3 cross-region replication.", "Implement a VPN across multiple AWS Regions.", "Deliver the content through AWS PrivateLink."],
        correctAnswer: "Deliver the content through Amazon CloudFront.",
        explanation: "Amazon CloudFront is a content delivery network (CDN) that delivers content with low latency and high transfer speeds.",
        incorrectExplanations: [
            "S3 cross-region replication is for data redundancy, not low latency delivery.",
            "A VPN across multiple Regions is complex and not cost-effective for content delivery.",
            "AWS PrivateLink provides private connectivity between VPCs and AWS services, not CDN functionality."
        ]
    },
    {
        question: "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
        answers: ["The ability to trade variable expense for fixed expense", "Increased speed and agility", "Lower variable costs over fixed costs", "Increased operational costs across data centers"],
        correctAnswer: "Lower variable costs over fixed costs",
        explanation: "Economies of scale result in lower variable costs per unit as usage increases.",
        incorrectExplanations: [
            "Cloud computing trades fixed expenses for variable expenses.",
            "Increased speed and agility are benefits of cloud computing, but not specifically economies of scale.",
            "Operational costs are reduced, not increased, across data centers."
        ]
    },
    {
        question: "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
        answers: ["AWS CLI", "AWS Developer Center", "AWS Cloud Development Kit (AWS CDK)", "AWS CodeStar"],
        correctAnswer: "AWS Cloud Development Kit (AWS CDK)",
        explanation: "AWS CDK allows you to define your cloud infrastructure as code in familiar programming languages and provision it through AWS CloudFormation.",
        incorrectExplanations: [
            "AWS CLI is a command-line interface for managing AWS services.",
            "AWS Developer Center is a hub for developer resources.",
            "AWS CodeStar is a cloud-based development service for quickly developing, building, and deploying applications on AWS."
        ]
    },
    {
        question: "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
        answers: ["Amazon API Gateway", "IAM users", "AWS Security Token Service (AWS STS)", "IAM instance profiles"],
        correctAnswer: "AWS Security Token Service (AWS STS)",
        explanation: "AWS STS provides temporary security credentials that can be used to access AWS resources.",
        incorrectExplanations: [
            "Amazon API Gateway is for creating, publishing, maintaining, monitoring, and securing APIs.",
            "IAM users are long-term credentials for permanent access.",
            "IAM instance profiles provide temporary credentials for EC2 instances."
        ]
    },
    {
        question: "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
        answers: ["AWS Security Hub", "AWS Trusted Advisor", "Amazon EventBridge", "Amazon GuardDuty"],
        correctAnswer: "AWS Security Hub",
        explanation: "AWS Security Hub provides a comprehensive view of your security posture across your AWS accounts.",
        incorrectExplanations: [
            "AWS Trusted Advisor provides recommendations on cost optimization, security, fault tolerance, service limits, and performance.",
            "Amazon EventBridge is a serverless event bus.",
            "Amazon GuardDuty is a threat detection service."
        ]
    },
    {
        question: "Which AWS service is always provided at no charge?",
        answers: ["Amazon S3", "AWS Identity and Access Management (IAM)", "Elastic Load Balancers", "AWS WAF"],
        correctAnswer: "AWS Identity and Access Management (IAM)",
        explanation: "AWS IAM is provided at no charge and allows you to manage access to AWS services and resources securely.",
        incorrectExplanations: [
            "Amazon S3 is a storage service with associated costs.",
            "Elastic Load Balancers distribute incoming application traffic and have associated costs.",
            "AWS WAF is a web application firewall with associated costs."
        ]
    },
    {
        question: "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
        answers: ["Amazon Redshift", "Amazon Aurora", "Amazon DynamoDB", "Amazon RDS"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides automatic scaling of throughput capacity.",
        incorrectExplanations: [
            "Amazon Redshift is a data warehousing service.",
            "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database.",
            "Amazon RDS is a relational database service."
        ]
    },
    {
        question: "A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?",
        answers: ["Patch the operating system.", "Provision hosts.", "Manage database access permissions.", "Secure the operating system."],
        correctAnswer: "Manage database access permissions.",
        explanation: "Customers are responsible for managing access to their data in DynamoDB, while AWS manages the underlying infrastructure.",
        incorrectExplanations: [
            "AWS is responsible for patching the operating system.",
            "AWS is responsible for provisioning hosts.",
            "AWS is responsible for securing the operating system."
        ]
    },
    {
        question: "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
        answers: ["On-Demand Instances", "Dedicated Instances", "Spot Instances", "Reserved Instances"],
        correctAnswer: "Spot Instances",
        explanation: "Spot Instances offer significant cost savings for fault-tolerant, flexible workloads that can handle interruptions.",
        incorrectExplanations: [
            "On-Demand Instances are for short-term, unpredictable workloads.",
            "Dedicated Instances are for single-tenant hardware.",
            "Reserved Instances are for predictable, long-term workloads."
        ]
    },
    {
        question: "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
        answers: ["Amazon Macie", "Amazon Detective", "Amazon GuardDuty", "AWS IAM Access Analyzer"],
        correctAnswer: "Amazon Macie",
        explanation: "Amazon Macie uses machine learning to discover and protect sensitive data in S3 buckets.",
        incorrectExplanations: [
            "Amazon Detective analyzes security findings and identifies the root cause of potential security issues.",
            "Amazon GuardDuty is a threat detection service.",
            "AWS IAM Access Analyzer helps identify resources shared with external entities."
        ]
    },
    {
        question: "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
        answers: ["Security groups", "Amazon Virtual Private Cloud (Amazon VPC) flow logs", "Network ACLs", "Amazon CloudWatch", "AWS CloudTrail"],
        correctAnswer: ["Security groups", "Network ACLs"],
        explanation: "Security groups and Network ACLs control inbound and outbound traffic at the instance and subnet level, respectively.",
        incorrectExplanations: [
            "VPC flow logs capture information about the IP traffic going to and from network interfaces in your VPC.",
            "CloudWatch is a monitoring and observability service.",
            "CloudTrail records API calls made on your account."
        ]
    },
    {
        question: "Which AWS service can identify when an Amazon EC2 instance was terminated?",
        answers: ["AWS Identity and Access Management (IAM)", "AWS CloudTrail", "AWS Compute Optimizer", "Amazon EventBridge"],
        correctAnswer: "AWS CloudTrail",
        explanation: "AWS CloudTrail records API calls made on your account, including EC2 instance termination events.",
        incorrectExplanations: [
            "IAM manages access to AWS services and resources.",
            "Compute Optimizer provides recommendations for EC2 instance rightsizing.",
            "EventBridge is a serverless event bus."
        ]
    },
    {
        question: "Which of the following is a fully managed MySQL-compatible database?",
        answers: ["Amazon S3", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"],
        correctAnswer: "Amazon Aurora",
        explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud.",
        incorrectExplanations: [
            "Amazon S3 is an object storage service.",
            "Amazon DynamoDB is a NoSQL database service.",
            "Amazon Redshift is a data warehousing service."
        ]
    },
    {
        question: "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?",
        answers: ["AWS Snowmobile", "AWS Local Zones", "AWS Outposts", "AWS Fargate"],
        correctAnswer: "AWS Outposts",
        explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility.",
        incorrectExplanations: [
            "AWS Snowmobile is for transferring large amounts of data to AWS.",
            "AWS Local Zones are extensions of AWS Regions close to large population centers.",
            "AWS Fargate is a serverless compute engine for containers."
        ]
    },
    {
        question: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
        answers: ["Amazon DynamoDB", "Amazon Athena", "Amazon RDS", "Amazon EMR"],
        correctAnswer: "Amazon RDS",
        explanation: "Amazon RDS supports PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server databases and is suitable for OLTP workloads.",
        incorrectExplanations: [
            "Amazon DynamoDB is a NoSQL database service.",
            "Amazon Athena is a serverless query service for S3.",
            "Amazon EMR is a managed Hadoop framework."
        ]
    },
    {
        question: "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
        answers: ["Amazon Connect", "Amazon AppStream 2.0", "Amazon WorkSpaces", "AWS Site-to-Site VPN", "Amazon Elastic Container Service (Amazon ECS)"],
        correctAnswer: ["Amazon AppStream 2.0", "Amazon WorkSpaces"],
        explanation: "Amazon AppStream 2.0 provides streaming desktop applications, and Amazon WorkSpaces provides virtual desktops.",
        incorrectExplanations: [
            "Amazon Connect is a cloud contact center service.",
            "AWS Site-to-Site VPN establishes a secure connection to your on-premises network.",
            "Amazon ECS is a container orchestration service."
        ]
    },
    {
        question: "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
        answers: ["AWS Trusted Advisor", "Amazon CloudWatch", "Amazon GuardDuty", "AWS Health Dashboard"],
        correctAnswer: "AWS Trusted Advisor",
        explanation: "AWS Trusted Advisor checks for security group configurations that expose ports to the public.",
        incorrectExplanations: [
            "Amazon CloudWatch is for monitoring applications and resources.",
            "Amazon GuardDuty is a threat detection service.",
            "AWS Health Dashboard provides information about the operational status of AWS services."
        ]
    },
    {
        question: "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
        answers: ["Amazon DynamoDB", "Amazon Aurora", "Amazon DocumentDB (with MongoDB compatibility)", "Amazon Neptune"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "Amazon DynamoDB is a NoSQL key-value database that delivers single-digit millisecond performance at any scale.",
        incorrectExplanations: [
            "Amazon Aurora is a relational database service.",
            "Amazon DocumentDB is a document database service.",
            "Amazon Neptune is a graph database service."
        ]
    },
    {
        question: "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
        answers: ["On-Demand Instances", "Spot Instances", "Reserved Instances", "Dedicated Instances"],
        correctAnswer: "Spot Instances",
        explanation: "Spot Instances offer significant cost savings for workloads that can handle interruptions and do not need to run at specific times.",
        incorrectExplanations: [
            "On-Demand Instances are more expensive for long-term usage.",
            "Reserved Instances are for predictable, long-term workloads.",
            "Dedicated Instances are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
        answers: ["EC2 Reserved Instances", "EC2 Amazon Machine Images (AMIs)", "Amazon Elastic Block Store (Amazon EBS) snapshots", "AWS Shield", "Amazon GuardDuty"],
        correctAnswer: ["EC2 Amazon Machine Images (AMIs)", "Amazon Elastic Block Store (Amazon EBS) snapshots"],
        explanation: "AMIs can be used to launch instances in different Regions, and EBS snapshots can be used to restore volumes.",
        incorrectExplanations: [
            "Reserved Instances are for cost savings, not disaster recovery.",
            "AWS Shield is for DDoS protection.",
            "Amazon GuardDuty is a threat detection service."
        ]
    },
    {
        question: "Which AWS service provides command line access to AWS tools and resources directly from a web browser?",
        answers: ["AWS CloudHSM", "AWS CloudShell", "Amazon WorkSpaces", "AWS Cloud Map"],
        correctAnswer: "AWS CloudShell",
        explanation: "AWS CloudShell provides browser-based access to a managed, pre-authenticated shell environment.",
        incorrectExplanations: [
            "AWS CloudHSM provides hardware security modules.",
            "Amazon WorkSpaces provides virtual desktops.",
            "AWS Cloud Map is a cloud resource discovery service."
        ]
    },
    {
        question: "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
        answers: ["VPC endpoints", "AWS Transit Gateway", "Amazon Route 53", "AWS Secrets Manager"],
        correctAnswer: "AWS Transit Gateway",
        explanation: "AWS Transit Gateway simplifies network connectivity between VPCs and on-premises networks.",
        incorrectExplanations: [
            "VPC endpoints provide private connectivity to AWS services.",
            "Amazon Route 53 is a DNS service.",
            "AWS Secrets Manager helps you manage secrets."
        ]
    },
    {
        question: "A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?",
        answers: ["AWS Business Support", "AWS Basic Support", "AWS Developer Support", "AWS Enterprise Support"],
        correctAnswer: "AWS Enterprise Support",
        explanation: "AWS Enterprise Support includes a designated Technical Account Manager (TAM) who provides proactive guidance and support for operational readiness.",
        incorrectExplanations: [
            "AWS Business Support does not include proactive operational readiness reviews.",
            "AWS Basic Support is free but offers limited support.",
            "AWS Developer Support is for developers and does not include operational readiness reviews."
        ]
    },
    {
        question: "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
        answers: ["AWS Systems Manager", "AWS Secrets Manager", "AWS License Manager", "AWS Managed Services"],
        correctAnswer: "AWS Secrets Manager",
        explanation: "AWS Secrets Manager helps you rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.",
        incorrectExplanations: [
            "AWS Systems Manager can manage configurations but requires more manual setup for credential rotation.",
            "AWS License Manager manages software licenses.",
            "AWS Managed Services provides ongoing management of your AWS infrastructure."
        ]
    },
    {
        question: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
        answers: ["Amazon Route 53", "Amazon Macie", "AWS Direct Connect", "AWS PrivateLink"],
        correctAnswer: "AWS Direct Connect",
        explanation: "AWS Direct Connect establishes a dedicated network connection between your on-premises network and AWS.",
        incorrectExplanations: [
            "Amazon Route 53 is a DNS service.",
            "Amazon Macie is a data security and privacy service.",
            "AWS PrivateLink provides private connectivity between VPCs and AWS services."
        ]
    },
    {
        question: "Which AWS service is used to provide encryption for Amazon EBS?",
        answers: ["AWS Certificate Manager", "AWS Systems Manager", "AWS KMS", "AWS Config"],
        correctAnswer: "AWS KMS",
        explanation: "AWS KMS (Key Management Service) is used to create and manage encryption keys, including those used to encrypt EBS volumes.",
        incorrectExplanations: [
            "AWS Certificate Manager is for provisioning SSL/TLS certificates.",
            "AWS Systems Manager is for operational management.",
            "AWS Config is for assessing and auditing the configurations of your AWS resources."
        ]
    },
    {
        question: "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
        answers: ["AWS Management Console", "AWS CLI", "AWS SDK", "AWS Cloud9"],
        correctAnswer: "AWS Management Console",
        explanation: "AWS Management Console is a web-based interface for managing AWS services.",
        incorrectExplanations: [
            "AWS CLI is a command-line interface.",
            "AWS SDK is a software development kit.",
            "AWS Cloud9 is a cloud-based IDE."
        ]
    },
    {
        question: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
        answers: ["Trade variable expenses for capital expenses", "High economies of scale", "Launch globally in minutes", "Focus on managing hardware infrastructure", "Overprovision to ensure capacity"],
        correctAnswer: ["High economies of scale", "Launch globally in minutes"],
        explanation: "AWS offers economies of scale and enables rapid global deployment.",
        incorrectExplanations: [
            "AWS trades capital expenses for variable expenses.",
            "AWS manages hardware infrastructure.",
            "AWS allows you to scale resources on demand, avoiding overprovisioning."
        ]
    },
    {
        question: "Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?",
        answers: ["Agility", "Elasticity", "Scalability", "High availability"],
        correctAnswer: "High availability",
        explanation: "High availability refers to a system's ability to remain operational during failures.",
        incorrectExplanations: [
            "Agility is the ability to rapidly change and adapt.",
            "Elasticity is the ability to scale resources on demand.",
            "Scalability is the ability to handle increased workloads."
        ]
    },
    {
        question: "A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?",
        answers: ["AWS Ground Station", "AWS Shield", "AWS IoT Device Defender", "AWS CloudFormation"],
        correctAnswer: "AWS CloudFormation",
        explanation: "AWS CloudFormation allows you to define your infrastructure as code and provision it in a repeatable manner.",
        incorrectExplanations: [
            "AWS Ground Station is for controlling satellite communications.",
            "AWS Shield is for DDoS protection.",
            "AWS IoT Device Defender is for securing IoT devices."
        ]
    },
    {
        question: "Which task is the customer’s responsibility, according to the AWS shared responsibility model?",
        answers: ["Maintain the security of the AWS Cloud.", "Configure firewalls and networks.", "Patch the operating system of Amazon RDS instances.", "Implement physical and environmental controls."],
        correctAnswer: "Configure firewalls and networks.",
        explanation: "Customers are responsible for security in the cloud, including configuring security groups and network ACLs.",
        incorrectExplanations: [
            "AWS maintains the security of the cloud.",
            "AWS patches the OS for RDS instances.",
            "AWS implements physical and environmental controls."
        ]
    },
    {
        question: "Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?",
        answers: ["AWS WAF", "AWS Global Accelerator", "AWS Shield", "AWS Direct Connect"],
        correctAnswer: "AWS Global Accelerator",
        explanation: "AWS Global Accelerator directs traffic to optimal endpoints over the AWS global network, improving availability and performance.",
        incorrectExplanations: [
            "AWS WAF is a web application firewall.",
            "AWS Shield is for DDoS protection.",
            "AWS Direct Connect establishes a dedicated network connection."
        ]
    },
    {
        question: "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
        answers: ["AWS Auto Scaling", "Elastic Load Balancing", "Amazon Simple Queue Service (Amazon SQS)", "Amazon Kinesis Data Streams"],
        correctAnswer: "Amazon Simple Queue Service (Amazon SQS)",
        explanation: "Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.",
        incorrectExplanations: [
            "AWS Auto Scaling automatically adjusts the number of EC2 instances.",
            "Elastic Load Balancing distributes incoming application traffic across multiple targets.",
            "Amazon Kinesis Data Streams is for real-time streaming data."
        ]
    },
    {
        question: "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
        answers: ["Volume discounts", "A minimal additional fee for use", "One bill for multiple accounts", "Installment payment options", "Custom cost and usage budget creation"],
        correctAnswer: ["Volume discounts", "One bill for multiple accounts"],
        explanation: "Consolidated billing allows you to get volume discounts and receive a single bill for multiple AWS accounts.",
        incorrectExplanations: [
            "There is no additional fee for consolidated billing.",
            "AWS does not offer installment payment options.",
            "Custom budgets are created through AWS Budgets, not consolidated billing."
        ]
    },
    {
        question: "A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
        answers: ["S3 Multi-Region Access Points", "S3 Storage Lens", "AWS IAM Identity Center (AWS Single Sign-On)", "Access Analyzer for S3"],
        correctAnswer: "Access Analyzer for S3",
        explanation: "Access Analyzer for S3 reviews your S3 bucket access policies, ensuring that only intended access is granted to your S3 resources.",
        incorrectExplanations: [
            "S3 Multi-Region Access Points provide a single global endpoint for S3 data.",
            "S3 Storage Lens provides organization-wide visibility into object storage usage and activity.",
            "AWS IAM Identity Center provides single sign-on access to AWS accounts and applications."
        ]
    },
    {
        question: "What is the best resource for a user to find compliance-related information and reports about AWS?",
        answers: ["AWS Artifact", "AWS Marketplace", "Amazon Inspector", "AWS Support"],
        correctAnswer: "AWS Artifact",
        explanation: "AWS Artifact provides on-demand access to AWS' security and compliance reports and select online agreements.",
        incorrectExplanations: [
            "AWS Marketplace is a digital catalog with software from independent vendors.",
            "Amazon Inspector is an automated security assessment service.",
            "AWS Support provides technical support for AWS services."
        ]
    },
    {
        question: "Which AWS service enables companies to deploy an application close to end users?",
        answers: ["Amazon CloudFront", "AWS Auto Scaling", "AWS AppSync", "Amazon Route 53"],
        correctAnswer: "Amazon CloudFront",
        explanation: "Amazon CloudFront is a content delivery network (CDN) that delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.",
        incorrectExplanations: [
            "AWS Auto Scaling automatically adjusts the number of EC2 instances.",
            "AWS AppSync is a managed GraphQL service.",
            "Amazon Route 53 is a DNS service."
        ]
    },
    {
        question: "Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?",
        answers: ["Route table", "AWS Transit Gateway", "AWS Global Accelerator", "Amazon VPC"],
        correctAnswer: "AWS Global Accelerator",
        explanation: "AWS Global Accelerator improves the availability and performance of your applications with local or global users.",
        incorrectExplanations: [
            "Route tables define network routes within a VPC.",
            "AWS Transit Gateway connects VPCs and on-premises networks.",
            "Amazon VPC is a virtual network in the AWS cloud."
        ]
    },
    {
        question: "Which AWS service provides highly durable object storage?",
        answers: ["Amazon S3", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon FSx"],
        correctAnswer: "Amazon S3",
        explanation: "Amazon S3 provides highly durable and scalable object storage.",
        incorrectExplanations: [
            "Amazon EFS provides scalable file storage for EC2 instances.",
            "Amazon EBS provides block storage for EC2 instances.",
            "Amazon FSx provides managed file systems."
        ]
    },
    {
        question: "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
        answers: ["Database backups", "Database software patches", "Operating system patches", "Operating system installations"],
        correctAnswer: "Operating system patches",
        explanation: "When hosting databases on EC2, AWS is responsible for patching the underlying hypervisor and infrastructure, but not the guest OS or database software.",
        incorrectExplanations: [
            "Database backups, database software patches, and operating system installations are the customer's responsibility when using EC2."
        ]
    },
    {
        question: "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
        answers: ["The ability to turn over the responsibility for all security to AWS.", "The ability to use the pay-as-you-go model.", "The ability to have full control over the physical infrastructure.", "No longer having to guess what capacity will be required.", "No longer worrying about users access controls."],
        correctAnswer: ["The ability to use the pay-as-you-go model.", "No longer having to guess what capacity will be required."],
        explanation: "AWS offers a pay-as-you-go model and allows for on-demand scaling, eliminating the need to guess capacity.",
        incorrectExplanations: [
            "Security is a shared responsibility.",
            "Customers do not have full control over the physical infrastructure.",
            "Customers are responsible for user access controls."
        ]
    },
    {
        question: "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
        answers: ["AWS DataSync", "Amazon S3 Glacier", "AWS Storage Gateway", "Amazon Elastic Block Store (Amazon EBS)"],
        correctAnswer: "AWS Storage Gateway",
        explanation: "AWS Storage Gateway connects an on-premises software appliance with cloud-based storage, providing seamless and secure integration between on-premises IT environments and the AWS Cloud.",
        incorrectExplanations: [
            "AWS DataSync automates data transfers between on-premises storage and AWS storage services.",
            "Amazon S3 Glacier is a low-cost storage service for archiving and long-term backup.",
            "Amazon EBS provides block storage for EC2 instances."
        ]
    },
    {
        question: "A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?",
        answers: ["AWS Pricing Calculator", "Amazon CloudWatch", "AWS Cost Explorer", "AWS Budgets"],
        correctAnswer: "AWS Pricing Calculator",
        explanation: "AWS Pricing Calculator lets you explore AWS services and create estimates for the cost of your use cases on AWS.",
        incorrectExplanations: [
            "Amazon CloudWatch monitors applications and resources.",
            "AWS Cost Explorer visualizes your AWS costs.",
            "AWS Budgets sets custom budgets and alerts."
        ]
    },
    {
        question: "Which tool should a developer use to integrate AWS service features directly into an application?",
        answers: ["AWS Software Development Kit", "AWS CodeDeploy", "AWS Lambda", "AWS Batch"],
        correctAnswer: "AWS Software Development Kit",
        explanation: "AWS SDKs allow developers to integrate AWS services into their applications using various programming languages.",
        incorrectExplanations: [
            "AWS CodeDeploy automates application deployments.",
            "AWS Lambda runs code without managing servers.",
            "AWS Batch runs batch computing workloads."
        ]
    },
    {
        question: "Which of the following is a recommended design principle of the AWS Well-Architected Framework?",
        answers: ["Reduce downtime by making infrastructure changes infrequently and in large increments.", "Invest the time to configure infrastructure manually.", "Learn to improve from operational failures.", "Use monolithic application design for centralization."],
        correctAnswer: "Learn to improve from operational failures.",
        explanation: "The Operational Excellence pillar of the Well-Architected Framework emphasizes learning from failures to improve operations.",
        incorrectExplanations: [
            "Changes should be frequent and small.",
            "Automation is preferred over manual configuration.",
            "Microservices are preferred over monolithic applications."
        ]
    },
    {
        question: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
        answers: ["restricted access", "as-needed access", "least privilege access", "token access"],
        correctAnswer: "least privilege access",
        explanation: "Least privilege access grants only the permissions required to perform a task.",
        incorrectExplanations: [
            "Restricted access is a general term.",
            "As-needed access is a general term.",
            "Token access relates to temporary credentials."
        ]
    },
    {
        question: "Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?",
        answers: ["Security group", "AWS WAF", "AWS Firewall Manager", "Network ACL"],
        correctAnswer: "Network ACL",
        explanation: "Network ACLs operate at the subnet level and act as a firewall to control traffic in and out of subnets.",
        incorrectExplanations: [
            "Security groups operate at the instance level.",
            "AWS WAF protects web applications.",
            "AWS Firewall Manager centrally manages firewalls."
        ]
    },
    {
        question: "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
        answers: ["Amazon Aurora", "Amazon Redshift Serverless", "AWS Lambda", "Amazon RDS"],
        correctAnswer: "Amazon Redshift Serverless",
        explanation: "Amazon Redshift Serverless allows you to run and scale analytics without managing data warehouse infrastructure.",
        incorrectExplanations: [
            "Amazon Aurora is a relational database service.",
            "AWS Lambda runs code without managing servers.",
            "Amazon RDS is a relational database service."
        ]
    },
    {
        question: "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
        answers: ["AWS charges the same prices for services in every AWS Region.", "AWS enables capacity to be adjusted on demand.", "AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.", "AWS does not charge for data sent from the AWS Cloud to the internet.", "AWS eliminates many of the costs of building and maintaining on-premises data centers."],
        correctAnswer: ["AWS enables capacity to be adjusted on demand.", "AWS eliminates many of the costs of building and maintaining on-premises data centers."],
        explanation: "AWS allows for on-demand scaling and eliminates the need for physical data centers, reducing costs.",
        incorrectExplanations: [
            "Prices vary across AWS Regions.",
            "AWS does not offer discounts for idle instances.",
            "Data transfer out of AWS to the internet is charged."
        ]
    },
    {
        question: "A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?",
        answers: ["IAM group", "IAM role", "IAM tag", "IAM Access Analyzer"],
        correctAnswer: "IAM role",
        explanation: "IAM roles can be used to grant cross-account access to AWS resources.",
        incorrectExplanations: [
            "IAM groups manage permissions for users within an account.",
            "IAM tags are metadata for AWS resources.",
            "IAM Access Analyzer analyzes resource access policies."
        ]
    },
    {
        question: "Which task is the responsibility of AWS when using AWS services?",
        answers: ["Management of IAM user permissions", "Creation of security group rules for outbound access", "Maintenance of physical and environmental controls", "Application of Amazon EC2 operating system patches"],
        correctAnswer: "Maintenance of physical and environmental controls",
        explanation: "AWS is responsible for the security of the cloud, including physical and environmental controls.",
        incorrectExplanations: [
            "IAM user permissions and security group rules are the customer's responsibility.",
            "EC2 OS patches are the customer's responsibility."
        ]
    },
    {
        question: "A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions. Which AWS service will meet these requirements?",
        answers: ["Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor", "AWS CloudFormation"],
        correctAnswer: "AWS CloudFormation",
        explanation: "AWS CloudFormation allows you to define infrastructure as code and deploy it across multiple AWS Regions.",
        incorrectExplanations: [
            "Amazon CloudWatch monitors applications and resources.",
            "AWS Config assesses resource configurations.",
            "AWS Trusted Advisor provides best practice recommendations."
        ]
    },
    {
        question: "Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?",
        answers: ["Data architecture", "Data protection", "Data governance", "Data science"],
        correctAnswer: "Data architecture",
        explanation: "Data architecture is a platform perspective capability in the AWS CAF, focusing on the design and implementation of data solutions.",
        incorrectExplanations: [
            "Data protection is a security perspective capability.",
            "Data governance is a governance perspective capability.",
            "Data science is not a specific AWS CAF capability."
        ]
    },
    {
        question: "A company is running a workload in the AWS Cloud. Which AWS best practice ensures the MOST cost-effective architecture for the workload?",
        answers: ["Loose coupling", "Rightsizing", "Caching", "Redundancy"],
        correctAnswer: "Rightsizing",
        explanation: "Rightsizing involves selecting the appropriate instance types and sizes to match workload requirements, optimizing costs.",
        incorrectExplanations: [
            "Loose coupling improves system resilience.",
            "Caching improves performance.",
            "Redundancy improves availability."
        ]
    },
    {
        question: "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
        answers: ["Amazon Elastic Block Store (Amazon EBS)", "AWS Storage Gateway", "Amazon Elastic Container Service (Amazon ECS)", "AWS Lambda"],
        correctAnswer: "AWS Storage Gateway",
        explanation: "AWS Storage Gateway's Tape Gateway allows you to replace physical tape libraries with virtual tape libraries in AWS without changing backup workflows.",
        incorrectExplanations: [
            "Amazon EBS is block storage for EC2 instances.",
            "Amazon ECS is a container orchestration service.",
            "AWS Lambda is a serverless compute service."
        ]
    },
    {
        question: "Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?",
        answers: ["Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "Reserved Instance reporting"],
        correctAnswer: "AWS Budgets",
        explanation: "AWS Budgets allows you to set custom budgets, track costs and usage, and receive alerts when thresholds are exceeded.",
        incorrectExplanations: [
            "Cost Explorer visualizes your AWS costs.",
            "AWS Cost and Usage Report provides detailed cost data.",
            "Reserved Instance reporting provides information about your RIs."
        ]
    },
    {
        question: "Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
        answers: ["Establish the global infrastructure.", "Perform client-side data encryption.", "Configure IAM credentials.", "Secure edge locations.", "Patch Amazon RDS DB instances."],
        correctAnswer: ["Perform client-side data encryption.", "Configure IAM credentials."],
        explanation: "Customers are responsible for data encryption and managing IAM credentials.",
        incorrectExplanations: [
            "AWS establishes the global infrastructure.",
            "AWS secures edge locations.",
            "AWS patches the underlying OS for RDS instances."
        ]
    },
    {
        question: "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
        answers: ["Grant the developer access to only the AWS resources needed to perform the job.", "Share the AWS account root user credentials with the developer.", "Add the developer to the administrator’s group in AWS IAM.", "Configure a password policy that ensures the developer’s password cannot be changed.", "Ensure the account password policy requires a minimum length."],
        correctAnswer: ["Grant the developer access to only the AWS resources needed to perform the job.", "Ensure the account password policy requires a minimum length."],
        explanation: "Following the principle of least privilege and enforcing strong password policies are security best practices.",
        incorrectExplanations: [
            "Root user credentials should never be shared.",
            "Adding the developer to the admin group violates least privilege.",
            "Password policies should allow password changes."
        ]
    },
    {
        question: "A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?",
        answers: ["Resource tagging", "Consolidated billing", "Pay-as-you-go pricing", "Spot Instances"],
        correctAnswer: "Consolidated billing",
        explanation: "Consolidated billing provides volume discounts across multiple accounts.",
        incorrectExplanations: [
            "Resource tagging is for organization.",
            "Pay-as-you-go is a billing model, not a discount.",
            "Spot Instances can be interrupted."
        ]
    },
    {
        question: "A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?",
        answers: ["Security groups", "AWS Firewall Manager", "IAM roles", "IAM user SSH keys"],
        correctAnswer: "IAM roles",
        explanation: "IAM roles provide temporary credentials for EC2 instances to access other AWS services securely.",
        incorrectExplanations: [
            "Security groups control network traffic.",
            "AWS Firewall Manager centrally manages firewalls.",
            "IAM user SSH keys are for SSH access."
        ]
    },
    {
        question: "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
        answers: ["Amazon FSx", "Amazon Elastic Kubernetes Service (Amazon EKS)", "Amazon Elastic Container Service (Amazon ECS)", "Amazon EMR"],
        correctAnswer: "Amazon FSx",
        explanation: "Amazon FSx for Windows File Server provides a fully managed native Microsoft Windows file system.",
        incorrectExplanations: [
            "Amazon EKS is a managed Kubernetes service.",
            "Amazon ECS is a container orchestration service.",
            "Amazon EMR is a managed Hadoop framework."
        ]
    },
    {
        question: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
        answers: ["Tape Gateway", "Volume Gateway", "Amazon FSx File Gateway", "Amazon S3 File Gateway"],
        correctAnswer: "Amazon S3 File Gateway",
        explanation: "Amazon S3 File Gateway provides NFS and SMB access to objects in Amazon S3.",
        incorrectExplanations: [
            "Tape Gateway is for virtual tape libraries.",
            "Volume Gateway provides block storage.",
            "Amazon FSx File Gateway integrates on-premises file systems with FSx."
        ]
    },
    {
        question: "A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources. Which AWS tool or service can be used to meet these requirements?",
        answers: ["Amazon CloudWatch", "Amazon Inspector", "AWS CloudTrail", "AWS IAM"],
        correctAnswer: "AWS CloudTrail",
        explanation: "AWS CloudTrail records API calls made on your account and delivers log files to your Amazon S3 bucket.",
        incorrectExplanations: [
            "Amazon CloudWatch monitors applications and resources.",
            "Amazon Inspector is an automated security assessment service.",
            "AWS IAM manages access to AWS services and resources."
        ]
    },
    {
        question: "A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years. What is the MOST cost-effective EC2 instance purchasing model to meet these requirements?",
        answers: ["Spot Instances", "On-Demand Instances", "Savings Plans", "Dedicated Hosts"],
        correctAnswer: "Savings Plans",
        explanation: "Savings Plans offer significant cost savings for consistent EC2 usage over a 1- or 3-year term.",
        incorrectExplanations: [
            "Spot Instances can be interrupted.",
            "On-Demand Instances are more expensive for long-term usage.",
            "Dedicated Hosts are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?",
        answers: ["Amazon Polly", "Amazon Personalize", "Amazon Comprehend", "Amazon Rekognition"],
        correctAnswer: "Amazon Personalize",
        explanation: "Amazon Personalize enables you to build applications with real-time personalized recommendations.",
        incorrectExplanations: [
            "Amazon Polly turns text into lifelike speech.",
            "Amazon Comprehend discovers insights and relationships in text.",
            "Amazon Rekognition analyzes images and videos."
        ]
    },
    {
        question: "A company is planning its migration to the AWS Cloud. The company is identifying its capability gaps by using the AWS Cloud Adoption Framework (AWS CAF) perspectives. Which phase of the cloud transformation journey includes these identification activities?",
        answers: ["Envision", "Align", "Scale", "Launch"],
        correctAnswer: "Align",
        explanation: "The Align phase focuses on identifying capability gaps and prioritizing initiatives.",
        incorrectExplanations: [
            "Envision is about defining the vision.",
            "Scale is about scaling operations.",
            "Launch is about deploying workloads."
        ]
    },
    {
        question: "A social media company wants to protect its web application from common web exploits such as SQL injections and cross-site scripting. Which AWS service will meet these requirements?",
        answers: ["Amazon Inspector", "AWS WAF", "Amazon GuardDuty", "Amazon CloudWatch"],
        correctAnswer: "AWS WAF",
        explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits.",
        incorrectExplanations: [
            "Amazon Inspector assesses application vulnerabilities.",
            "Amazon GuardDuty is a threat detection service.",
            "Amazon CloudWatch monitors applications and resources."
        ]
    },
    {
        question: "Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?",
        answers: ["EC2 Image Builder", "Amazon Machine Image (AMI)", "AWS Launch Wizard", "AWS Elastic Beanstalk"],
        correctAnswer: "EC2 Image Builder",
        explanation: "EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images.",
        incorrectExplanations: [
            "AMI is a template for EC2 instances.",
            "AWS Launch Wizard guides you through deploying AWS resources.",
            "AWS Elastic Beanstalk deploys and manages applications."
        ]
    },
    {
        question: "A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities. Which AWS service will meet these requirements?",
        answers: ["Amazon GuardDuty", "Amazon Inspector", "Amazon Detective", "Amazon Cognito"],
        correctAnswer: "Amazon Inspector",
        explanation: "Amazon Inspector automatically assesses applications for vulnerabilities or deviations from best practices.",
        incorrectExplanations: [
            "Amazon GuardDuty is a threat detection service.",
            "Amazon Detective analyzes security findings.",
            "Amazon Cognito provides user sign-up and sign-in."
        ]
    },
    {
        question: "A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?",
        answers: ["AWS Lambda", "Amazon EC2", "AWS CodeDeploy", "AWS Wavelength"],
        correctAnswer: "Amazon EC2",
        explanation: "Amazon EC2 provides virtual servers in the cloud, suitable for long-running batch processing.",
        incorrectExplanations: [
            "AWS Lambda is for short-lived, event-driven workloads.",
            "AWS CodeDeploy automates application deployments.",
            "AWS Wavelength brings AWS services to the edge of 5G networks."
        ]
    },
    {
        question: "Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?",
        answers: ["Amazon CloudWatch Logs", "AWS CloudTrail", "VPC Flow Logs", "AWS Identity and Access Management (IAM)"],
        correctAnswer: "VPC Flow Logs",
        explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC.",
        incorrectExplanations: [
            "CloudWatch Logs stores application logs.",
            "CloudTrail records API calls.",
            "IAM manages access to AWS services."
        ]
    },
    {
        question: "A company wants to design a centralized storage system to manage the configuration data and passwords for its critical business applications. Which AWS service or capability will meet these requirements MOST cost-effectively?",
        answers: ["AWS Systems Manager Parameter Store", "AWS Secrets Manager", "AWS Config", "Amazon S3"],
        correctAnswer: "AWS Systems Manager Parameter Store",
        explanation: "AWS Systems Manager Parameter Store is suitable for storing configuration data and secrets, and it offers a free tier.",
        incorrectExplanations: [
            "AWS Secrets Manager is for sensitive secrets with rotation.",
            "AWS Config assesses resource configurations.",
            "Amazon S3 is object storage."
        ]
    },
    {
        question: "A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?",
        answers: ["Amazon Elastic Kubernetes Service (Amazon EKS)", "AWS Fargate", "Amazon EC2", "Amazon Elastic Container Service (Amazon ECS)"],
        correctAnswer: "Amazon EC2",
        explanation: "Amazon EC2 allows you to launch and manage virtual servers, giving you full control over the compute resources hosting your containers.",
        incorrectExplanations: [
            "Amazon EKS is a managed Kubernetes service.",
            "AWS Fargate is a serverless compute engine for containers.",
            "Amazon ECS is a managed container orchestration service."
        ]
    },
    {
        question: "Which AWS service or feature allows users to create new AWS accounts, group multiple accounts to organize workflows, and apply policies to groups of accounts?",
        answers: ["AWS Identity and Access Management (IAM)", "AWS Trusted Advisor", "AWS CloudFormation", "AWS Organizations"],
        correctAnswer: "AWS Organizations",
        explanation: "AWS Organizations allows you to centrally manage and govern multiple AWS accounts.",
        incorrectExplanations: [
            "AWS IAM manages access to AWS services.",
            "AWS Trusted Advisor provides best practice recommendations.",
            "AWS CloudFormation provisions infrastructure as code."
        ]
    },
    {
        question: "A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?",
        answers: ["AWS DataSync", "AWS Snowball Edge", "Amazon S3 File Gateway", "AWS Transfer Family"],
        correctAnswer: "Amazon S3 File Gateway",
        explanation: "Amazon S3 File Gateway enables on-premises applications to access S3 through standard file system protocols like NFS and SMB.",
        incorrectExplanations: [
            "AWS DataSync automates data transfers.",
            "AWS Snowball Edge is for data migration.",
            "AWS Transfer Family manages secure file transfers."
        ]
    },
    {
        question: "A company wants to block SQL injection attacks. Which AWS service or feature should the company use to meet this requirement?",
        answers: ["AWS WAF", "Network ACLs", "Security groups", "AWS Certificate Manager (ACM)"],
        correctAnswer: "AWS WAF",
        explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits like SQL injection.",
        incorrectExplanations: [
            "Network ACLs control network traffic.",
            "Security groups control instance traffic.",
            "ACM manages SSL/TLS certificates."
        ]
    },
    {
        question: "A company wants a unified tool to provide a consistent method to interact with AWS services. Which AWS service or tool will meet this requirement?",
        answers: ["AWS CLI", "Amazon Elastic Container Service (Amazon ECS)", "AWS Cloud9", "AWS Virtual Private Network (AWS VPN)"],
        correctAnswer: "AWS CLI",
        explanation: "AWS CLI (Command Line Interface) provides a unified tool to manage AWS services from the command line.",
        incorrectExplanations: [
            "Amazon ECS is a container orchestration service.",
            "AWS Cloud9 is a cloud-based IDE.",
            "AWS VPN establishes a secure connection to AWS."
        ]
    },
    {
        question: "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security. Which AWS service can the company use to meet these requirements?",
        answers: ["AWS Shield", "AWS WAF", "AWS Trusted Advisor", "AWS Service Catalog"],
        correctAnswer: "AWS Trusted Advisor",
        explanation: "AWS Trusted Advisor provides best practice recommendations for cost optimization, security, fault tolerance, service limits, and performance.",
        incorrectExplanations: [
            "AWS Shield provides DDoS protection.",
            "AWS WAF protects web applications.",
            "AWS Service Catalog creates and manages catalogs of IT services."
        ]
    },
    {
        question: "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?",
        answers: ["Platform", "Operations", "Security", "Governance"],
        correctAnswer: "Operations",
        explanation: "The Operations perspective focuses on running and monitoring IT workloads, including configuration and patch management.",
        incorrectExplanations: [
            "Platform is about infrastructure and services.",
            "Security is about protecting data and systems.",
            "Governance is about policies and compliance."
        ]
    },
    {
        question: "A company has a compute workload that is steady, predictable, and uninterruptible. Which Amazon EC2 instance purchasing options meet these requirements MOST cost-effectively? (Choose two.)",
        answers: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Saving Plans", "Dedicated Hosts"],
        correctAnswer: ["Reserved Instances", "Saving Plans"],
        explanation: "Reserved Instances and Savings Plans offer significant cost savings for predictable, long-term workloads.",
        incorrectExplanations: [
            "On-Demand Instances are more expensive for long-term usage.",
            "Spot Instances can be interrupted.",
            "Dedicated Hosts are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
        answers: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Instances"],
        correctAnswer: "On-Demand Instances",
        explanation: "On-Demand Instances are suitable for short-term, unpredictable workloads.",
        incorrectExplanations: [
            "Reserved Instances are for long-term commitments.",
            "Spot Instances can be interrupted.",
            "Dedicated Instances are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?",
        answers: ["Configuration of Amazon EC2 instance operating systems", "Application file system server-side encryption", "Patch management", "Security of the physical infrastructure"],
        correctAnswer: "Patch management",
        explanation: "Patch management is shared; AWS patches the underlying hypervisor and infrastructure, while customers patch the guest OS and applications.",
        incorrectExplanations: [
            "EC2 OS configuration and file system encryption are the customer's responsibility.",
            "Security of the physical infrastructure is AWS's responsibility."
        ]
    },
    {
        question: "A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)",
        answers: ["Placement groups", "Consolidated billing", "Edge locations", "AWS Config", "Multiple AWS accounts"],
        correctAnswer: ["Consolidated billing", "Multiple AWS accounts"],
        explanation: "Consolidated billing allows for a single bill across multiple accounts, and multiple AWS accounts allow for workload separation and chargeback.",
        incorrectExplanations: [
            "Placement groups are for EC2 instance placement.",
            "Edge locations are for content delivery.",
            "AWS Config assesses resource configurations."
        ]
    },
    {
        question: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        answers: ["Enable client-side encryption for objects that are stored in Amazon S3.", "Configure IAM security policies to comply with the principle of least privilege.", "Patch the guest operating system on an Amazon EC2 instance.", "Apply updates to the Nitro Hypervisor."],
        correctAnswer: "Apply updates to the Nitro Hypervisor.",
        explanation: "AWS is responsible for the underlying infrastructure, including the hypervisor.",
        incorrectExplanations: [
            "Client-side encryption, IAM policies, and guest OS patching are the customer's responsibility."
        ]
    },
    {
        question: "Which option is a benefit of using AWS for cloud computing?",
        answers: ["Trade variable expense for fixed expense", "Pay-as-you-go pricing", "Decreased speed and agility", "Spending money running and maintaining data centers"],
        correctAnswer: "Pay-as-you-go pricing",
        explanation: "AWS offers pay-as-you-go pricing, allowing you to pay only for the resources you use.",
        incorrectExplanations: [
            "AWS trades fixed expenses for variable expenses.",
            "AWS increases speed and agility.",
            "AWS eliminates the need to run and maintain data centers."
        ]
    },
    {
        question: "Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?",
        answers: ["Culture evolution", "Event management", "Data monetization", "Platform architecture"],
        correctAnswer: "Data monetization",
        explanation: "Data monetization is a business perspective capability, focusing on generating revenue from data assets.",
        incorrectExplanations: [
            "Culture evolution is a people perspective capability.",
            "Event management is an operations perspective capability.",
            "Platform architecture is a platform perspective capability."
        ]
    },
    {
        question: "A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
        answers: ["A full set of AWS Trusted Advisor checks", "Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week", "A designated technical account manager (TAM) to assist in monitoring and optimization", "A consultative review and architecture guidance for the company’s applications"],
        correctAnswer: "A designated technical account manager (TAM) to assist in monitoring and optimization",
        explanation: "AWS Enterprise Support includes a TAM for proactive guidance and support.",
        incorrectExplanations: [
            "Trusted Advisor checks are available in Business Support.",
            "24/7 support is available in Business Support.",
            "Consultative reviews are also available in Business Support."
        ]
    },
    {
        question: "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
        answers: ["On-Demand Instances", "Standard Reserved Instances", "Spot Instances", "Convertible Reserved Instances"],
        correctAnswer: "Spot Instances",
        explanation: "Spot Instances can be interrupted with short notice if AWS needs the capacity.",
        incorrectExplanations: [
            "On-Demand, Reserved, and Convertible Reserved Instances are not interrupted for capacity reasons."
        ]
    },
    {
        question: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
        answers: ["Observability", "Incident and problem management", "Incident response", "Infrastructure protection", "Availability and continuity"],
        correctAnswer: ["Incident response", "Infrastructure protection"],
        explanation: "Incident response and infrastructure protection are security perspective capabilities.",
        incorrectExplanations: [
            "Observability is an operations perspective capability.",
            "Incident and problem management is an operations perspective capability.",
            "Availability and continuity is a platform perspective capability."
        ]
    },
    {
        question: "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
        answers: ["AWS Graviton processor", "Dedicated Hosts", "EC2 Instance Savings Plans", "Amazon EC2 Auto Scaling instances"],
        correctAnswer: "EC2 Instance Savings Plans",
        explanation: "EC2 Instance Savings Plans offer discounted hourly rates for consistent EC2 usage over a 1- or 3-year term.",
        incorrectExplanations: [
            "Graviton processors are instance types.",
            "Dedicated Hosts are for single-tenant hardware.",
            "Auto Scaling adjusts instance count."
        ]
    },
    {
        question: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
        answers: ["Agility", "Elasticity", "Reliability", "Durability"],
        correctAnswer: "Elasticity",
        explanation: "Elasticity allows you to scale resources up or down based on demand, eliminating underutilized capacity.",
        incorrectExplanations: [
            "Agility is the ability to rapidly change and adapt.",
            "Reliability is the ability to withstand failures.",
            "Durability is the ability to store data over the long term."
        ]
    },
    {
        question: "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
        answers: ["Amazon WorkSpaces", "Amazon Simple Queue Service (Amazon SQS)", "Amazon Connect", "AWS Trusted Advisor", "AWS Step Functions"],
        correctAnswer: ["Amazon Simple Queue Service (Amazon SQS)", "AWS Step Functions"],
        explanation: "Amazon SQS decouples application components, and AWS Step Functions coordinates distributed components.",
        incorrectExplanations: [
            "Amazon WorkSpaces provides virtual desktops.",
            "Amazon Connect is a cloud contact center.",
            "AWS Trusted Advisor provides best practice recommendations."
        ]
    },
    {
        question: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
        answers: ["AWS Budgets", "AWS Cost Explorer", "AWS Cost Allocation Tags", "AWS Organizations"],
        correctAnswer: "AWS Budgets",
        explanation: "AWS Budgets allows you to set custom budgets and receive alerts when your costs or usage exceed your budgeted amounts.",
        incorrectExplanations: [
            "AWS Cost Explorer visualizes your AWS costs.",
            "AWS Cost Allocation Tags label resources for cost tracking.",
            "AWS Organizations manages multiple AWS accounts."
        ]
    },
    {
        question: "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
        answers: ["Benefits management", "Risk management", "Application portfolio management", "Cloud financial management"],
        correctAnswer: "Benefits management",
        explanation: "Benefits management focuses on defining, tracking, and realizing business outcomes from cloud adoption.",
        incorrectExplanations: [
            "Risk management identifies and mitigates risks.",
            "Application portfolio management manages applications.",
            "Cloud financial management manages cloud costs."
        ]
    },
    {
        question: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
        answers: ["S3 Versioning", "S3 Transfer Acceleration", "S3ACLs", "S3 Intelligent-Tiering"],
        correctAnswer: "S3 Transfer Acceleration",
        explanation: "S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket.",
        incorrectExplanations: [
            "S3 Versioning keeps multiple versions of objects.",
            "S3 ACLs manage access permissions.",
            "S3 Intelligent-Tiering automatically moves data between access tiers."
        ]
    },
    {
        question: "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
        answers: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Instances"],
        correctAnswer: "On-Demand Instances",
        explanation: "On-Demand Instances are suitable for short-term, flexible workloads with no upfront commitment.",
        incorrectExplanations: [
            "Reserved Instances are for long-term commitments.",
            "Spot Instances can be interrupted.",
            "Dedicated Instances are for single-tenant hardware."
        ]
    },
    {
        question: "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
        answers: ["Scale", "Envision", "Align", "Launch"],
        correctAnswer: "Envision",
        explanation: "The Envision phase focuses on defining the vision and demonstrating how the cloud aligns with business outcomes.",
        incorrectExplanations: [
            "Scale is about scaling operations.",
            "Align is about identifying capability gaps.",
            "Launch is about deploying workloads."
        ]
    },
    {
        question: "Which option is a customer responsibility under the AWS shared responsibility model?",
        answers: ["Maintenance of underlying hardware of Amazon EC2 instances", "Application data security", "Physical security of data centers", "Maintenance of VPC components"],
        correctAnswer: "Application data security",
        explanation: "Customers are responsible for the security of their data in the cloud.",
        incorrectExplanations: [
            "Hardware maintenance, physical security, and VPC component maintenance are AWS's responsibility."
        ]
    },
    {
        question: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
        answers: ["Use EC2 instances in multiple AWS Regions.", "Use EC2 instances in multiple Amazon CloudFront locations.", "Use EC2 instances in multiple edge locations.", "Use EC2 instances in AWS Local Zones."],
        correctAnswer: "Use EC2 instances in multiple AWS Regions.",
        explanation: "Multiple AWS Regions provide geographic redundancy for disaster recovery.",
        incorrectExplanations: [
            "CloudFront locations, edge locations, and Local Zones are for content delivery and low latency, not disaster recovery."
        ]
    },
    {
        question: "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
        answers: ["Rehost", "Replatform", "Repurchase", "Refactor"],
        correctAnswer: "Refactor",
        explanation: "Refactoring involves re-architecting an application to take advantage of cloud-native features like microservices.",
        incorrectExplanations: [
            "Rehosting is lift and shift.",
            "Replatforming is lift, tinker, and shift.",
            "Repurchasing is replacing an existing application."
        ]
    },
    {
        question: "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
        answers: ["To access the AWS account as the AWS account root user", "To access the AWS account through the AWS Management Console", "To access the AWS account through a CLI", "To access all of a company’s AWS accounts"],
        correctAnswer: "To access the AWS account through a CLI",
        explanation: "Access keys are used to access AWS services through the AWS CLI or SDKs.",
        incorrectExplanations: [
            "Root user access is separate.",
            "Console access uses username/password.",
            "Access keys are specific to an IAM user."
        ]
    },
    {
        question: "Which option is an environment that consists of one or more data centers?",
        answers: ["Amazon CloudFront", "Availability Zone", "VPC", "AWS Outposts"],
        correctAnswer: "Availability Zone",
        explanation: "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.",
        incorrectExplanations: [
            "CloudFront is a CDN.",
            "VPC is a virtual network.",
            "Outposts brings AWS infrastructure on-premises."
        ]
    },
    {
        question: "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
        answers: ["AWS Snowmobile", "AWS Snowball Edge", "AWS Data Exchange", "AWS Database Migration Service (AWS DMS)"],
        correctAnswer: "AWS Snowmobile",
        explanation: "AWS Snowmobile is designed for transferring extremely large datasets (petabytes) to AWS.",
        incorrectExplanations: [
            "AWS Snowball Edge is for smaller datasets.",
            "AWS Data Exchange is for finding and subscribing to third-party data.",
            "AWS DMS migrates databases."
        ]
    },
    {
        question: "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
        answers: ["Amazon AppStream 2.0", "AWS AppSync", "Amazon WorkLink", "AWS Elastic Beanstalk"],
        correctAnswer: "Amazon AppStream 2.0",
        explanation: "Amazon AppStream 2.0 streams desktop applications to any device, regardless of hardware capabilities.",
        incorrectExplanations: [
            "AWS AppSync is a managed GraphQL service.",
            "Amazon WorkLink provides secure access to internal websites.",
            "AWS Elastic Beanstalk deploys and manages applications."
        ]
    },
    {
        question: "A company wants to query its server logs to gain insights about its customers’ experiences. Which AWS service will store this data MOST cost-effectively?",
        answers: ["Amazon Aurora", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon S3"],
        correctAnswer: "Amazon S3",
        explanation: "Amazon S3 is a cost-effective storage service for log files and other unstructured data.",
        incorrectExplanations: [
            "Amazon Aurora is a relational database.",
            "Amazon EFS is a scalable file system for EC2.",
            "Amazon EBS is block storage for EC2."
        ]
    },
    {
        question: "Which of the following is a recommended design principle for AWS Cloud architecture?",
        answers: ["Design tightly coupled components.", "Build a single application component that can handle all the application functionality.", "Make large changes on fewer iterations to reduce chances of failure.", "Avoid monolithic architecture by segmenting workloads."],
        correctAnswer: "Avoid monolithic architecture by segmenting workloads.",
        explanation: "Segmenting workloads into smaller, loosely coupled components improves scalability and resilience.",
        incorrectExplanations: [
            "Tightly coupled components are less flexible.",
            "Monolithic applications are harder to scale.",
            "Frequent, small changes are preferred."
        ]
    },
    {
        question: "Which AWS service helps users audit API activity across their AWS account?",
        answers: ["AWS CloudTrail", "Amazon Inspector", "AWS WAF", "AWS Config"],
        correctAnswer: "AWS CloudTrail",
        explanation: "AWS CloudTrail records API calls made on your account and delivers log files to your Amazon S3 bucket.",
        incorrectExplanations: [
            "Amazon Inspector assesses application vulnerabilities.",
            "AWS WAF protects web applications.",
            "AWS Config assesses resource configurations."
        ]
    },
    {
        question: "Which task is a customer’s responsibility, according to the AWS shared responsibility model?",
        answers: ["Management of the guest operating systems", "Maintenance of the configuration of infrastructure devices", "Management of the host operating systems and virtualization", "Maintenance of the software that powers Availability Zones"],
        correctAnswer: "Management of the guest operating systems",
        explanation: "Customers are responsible for managing the guest OS on EC2 instances.",
        incorrectExplanations: [
            "Infrastructure devices, host OS, and Availability Zone software are AWS's responsibility."
        ]
    },
    {
        question: "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
        answers: ["Amazon DynamoDB", "Amazon EC2 Spot Instances", "AWS Snow Family", "Amazon EC2 Auto Scaling"],
        correctAnswer: "Amazon EC2 Auto Scaling",
        explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand.",
        incorrectExplanations: [
            "Amazon DynamoDB is a NoSQL database.",
            "Spot Instances are for flexible workloads.",
            "AWS Snow Family is for data migration."
        ]
    },
    {
        question: "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
        answers: ["AWS CloudHSM", "AWS Key Management Service (AWS KMS)", "AWS Secrets Manager", "Server-side encryption"],
        correctAnswer: "AWS Secrets Manager",
        explanation: "AWS Secrets Manager helps you rotate, manage, and retrieve database credentials, API keys, and other secrets.",
        incorrectExplanations: [
            "AWS CloudHSM provides hardware security modules.",
            "AWS KMS manages encryption keys.",
            "Server-side encryption encrypts data at rest."
        ]
    },
    {
        question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        answers: ["Amazon GuardDuty", "Amazon Macie", "Amazon Inspector", "AWS Shield"],
        correctAnswer: "Amazon Macie",
        explanation: "Amazon Macie uses machine learning to discover and protect sensitive data in S3 buckets.",
        incorrectExplanations: [
            "Amazon GuardDuty is a threat detection service.",
            "Amazon Inspector assesses application vulnerabilities.",
            "AWS Shield provides DDoS protection."
        ]
    },
    {
        question: "Which actions are best practices for an AWS account root user? (Choose two.)",
        answers: ["Share root user credentials with team members.", "Create multiple root users for the account, separated by environment.", "Enable multi-factor authentication (MFA) on the root user.", "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.", "Use programmatic access instead of the root user and password."],
        correctAnswer: ["Enable multi-factor authentication (MFA) on the root user.", "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user."],
        explanation: "Enabling MFA and using IAM users for daily tasks are best practices for root user security.",
        incorrectExplanations: [
            "Root user credentials should never be shared.",
            "Multiple root users are not recommended.",
            "Programmatic access is not a specific recommendation for root user."
        ]
    },
    {
        question: "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?",
        answers: ["Create a read replica of the DB instance.", "Create a template of the DB instance by using AWS CloudFormation.", "Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.", "Modify the DB instance to be a Multi-AZ deployment."],
        correctAnswer: "Modify the DB instance to be a Multi-AZ deployment.",
        explanation: "Multi-AZ deployments provide high availability and failover capabilities for RDS DB instances.",
        incorrectExplanations: [
            "Read replicas are for read scaling.",
            "CloudFormation templates are for infrastructure as code.",
            "Snapshots are for backups and recovery, but not for fast failover."
        ]
    },
    {
        question: "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        answers: ["Reserved Instances", "Spot Instances", "On-Demand Instances", "Dedicated Hosts"],
        correctAnswer: "Reserved Instances",
        explanation: "Reserved Instances offer significant cost savings for consistent, long-term usage.",
        incorrectExplanations: [
            "Spot Instances can be interrupted.",
            "On-Demand Instances are more expensive for long-term usage.",
            "Dedicated Hosts are for single-tenant hardware and are more expensive."
        ]
    },
    {
        question: "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?",
        answers: ["The company", "AWS", "Firewall vendor", "AWS Marketplace partner"],
        correctAnswer: "The company",
        explanation: "Customers are responsible for the security of their data in the cloud.",
        incorrectExplanations: [
            "AWS is responsible for the security of the cloud.",
            "Firewall vendors and Marketplace partners are not responsible for customer data security."
        ]
    },
    {
        question: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
        answers: ["Security", "Reliability", "Performance efficiency", "Cost optimization"],
        correctAnswer: "Reliability",
        explanation: "Reliability focuses on the ability of a system to recover from failures and meet demand.",
        incorrectExplanations: [
            "Security is about protecting data.",
            "Performance efficiency is about using resources efficiently.",
            "Cost optimization is about minimizing costs."
        ]
    },
    {
        question: "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?",
        answers: ["AWS Lake Formation", "IAM credential report", "Amazon CloudWatch", "IAM Access Analyzer"],
        correctAnswer: "IAM Access Analyzer",
        explanation: "IAM Access Analyzer helps identify resources shared with external entities.",
        incorrectExplanations: [
            "Lake Formation is for building data lakes.",
            "IAM credential reports are for user credentials.",
            "CloudWatch monitors applications and resources."
        ]
    },
    {
        question: "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?",
        answers: ["Amazon Athena", "Amazon Kendra", "Amazon QuickSight", "Amazon Redshift"],
        correctAnswer: "Amazon QuickSight",
        explanation: "Amazon QuickSight allows you to create interactive dashboards with ML-powered insights.",
        incorrectExplanations: [
            "Athena queries data in S3.",
            "Kendra is a search service.",
            "Redshift is a data warehouse."
        ]
    },
    {
        question: "Which of the following is an AWS value proposition that describes a user’s ability to scale infrastructure based on demand?",
        answers: ["Speed of innovation", "Resource elasticity", "Decoupled architecture", "Global deployment"],
        correctAnswer: "Resource elasticity",
        explanation: "Resource elasticity allows you to scale resources up or down based on demand.",
        incorrectExplanations: [
            "Speed of innovation is a general benefit.",
            "Decoupled architecture improves system resilience.",
            "Global deployment is about global reach."
        ]
    },
    {
        question: "Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?",
        answers: ["Enable S3 Cross-Region Replication (CRR) on the S3 bucket.", "Use IAM roles for applications that require access to the S3 bucket.", "Configure AWS WAF to prevent unauthorized access to the S3 bucket.", "Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket."],
        correctAnswer: "Use IAM roles for applications that require access to the S3 bucket.",
        explanation: "IAM roles provide secure, temporary credentials for applications to access AWS resources.",
        incorrectExplanations: [
            "CRR is for data replication.",
            "WAF protects web applications.",
            "GuardDuty is a threat detection service."
        ]
    },
    {
        question: "A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?",
        answers: ["The ability the ensure high availability by deploying workloads to multiple regions", "A pay-as-you-go model for many services and resources", "The ability to transfer infrastructure management to the AWS Cloud", "The ability to provision and deprovision resources quickly with minimal effort"],
        correctAnswer: "The ability to provision and deprovision resources quickly with minimal effort",
        explanation: "Agility in AWS means quickly provisioning and deprovisioning resources as needed.",
        incorrectExplanations: [
            "High availability is about reliability.",
            "Pay-as-you-go is about cost.",
            "Transferring management is about operational efficiency."
        ]
    },
    {
        question: "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?",
        answers: ["AWS Identity and Access Management (IAM)", "Amazon Cognito", "AWS IAM Identity Center (AWS Single Sign-On)", "AWS CLI"],
        correctAnswer: "AWS IAM Identity Center (AWS Single Sign-On)",
        explanation: "AWS IAM Identity Center provides single sign-on access to AWS accounts and SAML 2.0 applications.",
        incorrectExplanations: [
            "IAM manages access to AWS services.",
            "Cognito is for user sign-up and sign-in.",
            "CLI is a command-line interface."
        ]
    },
    {
        question: "Which AWS service should users use to learn about AWS service availability and operations?",
        answers: ["Amazon EventBridge", "AWS Service Catalog", "AWS Control Tower", "AWS Health Dashboard"],
        correctAnswer: "AWS Health Dashboard",
        explanation: "AWS Health Dashboard provides information about the operational status of AWS services.",
        incorrectExplanations: [
            "Amazon EventBridge is a serverless event bus.",
            "AWS Service Catalog allows you to create and manage catalogs of IT services.",
            "AWS Control Tower sets up and governs a secure, multi-account AWS environment."
        ]
    },
    {
        question: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
        answers: ["VPC Flow Logs", "Amazon Inspector", "VPC endpoint services", "NAT gateway"],
        correctAnswer: "VPC Flow Logs",
        explanation: "VPC Flow Logs record information about the IP traffic going to and from network interfaces in your VPC.",
        incorrectExplanations: [
            "Amazon Inspector is a security vulnerability assessment service.",
            "VPC endpoint services provide private connectivity to AWS services.",
            "NAT gateway enables instances in a private subnet to connect to the internet."
        ]
    },
    {
        question: "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?",
        answers: ["Software licenses", "Networking", "Customer data", "Encryption keys"],
        correctAnswer: "Customer data",
        explanation: "Customers are always responsible for the security and management of their data in the cloud.",
        incorrectExplanations: [
            "Software licenses and encryption keys are sometimes shared, and networking is AWS's responsibility for the AWS network itself."
        ]
    },
    {
        question: "Which AWS service can be used to retrieve compliance reports on demand?",
        answers: ["AWS Secrets Manager", "AWS Artifact", "AWS Security Hub", "AWS Certificate Manager"],
        correctAnswer: "AWS Artifact",
        explanation: "AWS Artifact provides on-demand access to AWS' security and compliance reports.",
        incorrectExplanations: [
            "AWS Secrets Manager manages secrets.",
            "AWS Security Hub is a security posture management service.",
            "AWS Certificate Manager provides SSL/TLS certificates."
        ]
    },
    {
        question: "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?",
        answers: ["AWS WAF", "AWS Trusted Advisor", "Amazon Inspector", "AWS Shield"],
        correctAnswer: "Amazon Inspector",
        explanation: "Amazon Inspector assesses EC2 instances for vulnerabilities and deviations from best practices.",
        incorrectExplanations: [
            "AWS WAF protects web applications.",
            "AWS Trusted Advisor provides best practice recommendations.",
            "AWS Shield provides DDoS protection."
        ]
    },
    {
        question: "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?",
        answers: ["AWS DataSync", "AWS Application Migration Service", "AWS Application Discovery Service", "AWS Database Migration Service (AWS DMS)"],
        correctAnswer: "AWS Application Discovery Service",
        explanation: "AWS Application Discovery Service helps you plan migration projects by gathering information about your on-premises servers.",
        incorrectExplanations: [
            "AWS DataSync automates data transfers.",
            "AWS Application Migration Service migrates applications.",
            "AWS DMS migrates databases."
        ]
    },
    {
        question: "Which action will help increase security in the AWS Cloud?",
        answers: ["Enable programmatic access for all IAM users.", "Use IAM users instead of IAM roles to delegate permissions.", "Rotate access keys on a reoccurring basis.", "Use inline policies instead of customer managed policies."],
        correctAnswer: "Rotate access keys on a reoccurring basis.",
        explanation: "Rotating access keys reduces the risk of compromised credentials.",
        incorrectExplanations: [
            "Programmatic access should be limited.",
            "IAM roles are preferred over IAM users for delegation.",
            "Customer managed policies are preferred over inline policies for reusability."
        ]
    },
    {
        question: "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?",
        answers: ["AWS Cloud Adoption Framework (AWS CAF)", "AWS Pricing Calculator", "AWS Well-Architected Framework", "AWS Budgets"],
        correctAnswer: "AWS Cloud Adoption Framework (AWS CAF)",
        explanation: "AWS CAF provides guidance and best practices for cloud adoption, including readiness assessment.",
        incorrectExplanations: [
            "AWS Pricing Calculator estimates costs.",
            "AWS Well-Architected Framework reviews workloads.",
            "AWS Budgets sets cost and usage budgets."
        ]
    },
    {
        question: "Which of the following describes some of the core functionality of Amazon S3?",
        answers: ["Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.", "Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.", "Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.", "Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources."],
        correctAnswer: "Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.",
        explanation: "Amazon S3 is an object storage service designed for scalability, security, and data availability.",
        incorrectExplanations: [
            "S3 is not block storage.",
            "S3 is not a file storage system using SMB.",
            "S3 is not a fully managed NFS."
        ]
    },
    {
        question: "Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?",
        answers: ["High availability", "Economies of scale", "Pay-as-you-go pricing", "Global reach"],
        correctAnswer: "Pay-as-you-go pricing",
        explanation: "Pay-as-you-go pricing allows you to pay for only the resources you use, replacing fixed expenses with variable expenses.",
        incorrectExplanations: [
            "High availability is about system uptime.",
            "Economies of scale are about cost savings from volume.",
            "Global reach is about global infrastructure."
        ]
    },
    {
        question: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
        answers: ["AWS VPN", "Elastic Load Balancing", "AWS Direct Connect", "VPC peering", "Amazon CloudFront"],
        correctAnswer: ["AWS VPN", "AWS Direct Connect"],
        explanation: "AWS VPN and AWS Direct Connect provide ways to connect on-premises networks to a VPC.",
        incorrectExplanations: [
            "Elastic Load Balancing distributes traffic across instances.",
            "VPC peering connects VPCs.",
            "Amazon CloudFront is a content delivery network."
        ]
    },
    {
        question: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        answers: ["Amazon RDS", "Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service.",
        incorrectExplanations: [
            "Amazon RDS is a relational database service.",
            "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database.",
            "Amazon Redshift is a data warehousing service."
        ]
    },
    {
        question: "Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)",
        answers: ["Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.", "Base the selection of Amazon EC2 instance types on past utilization patterns.", "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.", "Use Multi-AZ deployments for Amazon RDS.", "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk."],
        correctAnswer: ["Base the selection of Amazon EC2 instance types on past utilization patterns.", "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers."],
        explanation: "Rightsizing involves selecting the appropriate instance types and using lifecycle policies to optimize storage costs.",
        incorrectExplanations: [
            "Switching databases is not rightsizing.",
            "Multi-AZ deployments are for high availability.",
            "Replacing EC2 with Elastic Beanstalk is a migration strategy."
        ]
    },
    {
        question: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
        answers: ["Network ACLs", "Security groups", "AWS Trusted Advisor", "AWS WAF"],
        correctAnswer: "Security groups",
        explanation: "Security groups act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic.",
        incorrectExplanations: [
            "Network ACLs control traffic at the subnet level.",
            "AWS Trusted Advisor provides best practice recommendations.",
            "AWS WAF protects web applications."
        ]
    },
    {
        question: "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
        answers: ["Perform operations as code.", "Enable traceability.", "Automatically scale to meet demand.", "Deploy resources globally to improve response time.", "Automatically recover from failure."],
        correctAnswer: ["Automatically scale to meet demand.", "Automatically recover from failure."],
        explanation: "Automatically scaling and recovering from failures are key principles for reliability.",
        incorrectExplanations: [
            "Operations as code is for operational excellence.",
            "Traceability is for operational excellence.",
            "Global deployment is for performance."
        ]
    },
    {
        question: "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?",
        answers: ["Inbound data transfer from the internet", "Outbound data transfer to the internet", "Data transfer between AWS Regions", "Data transfer between Availability Zones"],
        correctAnswer: "Inbound data transfer from the internet",
        explanation: "Inbound data transfer to AWS from the internet is free.",
        incorrectExplanations: [
            "Outbound data transfer to the internet is charged.",
            "Data transfer between Regions is charged.",
            "Data transfer between Availability Zones within a Region is charged."
        ]
    },
    {
        question: "A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement?",
        answers: ["AWS Marketplace", "Amazon Machine Image (AMI)", "AWS CloudFormation", "AWS OpsWorks"],
        correctAnswer: "AWS CloudFormation",
        explanation: "AWS CloudFormation allows you to define and provision infrastructure as code using templates.",
        incorrectExplanations: [
            "AWS Marketplace is a digital catalog.",
            "AMI is a template for EC2 instances.",
            "AWS OpsWorks is a configuration management service."
        ]
    },
    {
        question: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
        answers: ["AWS Step Functions", "Amazon Simple Notification Service (Amazon SNS)", "Amazon Kinesis Data Streams", "Amazon Simple Queue Service (Amazon SQS)"],
        correctAnswer: "Amazon Simple Queue Service (Amazon SQS)",
        explanation: "Amazon SQS provides message queuing, and SQS FIFO queues ensure messages are processed in order.",
        incorrectExplanations: [
            "AWS Step Functions coordinates workflows.",
            "Amazon SNS is for pub/sub messaging.",
            "Amazon Kinesis Data Streams is for real-time data streaming."
        ]
    },
    {
        "question": "Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?",
        "answers": ["AWS API", "AWS Lightsail", "AWS Cloud9", "AWS CloudShell"],
        "correctAnswer": ["AWS CloudShell"],
        "explanation": "AWS CloudShell is a browser-based shell that allows you to manage and interact with AWS resources directly from the AWS Management Console. It is pre-authenticated, meaning you don't need to manage separate credentials.",
        "incorrectExplanations": [
            "AWS API is an Application Programming Interface, not a browser-based shell.",
            "AWS Lightsail is a service that provides virtual private servers (VPS), not a browser-based shell.",
            "AWS Cloud9 is a cloud-based integrated development environment (IDE). While browser based, it is not just a shell, it is a full IDE."
        ]
    },
    {
        "question": "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)",
        "answers": ["Amazon Athena", "Amazon RDS", "Amazon EC2", "Amazon DynamoDB", "Amazon Aurora"],
        "correctAnswer": ["Amazon RDS", "Amazon Aurora"],
        "explanation": "Amazon RDS and Amazon Aurora both offer PostgreSQL-compatible managed database services.",
        "incorrectExplanations": ["Amazon Athena is a serverless query service for S3.", "Amazon EC2 provides virtual servers, not managed databases.", "Amazon DynamoDB is a NoSQL database service."]
    },
    {
        "question": "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
        "answers": ["AWS IoT Core", "Amazon Lightsail", "AWS Storage Gateway", "AWS Snowball Edge"],
        "correctAnswer": ["AWS Snowball Edge"],
        "explanation": "AWS Snowball Edge provides on-premises compute and storage capabilities for environments with limited or no connectivity.",
        "incorrectExplanations": ["AWS IoT Core requires internet connectivity.", "Amazon Lightsail provides virtual private servers, not on-premises data processing.", "AWS Storage Gateway requires network connectivity to AWS."]
    },
    {
        "question": "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?",
        "answers": ["AWS Certificate Manager (ACM)", "IAM roles", "AWS Security Hub", "Amazon GuardDuty"],
        "correctAnswer": ["IAM roles"],
        "explanation": "IAM roles provide temporary security credentials for EC2 instances to access other AWS services.",
        "incorrectExplanations": ["AWS Certificate Manager manages SSL/TLS certificates.", "AWS Security Hub is a security posture management service.", "Amazon GuardDuty is a threat detection service."]
    },
    {
        "question": "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
        "answers": ["AWS CloudFormation", "AWS Elastic Beanstalk", "Amazon EC2", "AWS OpsWorks"],
        "correctAnswer": ["AWS Elastic Beanstalk"],
        "explanation": "AWS Elastic Beanstalk simplifies application deployment and management, especially for users with limited AWS knowledge.",
        "incorrectExplanations": ["AWS CloudFormation requires infrastructure as code knowledge.", "Amazon EC2 requires manual configuration.", "AWS OpsWorks requires configuration management knowledge."]
    },
    {
        "question": "A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?",
        "answers": ["Amazon CloudFront", "Elastic Load Balancing", "Amazon S3", "Amazon Elastic Transcoder"],
        "correctAnswer": ["Amazon CloudFront"],
        "explanation": "Amazon CloudFront is a content delivery network that provides secure delivery of content with low latency and high transfer speeds.",
        "incorrectExplanations": ["Elastic Load Balancing distributes traffic across instances.", "Amazon S3 is object storage.", "Amazon Elastic Transcoder converts media files."]
    },
    {
        "question": "A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software?",
        "answers": ["AWS Resource Access Manager", "AWS Managed Services", "AWS License Manager", "AWS Marketplace"],
        "correctAnswer": ["AWS Marketplace"],
        "explanation": "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors.",
        "incorrectExplanations": ["AWS Resource Access Manager shares AWS resources.", "AWS Managed Services provides operational support.", "AWS License Manager manages software licenses."]
    },
    {
        "question": "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?",
        "answers": ["Amazon S3", "Amazon Elastic File System (Amazon EFS)", "Amazon FSx for Windows File Server", "Amazon Elastic Block Store (Amazon EBS)"],
        "correctAnswer": ["Amazon FSx for Windows File Server"],
        "explanation": "Amazon FSx for Windows File Server provides fully managed Windows file storage accessible over SMB.",
        "incorrectExplanations": ["Amazon S3 is object storage.", "Amazon EFS is a scalable file system for Linux.", "Amazon EBS is block storage for EC2."]
    },
    {
        "question": "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
        "answers": ["AWS Firewall Manager", "Amazon GuardDuty", "Amazon Detective", "AWS WAF"],
        "correctAnswer": ["AWS Firewall Manager"],
        "explanation": "AWS Firewall Manager centrally manages firewall rules across multiple AWS accounts and applications.",
        "incorrectExplanations": ["Amazon GuardDuty is a threat detection service.", "Amazon Detective analyzes security findings.", "AWS WAF protects web applications."]
    },
    {
        "question": "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
        "answers": ["Configure identity and access management for applications.", "Manage encryption options for data that is stored on AWS.", "Configure security groups for Amazon EC2 instances.", "Maintain the physical hardware of the infrastructure."],
        "correctAnswer": ["Maintain the physical hardware of the infrastructure."],
        "explanation": "AWS is responsible for the security of the cloud, including the physical infrastructure.",
        "incorrectExplanations": ["IAM configuration, encryption management, and security group configuration are customer responsibilities."]
    },
    {
        "question": "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
        "answers": ["VPC endpoint", "NAT gateway", "Amazon PrivateLink", "VPC peering"],
        "correctAnswer": ["NAT gateway"],
        "explanation": "A NAT gateway allows instances in a private subnet to connect to the internet while preventing inbound internet traffic.",
        "incorrectExplanations": ["VPC endpoints provide private access to AWS services.", "Amazon PrivateLink provides private connectivity to services.", "VPC peering connects VPCs."]
    },
    {
        "question": "A company needs to automate the deployment of its infrastructure on AWS. The company wants to use infrastructure as code (IaC) to define its cloud resources. Which AWS service should the company use to meet these requirements?",
        "answers": ["AWS CloudFormation", "AWS CodeDeploy", "AWS Elastic Beanstalk", "AWS OpsWorks"],
        "correctAnswer": ["AWS CloudFormation"],
        "explanation": "AWS CloudFormation allows you to define and provision infrastructure as code.",
        "incorrectExplanations": ["AWS CodeDeploy automates application deployments.", "AWS Elastic Beanstalk deploys and manages applications.", "AWS OpsWorks is a configuration management service."]
    },
    {
        "question": "Which cloud architecture design concept is supported by distributing workloads across various Availability Zones?",
        "answers": ["A. Implement automation.", "B. Design for agility.", "C. Design for failure.", "D. Implement elasticity."],
        "correctAnswer": "C. Design for failure.",
        "explanation": "By distributing workloads across multiple Availability Zones, you are building a resilient system that can withstand the failure of a single location, which is a core concept of designing for failure.",
        "incorrectExplanations": ["Implementing automation is a practice under the Operational Excellence pillar, not directly tied to multi-AZ deployment for resiliency.", "Designing for agility refers to the ability to respond to change and innovate quickly, which is a broader cloud benefit, not specific to multi-AZ deployment.", "Implementing elasticity is about scaling resources up or down to meet demand, which is different from distributing them for high availability."]
    },
    {
        "question": "Which compute hosting model should be accounted for in the Total Cost of Ownership (TCO) when undertaking a cost analysis that allows physical isolation of a customer workload?",
        "answers": ["A. Dedicated Hosts", "B. Reserved Instances", "C. On-Demand Instances", "D. No Upfront Reserved Instances"],
        "correctAnswer": "A. Dedicated Hosts",
        "explanation": "Dedicated Hosts provide a physical server with EC2 instance capacity dedicated for your use. This is the only option that offers the physical isolation required for certain compliance and licensing needs.",
        "incorrectExplanations": ["Reserved Instances are a billing discount applied to On-Demand instances and do not provide physical isolation.", "On-Demand Instances are billed by the hour or second and do not provide physical isolation.", "No Upfront Reserved Instances are a payment option for Reserved Instances and do not provide physical isolation."]
    },
    {
        "question": "Who is accountable for security and compliance under the AWS shared responsibility model?",
        "answers": ["A. The customer is responsible.", "B. AWS is responsible.", "C. AWS and the customer share responsibility.", "D. AWS shares responsibility with the relevant governing body."],
        "correctAnswer": "C. AWS and the customer share responsibility.",
        "explanation": "The shared responsibility model states that AWS is responsible for 'security of the cloud' (the underlying infrastructure), while the customer is responsible for 'security in the cloud' (their data, applications, and configuration of security services).",
        "incorrectExplanations": ["The customer is not solely responsible for security; AWS handles the security of the underlying infrastructure.", "AWS is not solely responsible for security; the customer is responsible for what they deploy on AWS.", "AWS does not share responsibility with a governing body; the responsibility is shared between AWS and the customer."]
    },
    {
        "question": "Which pillar of the AWS Well-Architected Framework is supported by the design philosophy of performing operations as code?",
        "answers": ["A. Performance efficiency", "B. Operational excellence", "C. Reliability", "D. Security"],
        "correctAnswer": "B. Operational excellence",
        "explanation": "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value, and continuously improving processes and procedures. Using infrastructure as code is a key practice to achieve this.",
        "incorrectExplanations": ["Performance efficiency is about using computing resources efficiently.", "Reliability is the ability of a system to recover from infrastructure or service disruptions.", "Security is the ability to protect information, systems, and assets."]
    },
    {
        "question": "Which AWS service can identify the person who made the API request when an Amazon EC2 instance is terminated?",
        "answers": ["A. Amazon CloudWatch", "B. AWS CloudTrail", "C. AWS X-Ray", "D. AWS Identity and Access Management (IAM)"],
        "correctAnswer": "B. AWS CloudTrail",
        "explanation": "AWS CloudTrail records API calls and actions made in your AWS account, providing a complete audit trail that can be used to identify who performed a specific action, such as terminating an EC2 instance.",
        "incorrectExplanations": ["Amazon CloudWatch is a monitoring service that collects logs and metrics, but it doesn't provide user-level action history like CloudTrail.", "AWS X-Ray helps developers analyze and debug distributed applications.", "AWS Identity and Access Management (IAM) is used to manage access to AWS resources, but it doesn't log the actions of those users."]
    },
    {
        "question": "What is raised when a business deploys web servers across several AWS Regions?",
        "answers": ["A. Coupling", "B. Availability", "C. Security", "D. Durability"],
        "correctAnswer": "B. Availability",
        "explanation": "Deploying resources across multiple regions increases the geographic distribution and fault tolerance of your application, thereby raising its availability.",
        "incorrectExplanations": ["Coupling is a measure of the interdependence between system components, not a benefit of multi-region deployment.", "Security is a separate pillar of the Well-Architected Framework and is not a direct consequence of multi-region deployment.", "Durability refers to the long-term data protection, primarily a feature of services like S3, and is not the primary benefit of deploying web servers across regions."]
    },
    {
        "question": "What is the unique advantage that Enterprise Support customers receive?",
        "answers": ["A. Access to a Technical Project Manager", "B. Access to a Technical Account Manager", "C. Access to a Cloud Support Engineer", "D. Access to a Solutions Architect"],
        "correctAnswer": "B. Access to a Technical Account Manager",
        "explanation": "A Technical Account Manager (TAM) is a designated point of contact and is a unique feature of the Enterprise Support plan.",
        "incorrectExplanations": ["Access to a Technical Project Manager is not a standard feature of any AWS support plan.", "Access to a Cloud Support Engineer is provided with all AWS support plans.", "Access to a Solutions Architect is not a standard feature of any AWS support plan."]
    },
    {
        "question": "Which of the following price options would result in the highest reduction after making an Amazon EC2 Dedicated Host reservation?",
        "answers": ["A. No upfront payment", "B. Hourly on-demand payment", "C. Partial upfront payment", "D. All upfront payment"],
        "correctAnswer": "D. All upfront payment",
        "explanation": "Making a full upfront payment for a Dedicated Host reservation provides the largest discount and therefore the highest cost reduction.",
        "incorrectExplanations": ["'No upfront payment' and 'Partial upfront payment' options offer a discount but not the highest possible reduction.", "'Hourly on-demand payment' is the standard pay-as-you-go model, which offers no reservation discount."]
    },
    {
        "question": "Amazon Elastic Container Service (Amazon ECS) and Amazon DynamoDB are used by a firm to execute its mission-critical web application. Multiple times during the day, the workload jumps to up to ten times the regular level. Which AWS Cloud feature helps the business to adapt to these demand changes?",
        "answers": ["A. Agility", "B. Global reach", "C. Scalability", "D. Security"],
        "correctAnswer": "C. Scalability",
        "explanation": "Scalability is the ability of a system to grow or shrink capacity on demand to handle changes in workload, which is exactly what is described in the scenario.",
        "incorrectExplanations": ["Agility is the ability to develop and deliver new applications or features quickly, not a direct response to workload changes.", "Global reach is the ability to deploy applications in multiple regions worldwide.", "Security is the ability to protect data and systems, which is a different concept from adapting to demand."]
    },
    {
        "question": "Which AWS service supports MySQL and PostgreSQL as relational databases?",
        "answers": ["A. Amazon Redshift", "B. Amazon DynamoDB", "C. Amazon Aurora", "D. Amazon Neptune"],
        "correctAnswer": "C. Amazon Aurora",
        "explanation": "Amazon Aurora is a cloud-native relational database service that is compatible with both MySQL and PostgreSQL and provides high performance and availability.",
        "incorrectExplanations": ["Amazon Redshift is a data warehousing service, not a relational database for transactional workloads.", "Amazon DynamoDB is a NoSQL key-value and document database, not a relational database.", "Amazon Neptune is a graph database service, not a relational database."]
    },
    {
        "question": "Which functionality may be utilized to prevent inadvertent overwrites or deletions of Amazon S3 buckets?",
        "answers": ["A. Lifecycle policy", "B. Object versioning", "C. Server-side encryption", "D. Bucket ACL"],
        "correctAnswer": "B. Object versioning",
        "explanation": "Object versioning keeps multiple versions of an object in a single S3 bucket. This allows you to recover objects from accidental deletion or overwrites.",
        "incorrectExplanations": ["A Lifecycle policy automates moving or deleting objects after a certain period, which could lead to data loss if used incorrectly.", "Server-side encryption is used to encrypt data at rest, and it does not protect against overwrites or deletions.", "A Bucket ACL (Access Control List) manages permissions for a bucket and its objects, but it does not protect against accidental actions by an authorized user."]
    },
    {
        "question": "To achieve high availability, how many Availability Zones should computing resources be provided across?",
        "answers": ["A. A minimum of one", "B. A minimum of two", "C. A minimum of three", "D. A minimum of four or more"],
        "correctAnswer": "B. A minimum of two",
        "explanation": "To achieve high availability and fault tolerance, it is a best practice to deploy resources across at least two Availability Zones. This ensures that if one zone fails, your application can continue to run in another.",
        "incorrectExplanations": ["A minimum of one Availability Zone does not provide high availability or fault tolerance.", "While three or more Availability Zones can be used for even higher availability, the question asks for a minimum, and two is the recommended minimum for fault tolerance.", "Using four or more is not a minimum requirement and is often unnecessary for most workloads."]
    },
    {
        "question": "In the case of an environmental disruption, a company needs to make sure its infrastructure is structured for fault tolerance and business continuity. Which parts of the AWS architecture should the organization replicate?",
        "answers": ["A. Edge locations", "B. Availability Zones", "C. Regions", "D. Amazon Route 53"],
        "correctAnswer": "C. Regions",
        "explanation": "An environmental disruption, such as a natural disaster, can affect an entire geographic area. Replicating infrastructure across multiple AWS Regions provides the highest level of fault tolerance and business continuity.",
        "incorrectExplanations": ["Edge locations are used by Amazon CloudFront for content delivery and do not host core infrastructure.", "Availability Zones are isolated data centers within a single region, but an environmental disruption could affect the entire region.", "Amazon Route 53 is a DNS service and is used to route traffic, but it is not the infrastructure itself that needs to be replicated."]
    },
    {
        "question": "An Amazon RDS database instance is deployed across several Availability Zones. Which pillar of the AWS Well-Architected Framework is included in this strategy?",
        "answers": ["A. Performance efficiency", "B. Reliability", "C. Cost optimization", "D. Security"],
        "correctAnswer": "B. Reliability",
        "explanation": "Deploying an RDS instance across multiple Availability Zones falls under the Reliability pillar. This strategy is designed to ensure the database can withstand a failure in one zone and remain available.",
        "incorrectExplanations": ["Performance efficiency is about using computing resources efficiently.", "Cost optimization focuses on avoiding unnecessary costs.", "Security is about protecting data and systems."]
    },
    {
        "question": "What are the AWS Cloud's advantages? (Select two.)",
        "answers": ["A. Fixed rate monthly cost", "B. No need to guess capacity requirements", "C. Increased speed to market", "D. Increased upfront capital expenditure", "E. Physical access to cloud data centres"],
        "correctAnswer": ["B. No need to guess capacity requirements", "C. Increased speed to market"],
        "explanation": "With the cloud, you can provision the exact amount of capacity you need, eliminating the need to guess and over-provision. This on-demand provisioning also allows you to deploy applications and services faster, increasing your speed to market.",
        "incorrectExplanations": ["AWS Cloud is a pay-as-you-go model, not a fixed rate monthly cost.", "The cloud reduces upfront capital expenditure by converting it to a variable expense.", "Physical access to cloud data centers is not possible, as AWS manages the underlying infrastructure."]
    },
    {
        "question": "When utilizing the AWS Command Line Interface (AWS CLI), which of the following Identity and Access Management (IAM) entities is connected with an access key ID and secret access key?",
        "answers": ["A. IAM group", "B. IAM user", "C. IAM role", "D. IAM policy"],
        "correctAnswer": "B. IAM user",
        "explanation": "An IAM user is a permanent AWS identity with long-term credentials like a password and access keys (an access key ID and secret access key). These credentials are used for programmatic access to the AWS environment via the AWS CLI or SDKs.",
        "incorrectExplanations": ["An IAM group is a collection of IAM users. It does not have its own credentials.", "An IAM role provides temporary credentials and is assumed by trusted entities, not a permanent identity with a set access key ID and secret access key.", "An IAM policy is a document that defines permissions. It is attached to a user, group, or role to grant permissions, but it is not a security principal itself."]
    },
    {
        "question": "Which AWS product or service enables businesses to monitor and classify their expenditure at a precise level?",
        "answers": ["A. Cost allocation tags", "B. Consolidated billing", "C. AWS Budgets", "D. AWS Marketplace"],
        "correctAnswer": "A. Cost allocation tags",
        "explanation": "Cost allocation tags are labels you can attach to AWS resources. They enable you to categorize costs and usage at a granular level based on business dimensions like projects, departments, or applications.",
        "incorrectExplanations": ["Consolidated billing is a feature of AWS Organizations that aggregates billing for multiple accounts into a single bill, but it doesn't provide granular cost classification.", "AWS Budgets allows you to set custom budgets and receive alerts when costs or usage exceed a budgeted amount, but it does not classify costs.", "AWS Marketplace is an online store for third-party software and services, and is not a cost classification tool."]
    },
    {
        "question": "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        "answers": ["A. Use of the Snowball Edge appliance for a 10-day period", "B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance", "C. The transfer of data from the Snowball Edge appliance into Amazon S3", "D. Daily use of the Snowball Edge appliance after 10 days"],
        "correctAnswer": "C. The transfer of data from the Snowball Edge appliance into Amazon S3",
        "explanation": "Data transfer IN to Amazon S3 is generally free. The purpose of Snowball is to transfer data into AWS, so the data transfer from the Snowball Edge device to Amazon S3 is offered at no cost.",
        "incorrectExplanations": ["There is a fee for using the Snowball Edge device, though it typically includes a certain number of days.", "Transferring data OUT of Amazon S3 incurs standard data egress charges.", "Using the Snowball Edge device after the initial included days (typically 10) incurs a daily fee."]
    },
    {
        "question": "Which concepts of AWS Cloud architecture may assist boost reliability? (Select two.)",
        "answers": ["A. Using monolithic architecture", "B. Measuring overall efficiency", "C. Testing recovery procedures", "D. Adopting a consumption model", "E. Automatically recovering from failure"],
        "correctAnswer": ["C. Testing recovery procedures", "E. Automatically recovering from failure"],
        "explanation": "Testing recovery procedures ensures that your systems can fail over and recover as expected. Automatically recovering from failure, such as by using auto-scaling and monitoring, allows your application to remain available even when components fail.",
        "incorrectExplanations": ["Monolithic architecture creates a single point of failure and is generally less reliable than a distributed, microservices-based approach.", "Measuring overall efficiency is related to the Performance Efficiency pillar, not Reliability.", "Adopting a consumption model is a benefit of the cloud that relates to cost, not reliability."]
    },
    {
        "question": "Which AWS service enables customers to view AWS compliance control reports on-demand and self-service?",
        "answers": ["A. AWS Config", "B. Amazon GuardDuty", "C. AWS Trusted Advisor", "D. AWS Artifact"],
        "correctAnswer": "D. AWS Artifact",
        "explanation": "AWS Artifact is a self-service portal for on-demand access to AWS security and compliance reports, such as SOC, PCI, and ISO reports.",
        "incorrectExplanations": ["AWS Config is a service that assesses, audits, and evaluates the configurations of your AWS resources.", "Amazon GuardDuty is a threat detection service that monitors for malicious activity and unauthorized behavior.", "AWS Trusted Advisor provides recommendations to help you follow AWS best practices in cost optimization, performance, security, fault tolerance, and service quotas."]
    },
    {
        "question": "Which AWS service can identify when an Amazon EC2 instance was terminated?",
        "answers": ["A. AWS Identity and Access Management (IAM)", "B. AWS CloudTrail", "C. AWS Compute Optimizer", "D. Amazon EventBridge"],
        "correctAnswer": "B. AWS CloudTrail",
        "explanation": "AWS CloudTrail is a service that provides a history of AWS API calls for your account, including who made the call, from what IP address, and when. An EC2 instance termination is an API call that is logged by CloudTrail.",
        "incorrectExplanations": ["IAM is used for managing access and permissions to AWS services, not for logging API activity.", "AWS Compute Optimizer recommends optimal AWS resources for your workloads.", "Amazon EventBridge is a serverless event bus that connects applications. While it can be used to react to events like an instance termination, it does not provide the historical log of all API calls."]
    },
    {
        "question": "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
        "answers": ["A. Security groups", "B. Amazon Virtual Private Cloud (Amazon VPC) flow logs", "C. Network ACLs", "D. Amazon CloudWatch", "E. AWS CloudTrail"],
        "correctAnswer": ["A. Security groups", "C. Network ACLs"],
        "explanation": "Security Groups and Network ACLs (NACLs) act as virtual firewalls to control inbound and outbound traffic. Security Groups operate at the instance level, and NACLs operate at the subnet level.",
        "incorrectExplanations": ["VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC, but they do not block traffic.", "Amazon CloudWatch is a monitoring service that collects and tracks metrics, but it does not block traffic.", "AWS CloudTrail logs API calls and user activity, it does not block traffic."]
    },
    {
        "question": "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
        "answers": ["A. Amazon Macie", "B. Amazon Detective", "C. Amazon GuardDuty", "D. AWS IAM Access Analyzer"],
        "correctAnswer": "A. Amazon Macie",
        "explanation": "Amazon Macie uses machine learning and pattern matching to automatically discover, classify, and report on sensitive data, such as Personally Identifiable Information (PII) in your Amazon S3 buckets.",
        "incorrectExplanations": ["Amazon Detective analyzes log data to help you identify the root cause of security findings.", "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity.", "AWS IAM Access Analyzer helps you identify the resources in your organization and accounts that external entities could access."]
    },
    {
        "question": "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
        "answers": ["A. On-Demand Instances", "B. Dedicated Instances", "C. Spot Instances", "D. Reserved Instances"],
        "correctAnswer": "C. Spot Instances",
        "explanation": "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud. They are available at a steep discount compared to On-Demand prices but can be interrupted by AWS with a two-minute warning when the capacity is needed. This makes them ideal for fault-tolerant, flexible, and interruptible workloads like testing.",
        "incorrectExplanations": ["On-Demand Instances are billed by the second with no long-term commitment. They are more expensive than Spot Instances.", "Dedicated Instances run in a VPC on hardware that's dedicated to a single customer, which is the most expensive option.", "Reserved Instances are for workloads with a steady state and require a one- or three-year commitment, making them unsuitable for short-term, interruptible tasks."]
    },
    {
        "question": "A company is using Amazon DynamoDB. Which task is the company's responsibility, according to the AWS shared responsibility model?",
        "answers": ["A. Patch the operating system.", "B. Provision hosts.", "C. Manage database access permissions.", "D. Secure the operating system."],
        "correctAnswer": "C. Manage database access permissions.",
        "explanation": "For managed services like DynamoDB, AWS is responsible for the 'security of the cloud' (e.g., the underlying hardware, operating system, and database software). The customer is responsible for 'security in the cloud,' which includes managing access permissions, data encryption, and application-level security.",
        "incorrectExplanations": ["Patching and securing the operating system is a responsibility of AWS for fully managed services like DynamoDB.", "Provisioning hosts is part of the underlying infrastructure managed by AWS."]
    },
    {
        "question": "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughout capacity to meet database workload demands?",
        "answers": [
            "A. Amazon Redshift",
            "B. Amazon Aurora",
            "C. Amazon DynamoDB",
            "D. Amazon RDS"
        ],
        "correctAnswer": "C. Amazon DynamoDB",
        "explanation": "Amazon DynamoDB is a fully managed, serverless NoSQL database service that automatically scales its throughput capacity to meet workload demands. This eliminates the operational overhead of managing servers and ensures performance at any scale, which helps to reduce costs.",
        "incorrectExplanations": [
            "Amazon Redshift is a fully managed, petabyte-scale data warehouse service designed for analytics, not for transactional NoSQL workloads. It does not automatically scale throughput in the same way as a NoSQL database.",
            "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. While it is highly scalable, it is a SQL database and not a NoSQL database. Additionally, it is not fully serverless out-of-the-box like DynamoDB.",
            "Amazon RDS (Relational Database Service) is a managed service that simplifies the setup and operation of relational databases in the cloud. Like Aurora, it is a SQL database service and not a NoSQL database. While it manages administrative tasks, it requires more manual intervention for scaling compared to DynamoDB."
        ]
    },
    {
        "question": "Which AWS service is always provided at no charge?",
        "answers": [
            "A. Amazon S3",
            "B. AWS Identity and Access Management (IAM)",
            "C. Elastic Load Balancers",
            "D. AWS WAF"
        ],
        "correctAnswer": "B. AWS Identity and Access Management (IAM)",
        "explanation": "AWS Identity and Access Management (IAM) is a service that is free to use. You only pay for other AWS services when you use them to support your IAM usage, but IAM itself, including the creation of users, groups, and policies, has no charge.",
        "incorrectExplanations": [
            "Amazon S3 (Simple Storage Service) charges for storage, data transfer, and requests.",
            "Elastic Load Balancers charge for the number of hours they run and the amount of data processed.",
            "AWS WAF (Web Application Firewall) charges based on the number of web access control lists (Web ACLs) and the number of rules per Web ACL, as well as the number of web requests processed."
        ]
    },
    {
        "question": "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
        "answers": [
            "A. AWS Security Hub",
            "B. AWS Trusted Advisor",
            "C. Amazon EventBridge",
            "D. Amazon GuardDuty"
        ],
        "correctAnswer": "A. AWS Security Hub",
        "explanation": "AWS Security Hub is a central service that provides a comprehensive view of your security posture across your AWS accounts. It aggregates, organizes, and prioritizes security alerts, or findings, from multiple AWS services like GuardDuty and Inspector, and from AWS Partner solutions. It standardizes the findings so they can be easily analyzed and acted upon.",
        "incorrectExplanations": [
            "AWS Trusted Advisor provides recommendations to help you follow AWS best practices, but it does not aggregate alerts from other services. It focuses on cost optimization, security, performance, service limits, and fault tolerance.",
            "Amazon EventBridge is a serverless event bus that connects application data from your applications, integrated Software-as-a-Service (SaaS) applications, and AWS services. It is used to route events, not to aggregate and analyze security findings.",
            "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads. While it generates findings, it does not aggregate alerts from other services and partners like Security Hub does."
        ]
    },
    {
        "question": "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
        "answers": [
            "A. Amazon API Gateway",
            "B. IAM users",
            "C. AWS Security Token Service (AWS STS)",
            "D. IAM instance profiles"
        ],
        "correctAnswer": "C. AWS Security Token Service (AWS STS)",
        "explanation": "AWS Security Token Service (STS) is a web service that enables you to request temporary, limited-privilege credentials for IAM users or for users that you authenticate (federated users). It is the service used to grant temporary access to AWS resources without having to use long-term credentials.",
        "incorrectExplanations": [
            "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It is not used for providing temporary credentials for applications.",
            "IAM users are permanent identities with long-term credentials (like an access key ID and secret access key). The question specifically asks for temporary credentials.",
            "IAM instance profiles are a way to pass IAM roles to EC2 instances. While they provide temporary credentials, the core service for generating and managing those temporary credentials is AWS STS."
        ]
    },
    {
        "question": "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
        "answers": [
            "A. AWS CLI",
            "B. AWS Developer Center",
            "C. AWS Cloud Development Kit (AWS CDK)",
            "D. AWS CodeStar"
        ],
        "correctAnswer": "C. AWS Cloud Development Kit (AWS CDK)",
        "explanation": "The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation. It allows developers to use familiar programming languages like Python, Java, or TypeScript to define their cloud infrastructure.",
        "incorrectExplanations": [
            "AWS CLI (Command Line Interface) is a tool that allows you to control AWS services from the command line and automate them with scripts. It is not a framework for defining infrastructure as code.",
            "AWS Developer Center is a central hub for developer resources, tools, and documentation. It is not a framework for infrastructure as code.",
            "AWS CodeStar is a service that helps you quickly develop, build, and deploy applications on AWS. It integrates various services like AWS CodeCommit, CodeBuild, and CodeDeploy, but it is not the framework used to define infrastructure as code in the way AWS CDK is."
        ]
    },
    {
        "question": "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
        "answers": [
            "A. The ability to trade variable expense for fixed expense",
            "B. Increased speed and agility",
            "C. Lower variable costs over fixed costs",
            "D. Increased operational costs across data centers"
        ],
        "correctAnswer": "C. Lower variable costs over fixed costs",
        "explanation": "One of the key advantages of cloud computing is the ability to benefit from massive economies of scale. Because cloud providers like AWS aggregate the usage of hundreds of thousands of customers, they can achieve a lower variable cost. This translates into lower pay-as-you-go prices for individual customers, allowing them to lower their own variable costs.",
        "incorrectExplanations": [
            "Cloud computing allows you to trade **fixed** expense for **variable** expense. You pay only for the computing resources you consume, rather than having to make heavy upfront investments in data centers and servers.",
            "Increased speed and agility is a benefit of cloud computing, but it is a benefit of the on-demand nature of cloud resources, not a direct result of economies of scale.",
            "Cloud computing is designed to help reduce, not increase, operational costs by shifting the responsibility of running and maintaining data centers to the cloud provider."
        ]
    },
    {
        "question": "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?",
        "answers": [
            "A. Deliver the content through Amazon CloudFront.",
            "B. Store the content on Amazon S3 and enable S3 cross-region replication.",
            "C. Implement a VPN across multiple AWS Regions.",
            "D. Deliver the content through AWS PrivateLink"
        ],
        "correctAnswer": "A. Deliver the content through Amazon CloudFront.",
        "explanation": "Amazon CloudFront is a global content delivery network (CDN) service that caches content (like images and videos) at 'edge locations' around the world. This brings the content physically closer to end-users, reducing latency and providing a fast, secure, and cost-effective way to deliver content globally.",
        "incorrectExplanations": [
            "Storing content on Amazon S3 and using cross-region replication can provide high availability and durability, but it does not reduce latency for global users as effectively as a CDN. Users would still retrieve the content from a single S3 bucket, even if it is replicated in another region.",
            "Implementing a VPN (Virtual Private Network) is used to create a secure connection between networks, not for the low-latency, global delivery of public content.",
            "AWS PrivateLink is used to provide private connectivity between VPCs and AWS services. It is not a service for public, low-latency content delivery."
        ]
    },
    {
        "question": "A company is exploring the use of the AWS Cloud, and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?",
        "answers": [
            "A. AWS Free Tier",
            "B. AWS Pricing Calculator",
            "C. AWS Billing and Cost Management",
            "D. AWS Cost and Usage Report"
        ],
        "correctAnswer": "B. AWS Pricing Calculator",
        "explanation": "The AWS Pricing Calculator is a web-based tool that allows you to create an estimate for the cost of your AWS architecture solutions before you provision the resources. You can configure a cost estimate based on your unique needs and usage patterns.",
        "incorrectExplanations": [
            "The AWS Free Tier allows you to explore certain AWS services for free up to a specific usage limit. It is not a tool for estimating costs of a larger project.",
            "AWS Billing and Cost Management is a service used to monitor and manage your actual costs *after* you have started using AWS services.",
            "The AWS Cost and Usage Report provides a detailed breakdown of your AWS costs and usage *after* you have used the services. It is not a tool for pre-deployment estimation."
        ]
    },
    {
        "question": "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
        "answers": [
            "A. Amazon Connect",
            "B. AWS Wavelength",
            "C. AWS Regions",
            "D. AWS Direct Connect"
        ],
        "correctAnswer": "C. AWS Regions",
        "explanation": "An AWS Region is a physical location in the world where AWS clusters data centers. To host infrastructure as close as possible to a geographical location, a company would select an AWS Region that is geographically closest to its on-premises data center. This helps in reducing latency and improving performance.",
        "incorrectExplanations": [
            "Amazon Connect is a cloud-based contact center service. It is not a service used for selecting a geographical location for deploying resources.",
            "AWS Wavelength is a service that embeds AWS compute and storage services within 5G networks to deliver ultra-low latency applications. It is not the primary way to choose a geographical location for a standard relational database.",
            "AWS Direct Connect is a networking service that provides a private, dedicated network connection from your on-premises data center to AWS. While it helps with migration, it is not the resource used to select a geographical location."
        ]
    },
    {
        "question": "A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost. Which pricing options meet these requirements with the LOWEST cost? (Choose two.)",
        "answers": [
            "A. Spot Instances",
            "B. On-Demand Instances",
            "C. Reserved Instances",
            "D. Savings Plans",
            "E. Dedicated Hosts"
        ],
        "correctAnswer": [
            "C. Reserved Instances",
            "D. Savings Plans"
        ],
        "explanation": "Both Reserved Instances (RIs) and Savings Plans offer significant discounts in exchange for a commitment to a consistent amount of usage over a 1-year or 3-year term. They are designed for workloads with predictable usage and provide the lowest costs compared to on-demand pricing.",
        "incorrectExplanations": [
            "Spot Instances allow you to bid on unused EC2 capacity, offering large discounts, but they can be interrupted at any time. This makes them unsuitable for continuous production workloads.",
            "On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitment. This is the most flexible but also the most expensive pricing option.",
            "Dedicated Hosts are physical servers for your exclusive use. While they can be cost-effective for specific licensing needs, they do not typically offer the lowest cost for general-purpose production workloads compared to RIs and Savings Plans."
        ]
    },
    {
        "question": "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?",
        "answers": [
            "A. Data architecture",
            "B. Event management",
            "C. Cloud fluency",
            "D. Strategic partnership"
        ],
        "correctAnswer": "C. Cloud fluency",
        "explanation": "The AWS Cloud Adoption Framework (CAF) is organized into six perspectives. The **People** perspective focuses on organizational roles, skills, and processes. **Cloud fluency**, which involves training and skills development to help employees work with cloud technologies, is a key capability within this perspective.",
        "incorrectExplanations": [
            "**Data architecture** is part of the **Platform** perspective, which focuses on designing and implementing a cloud platform.",
            "**Event management** is a capability under the **Operations** perspective, which is concerned with maintaining the health and performance of cloud workloads.",
            "**Strategic partnership** is a capability under the **Business** perspective, which focuses on aligning IT strategies with business goals."
        ]
    },
    {
        "question": "Which AWS service can be used at no additional cost?",
        "answers": [
            "A. Amazon SageMaker",
            "B. AWS Config",
            "C. AWS Organizations",
            "D. Amazon CloudWatch"
        ],
        "correctAnswer": "C. AWS Organizations",
        "explanation": "AWS Organizations is a service for centrally managing multiple AWS accounts. While other services may be used within the organization, the AWS Organizations service itself is free to use. There are no charges for creating an organization, adding accounts, or applying policies.",
        "incorrectExplanations": [
            "**Amazon SageMaker** has a free tier for some usage, but it is not always free. You are charged for the instances you use to build, train, and deploy machine learning models.",
            "**AWS Config** charges for each configuration item recorded and for each rule evaluation. It is not free to use.",
            "**Amazon CloudWatch** has a free tier, but you are charged for metric storage, API requests, and alarms beyond the free limits."
        ]
    },
    {
        "question": "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
        "answers": [
            "A. Amazon Redshift",
            "B. Amazon Athena",
            "C. Amazon Kinesis",
            "D. Amazon RDS"
        ],
        "correctAnswer": "B. Amazon Athena",
        "explanation": "Amazon Athena is a serverless, interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. Because it is serverless and you only pay for the queries you run, it is the most cost-effective solution for occasional queries on large amounts of data in S3.",
        "incorrectExplanations": [
            "**Amazon Redshift** is a data warehouse service that requires you to provision and pay for a cluster, which is not cost-effective for occasional use.",
            "**Amazon Kinesis** is a service for collecting, processing, and analyzing real-time streaming data. It is not designed for ad-hoc querying of static data in S3.",
            "**Amazon RDS** (Relational Database Service) is for relational databases and would require you to load the data from S3, which would be inefficient and costly for occasional analysis."
        ]
    },
    {
        "question": "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
        "answers": [
            "A. Managing the code within the Lambda function",
            "B. Confirming that the hardware is working in the data center",
            "C. Patching the operating system",
            "D. Shutting down Lambda functions when they are no longer in use"
        ],
        "correctAnswer": "A. Managing the code within the Lambda function",
        "explanation": "The AWS shared responsibility model outlines what AWS is responsible for (security *of* the cloud) and what the customer is responsible for (security *in* the cloud). With a serverless service like AWS Lambda, AWS is responsible for the underlying infrastructure, including the hardware, operating system, and Lambda runtime. The customer's primary responsibility is to manage the code they deploy within the function.",
        "incorrectExplanations": [
            "**Confirming that the hardware is working in the data center** is AWS's responsibility. AWS manages the physical security and operational health of the underlying hardware.",
            "**Patching the operating system** is AWS's responsibility for managed services like Lambda. The customer does not have access to or control over the OS.",
            "Lambda functions are serverless and only run when triggered. There is no need for the customer to 'shut them down' when not in use. AWS handles the execution environment lifecycle."
        ]
    },
    {
        "question": "Which service enables customers to audit API calls in their AWS accounts?",
        "answers": [
            "A. AWS CloudTrail",
            "B. AWS Trusted Advisor",
            "C. Amazon Inspector",
            "D. AWS X-Ray"
        ],
        "correctAnswer": "A. AWS CloudTrail",
        "explanation": "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls made by users, roles, or AWS services, and logs them as events. This provides a history of all actions taken in your account.",
        "incorrectExplanations": [
            "**AWS Trusted Advisor** provides a checklist of best practices and recommendations for your AWS environment. It does not audit API calls.",
            "**Amazon Inspector** is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It scans for vulnerabilities, not API calls.",
            "**AWS X-Ray** helps developers analyze and debug distributed applications. It helps you see a request as it travels through different services, but it is a tool for application performance, not a comprehensive audit trail of all API calls."
        ]
    },
    {
        "question": "Elasticity in the AWS Cloud refers to which of the following? (Choose two.)",
        "answers": [
            "A. How quickly an Amazon EC2 instance can be restarted",
            "B. The ability to rightsize resources as demand shifts",
            "C. The maximum amount of RAM an Amazon EC2 instance can use",
            "D. The pay-as-you-go billing model",
            "E. How easily resources can be procured when they are needed"
        ],
        "correctAnswer": [
            "B. The ability to rightsize resources as demand shifts",
            "E. How easily resources can be procured when they are needed"
        ],
        "explanation": "Elasticity is the ability to acquire resources (like EC2 instances) when you need them and release them when you don't. This allows you to scale resources up or down automatically based on demand, ensuring you have the right amount of capacity at all times. Both 'rightsizing' and 'easy procurement' are key aspects of this principle.",
        "incorrectExplanations": [
            "Elasticity is not about how quickly an EC2 instance can be restarted, which is more related to availability and restart policies.",
            "The maximum amount of RAM a resource can use is a static attribute of a resource and does not relate to the concept of elasticity.",
            "The pay-as-you-go billing model is a financial benefit, but it is the flexibility and ease of scaling (elasticity) that makes it possible."
        ]
    },
    {
        "question": "A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?",
        "answers": [
            "A. Use the account root user access keys for administrative tasks.",
            "B. Grant broad permissions so that all company employees can access the resources they need.",
            "C. Turn on multi-factor authentication (MFA) for added security during the login process.",
            "D. Avoid rotating credentials to prevent issues in production applications."
        ],
        "correctAnswer": "C. Turn on multi-factor authentication (MFA) for added security during the login process.",
        "explanation": "Multi-factor authentication (MFA) is a security best practice that adds an extra layer of protection to your AWS account. It requires users to provide two or more verification factors to gain access, making it much more difficult for an unauthorized user to log in.",
        "incorrectExplanations": [
            "Using the account root user access keys for daily administrative tasks is a security risk. The root user has unrestricted access to all resources and should only be used for a small number of account and service management tasks.",
            "Granting broad permissions violates the principle of least privilege, which states that users should only have the permissions necessary to perform their jobs. This practice can lead to a significant security risk.",
            "Regularly rotating credentials is a security best practice that reduces the risk of long-term credentials being compromised. Avoiding rotation is a major security vulnerability."
        ]
    },
    {
        "question": "An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company’s direct responsibility?",
        "answers": [
            "A. Cost of application software licenses",
            "B. Cost of the hardware infrastructure on AWS",
            "C. Cost of power for the AWS servers",
            "D. Cost of physical security for the AWS data center"
        ],
        "correctAnswer": "A. Cost of application software licenses",
        "explanation": "In the AWS shared responsibility model, the customer is responsible for security *in* the cloud. This includes managing their own data, applications, and operating systems. The cost of application software licenses is a direct responsibility of the customer, as AWS does not license third-party software for them.",
        "incorrectExplanations": [
            "The cost of the hardware infrastructure on AWS, the cost of power for the AWS servers, and the cost of physical security for the AWS data center are all part of the security *of* the cloud, which is AWS's responsibility. These costs are included in the pay-as-you-go pricing for the services you consume."
        ]
    },
    {
        "question": "A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?",
        "answers": [
            "A. Contact the AWS Compliance team.",
            "B. Download the reports from AWS Artifact.",
            "C. Open a case with AWS Support.",
            "D. Generate the reports with Amazon Macie."
        ],
        "correctAnswer": "B. Download the reports from AWS Artifact.",
        "explanation": "AWS Artifact is your go-to, central resource for compliance-related information. It provides on-demand access to AWS's security and compliance documents, such as ISO certifications, PCI reports, and SOC reports. These can be downloaded directly from the service.",
        "incorrectExplanations": [
            "You do not need to contact the AWS Compliance team or open a case with AWS Support. The reports are readily available through AWS Artifact.",
            "Amazon Macie is a data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in your AWS environment. It does not generate compliance reports for AWS services."
        ]
    },
    {
        "question": "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
        "answers": [
            "A. AWS Service Catalog",
            "B. AWS Systems Manager",
            "C. AWS IAM Access Analyzer",
            "D. AWS Organizations"
        ],
        "correctAnswer": "C. AWS IAM Access Analyzer",
        "explanation": "AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. It uses logic-based reasoning to analyze resource-based policies and generate findings for public and cross-account access.",
        "incorrectExplanations": [
            "**AWS Service Catalog** allows you to create and manage catalogs of IT services that are approved for use on AWS. It is not used for analyzing external access.",
            "**AWS Systems Manager** is an operational hub for managing infrastructure at scale. It does not analyze resource access policies.",
            "**AWS Organizations** is a service for centrally managing and governing multiple accounts. While it is related to access, it does not have the specific capability of analyzing public or cross-account access on a resource-by-resource basis like IAM Access Analyzer."
        ]
    },
    {
        "question": "A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?",
        "answers": [
            "A. AWS WAF",
            "B. AWS Shield",
            "C. Network ACLs",
            "D. Security groups"
        ],
        "correctAnswer": "A. AWS WAF",
        "explanation": "AWS WAF (Web Application Firewall) is specifically designed to protect web applications from common web exploits, including SQL injection attacks. It allows you to create rules that filter malicious web traffic and can inspect HTTP/HTTPS requests for SQL injection patterns.",
        "incorrectExplanations": [
            "AWS Shield protects against DDoS attacks, not SQL injection attacks.",
            "Network ACLs operate at the network layer and control traffic based on IP addresses and ports, not application-layer attacks like SQL injection.",
            "Security groups are virtual firewalls that control traffic at the instance level based on protocols, ports, and IP ranges, but cannot inspect for SQL injection patterns."
        ]
    },

    {
        "question": "What does the concept of agility mean in AWS Cloud computing? (Choose two.)",
        "answers": [
            "A. The speed at which AWS resources are implemented",
            "B. The speed at which AWS creates new AWS Regions",
            "C. The ability to experiment quickly",
            "D. The elimination of wasted capacity",
            "E. The low cost of entry into cloud computing"
        ],
        "correctAnswer": "A. The speed at which AWS resources are implemented and C. The ability to experiment quickly",
        "explanation": "Agility in cloud computing refers to the ability to rapidly develop, test, and deploy applications and infrastructure. This includes both the speed at which resources can be provisioned (minutes instead of weeks) and the ability to quickly experiment with new ideas, fail fast, and iterate without significant upfront investment.",
        "incorrectExplanations": [
            "The speed at which AWS creates new regions is AWS's infrastructure expansion, not customer agility.",
            "While eliminating wasted capacity is a benefit of cloud computing, it's more related to efficiency and cost optimization than agility.",
            "Low cost of entry is an economic benefit but not specifically what agility means in cloud computing context."
        ]
    },

    {
        "question": "A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?",
        "answers": [
            "A. Reserved Instances",
            "B. Spot Instances",
            "C. On-Demand Instances",
            "D. Dedicated Instances"
        ],
        "correctAnswer": "B. Spot Instances",
        "explanation": "Spot Instances are perfect for this use case because the simulations are stateless (no data loss if interrupted), fault tolerant (can handle interruptions), and run for up to 3 hours (suitable for Spot's potentially shorter availability windows). Spot Instances can provide up to 90% cost savings compared to On-Demand pricing, making them ideal for batch processing workloads that can tolerate interruptions.",
        "incorrectExplanations": [
            "Reserved Instances require a commitment and are better for predictable, long-running workloads, not optimal for batch processing that can tolerate interruptions.",
            "On-Demand Instances would be more expensive than necessary for fault-tolerant batch workloads that can use Spot Instances.",
            "Dedicated Instances are for compliance requirements where you need dedicated hardware, which is unnecessary and expensive for this use case."
        ]
    },

    {
        "question": "A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?",
        "answers": [
            "A. Amazon Inspector",
            "B. Access keys",
            "C. SSH public keys",
            "D. AWS Key Management Service (AWS KMS) keys"
        ],
        "correctAnswer": "B. Access keys",
        "explanation": "Access keys (consisting of an access key ID and secret access key) are the credentials used for programmatic access to AWS services through the AWS CLI, SDKs, and APIs. These keys authenticate and authorize API calls to AWS services.",
        "incorrectExplanations": [
            "Amazon Inspector is a security assessment service that helps improve security and compliance, not an authentication method.",
            "SSH public keys are used for secure shell access to EC2 instances, not for AWS API authentication.",
            "AWS KMS keys are used for encrypting and decrypting data, not for user authentication to AWS services."
        ]
    },

    {
        "question": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
        "answers": [
            "A. Amazon Simple Notification Service (Amazon SNS)",
            "B. Amazon Simple Email Service (Amazon SES)",
            "C. Amazon CloudWatch alerts",
            "D. Amazon Simple Queue Service (Amazon SQS)"
        ],
        "correctAnswer": "A. Amazon Simple Notification Service (Amazon SNS)",
        "explanation": "Amazon SNS is a fully managed messaging service that can send messages to multiple endpoints including SMS (text messages), email, HTTP/HTTPS endpoints, and more. It's designed for distributed applications to send notifications through multiple communication channels.",
        "incorrectExplanations": [
            "Amazon SES is specifically for sending emails only, not text messages.",
            "CloudWatch alerts can trigger notifications but is primarily a monitoring service, not a general messaging service for distributed applications.",
            "Amazon SQS is a message queuing service for decoupling application components, not for sending messages to end users via text or email."
        ]
    },

    {
        "question": "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        "answers": [
            "A. Use of the Snowball Edge appliance for a 10-day period",
            "B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
            "C. The transfer of data from the Snowball Edge appliance into Amazon S3",
            "D. Daily use of the Snowball Edge appliance after 10 days"
        ],
        "correctAnswer": "C. The transfer of data from the Snowball Edge appliance into Amazon S3",
        "explanation": "AWS does not charge for data transfer INTO AWS services, including when transferring data from a Snowball Edge device into Amazon S3. This is part of AWS's general policy of not charging for data ingress to encourage cloud adoption.",
        "incorrectExplanations": [
            "The Snowball Edge appliance has daily usage charges after the initial period.",
            "Transferring data OUT of Amazon S3 (egress) typically incurs charges.",
            "There are daily usage charges for the Snowball Edge appliance after the initial period."
        ]
    },

    {
        "question": "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
        "answers": [
            "A. AWS Trusted Advisor",
            "B. Amazon Inspector",
            "C. AWS Config",
            "D. Amazon GuardDuty"
        ],
        "correctAnswer": "B. Amazon Inspector",
        "explanation": "Amazon Inspector is specifically designed to assess application vulnerabilities and security issues in EC2 instances and container images. It automatically discovers workloads and continuously assesses them for software vulnerabilities and unintended network exposure, making it the ideal service for this requirement.",
        "incorrectExplanations": [
            "AWS Trusted Advisor provides recommendations for cost optimization, performance, and security but doesn't perform deep vulnerability assessments of applications.",
            "AWS Config tracks configuration changes and compliance but doesn't assess application vulnerabilities.",
            "Amazon GuardDuty is a threat detection service that monitors for malicious activity but doesn't assess application vulnerabilities."
        ]
    },

    {
        "question": "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
        "answers": [
            "A. Hard code an IAM user's secret key and access key directly in the application, and upload the file.",
            "B. Store the IAM user's secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.",
            "C. Have the EC2 instance assume a role to obtain the privileges to upload the file.",
            "D. Modify the S3 bucket policy so that any service can upload to it at any time."
        ],
        "correctAnswer": "C. Have the EC2 instance assume a role to obtain the privileges to upload the file.",
        "explanation": "Using IAM roles is the security best practice for giving EC2 instances access to AWS services. When you attach an IAM role to an EC2 instance, AWS automatically handles the credential management, including rotation, without exposing long-term credentials. This eliminates the need to store access keys on the instance.",
        "incorrectExplanations": [
            "Hard coding credentials in applications is a major security risk and violates best practices.",
            "Storing credentials in text files on the instance is also insecure and violates best practices.",
            "Making an S3 bucket publicly writable is a significant security risk that could lead to data breaches and unauthorized access."
        ]
    },

    {
        "question": "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
        "answers": [
            "A. Physical security of DynamoDB",
            "B. Patching of DynamoDB",
            "C. Access to DynamoDB tables",
            "D. Encryption of data at rest in DynamoDB"
        ],
        "correctAnswer": "C. Access to DynamoDB tables",
        "explanation": "Under the AWS Shared Responsibility Model, customers are responsible for managing access to their data and resources. This includes configuring IAM policies, roles, and permissions to control who can access DynamoDB tables and what operations they can perform.",
        "incorrectExplanations": [
            "Physical security of the infrastructure hosting DynamoDB is AWS's responsibility.",
            "Patching and maintaining the DynamoDB service is AWS's responsibility as it's a managed service.",
            "While customers can configure encryption, AWS provides encryption of data at rest by default and manages the underlying encryption infrastructure."
        ]
    },
    {
        "question": "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
        "answers": [
            "A. AWS Lambda",
            "B. Amazon RDS",
            "C. AWS Fargate",
            "D. Amazon Athena"
        ],
        "correctAnswer": "C. AWS Fargate",
        "explanation": "AWS Fargate is a serverless compute engine for containers that eliminates the need to manage servers, cluster capacity, or patching. It automatically handles cluster size management, scheduling, and environment maintenance for Docker containers, making it the perfect alternative to self-managed Docker environments on EC2.",
        "incorrectExplanations": [
            "AWS Lambda is for serverless functions, not container orchestration and management.",
            "Amazon RDS is a managed database service, not a container management solution.",
            "Amazon Athena is a serverless query service for analyzing data in S3, not for container management."
        ]
    },

    {
        "question": "A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?",
        "answers": [
            "A. Update the guest operating system of the EC2 instances.",
            "B. Maintain high availability at the database layer.",
            "C. Patch the physical infrastructure that hosts the EC2 instances.",
            "D. Configure the security group firewall."
        ],
        "correctAnswer": "C. Patch the physical infrastructure that hosts the EC2 instances.",
        "explanation": "Under the AWS Shared Responsibility Model, AWS is responsible for the security and maintenance of the underlying physical infrastructure, including patching the hypervisors, physical servers, and networking equipment that hosts EC2 instances.",
        "incorrectExplanations": [
            "Updating the guest operating system is the customer's responsibility when using EC2.",
            "Maintaining high availability at the database layer is the customer's responsibility when self-managing databases on EC2.",
            "Configuring security group firewalls is the customer's responsibility for controlling access to their instances."
        ]
    },

    {
        "question": "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
        "answers": [
            "A. AWS Cost Explorer",
            "B. AWS Billing Conductor",
            "C. Amazon CodeGuru",
            "D. Amazon SageMaker",
            "E. AWS Compute Optimizer"
        ],
        "correctAnswer": "A. AWS Cost Explorer and E. AWS Compute Optimizer",
        "explanation": "AWS Cost Explorer provides rightsizing recommendations to help optimize EC2 costs by analyzing usage patterns. AWS Compute Optimizer uses machine learning to analyze historical utilization metrics and provides recommendations for optimal EC2 instance types, sizes, and configurations.",
        "incorrectExplanations": [
            "AWS Billing Conductor is for customizing billing data for showback/chargeback, not for rightsizing recommendations.",
            "Amazon CodeGuru is for application performance optimization and code quality, not EC2 rightsizing.",
            "Amazon SageMaker is for machine learning model development, not infrastructure rightsizing."
        ]
    },

    {
        "question": "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
        "answers": [
            "A. Providing high-performance container orchestration",
            "B. Creating and rotating encryption keys",
            "C. Detecting underutilized resources to save costs",
            "D. Improving security by proactively monitoring the AWS environment",
            "E. Implementing enforced tagging across AWS resources"
        ],
        "correctAnswer": "C. Detecting underutilized resources to save costs and D. Improving security by proactively monitoring the AWS environment",
        "explanation": "AWS Trusted Advisor provides recommendations across five categories: cost optimization (including detecting underutilized resources), security (identifying security gaps and vulnerabilities), fault tolerance, performance, and service limits. It proactively monitors your AWS environment and provides actionable recommendations.",
        "incorrectExplanations": [
            "Container orchestration is provided by services like ECS, EKS, or Fargate, not Trusted Advisor.",
            "Encryption key management is handled by AWS KMS, not Trusted Advisor.",
            "Resource tagging enforcement is typically done through AWS Config rules or Organizations policies, not Trusted Advisor."
        ]
    },

    {
        "question": "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
        "answers": [
            "A. Elimination of expenses for running and maintaining data centers",
            "B. Price discounts that are identical to discounts from hardware providers",
            "C. Distribution of all operational controls to AWS",
            "D. Elimination of operational expenses"
        ],
        "correctAnswer": "A. Elimination of expenses for running and maintaining data centers",
        "explanation": "Moving to AWS Cloud eliminates the capital and operational expenses associated with building, running, and maintaining physical data centers, including costs for real estate, power, cooling, physical security, and hardware maintenance.",
        "incorrectExplanations": [
            "AWS pricing is independent of hardware provider discounts and follows its own pricing model.",
            "Customers retain many operational controls and responsibilities under the shared responsibility model.",
            "Operational expenses are transformed rather than eliminated - customers still pay for AWS services and maintain some operational responsibilities."
        ]
    },

    {
        "question": "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
        "answers": [
            "A. AWS Resource Explorer",
            "B. AWS Service Catalog",
            "C. AWS Organizations",
            "D. AWS Systems Manager"
        ],
        "correctAnswer": "B. AWS Service Catalog",
        "explanation": "AWS Service Catalog allows organizations to create and manage catalogs of IT services and infrastructure as code templates. It provides governance, compliance, and standardization for deployed services while allowing end users to quickly deploy approved resources.",
        "incorrectExplanations": [
            "AWS Resource Explorer is for discovering and searching resources across AWS accounts and regions.",
            "AWS Organizations is for managing multiple AWS accounts and applying policies across an organization.",
            "AWS Systems Manager is for operational management of resources, not for managing IaC templates and service catalogs."
        ]
    },

    {
        "question": "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
        "answers": [
            "A. AWS Organizations",
            "B. AWS Pricing Calculator",
            "C. AWS Cost Explorer",
            "D. AWS Service Catalog"
        ],
        "correctAnswer": "C. AWS Cost Explorer",
        "explanation": "AWS Cost Explorer provides interactive dashboards and reports that help users visualize, understand, and manage their AWS spending and usage patterns over time. It offers filtering, grouping, and forecasting capabilities to analyze costs and usage trends.",
        "incorrectExplanations": [
            "AWS Organizations is for managing multiple AWS accounts, not for cost visualization and analysis.",
            "AWS Pricing Calculator is for estimating costs for planned AWS usage, not analyzing historical spending.",
            "AWS Service Catalog is for managing IT service catalogs and governance, not cost analysis."
        ]
    },

    {
        "question": "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
        "answers": [
            "A. AWS Glue",
            "B. Amazon Elastic File System (Amazon EFS)",
            "C. Amazon Redshift",
            "D. Amazon QuickSight",
            "E. Amazon Quantum Ledger Database (Amazon QLDB)"
        ],
        "correctAnswer": "A. AWS Glue and D. Amazon QuickSight",
        "explanation": "AWS Glue is a fully managed extract, transform, and load (ETL) service that helps discover, prepare, and transform data for analytics. Amazon QuickSight is a business intelligence service that provides interactive dashboards and visualizations. Together, they provide a complete solution for data discovery, transformation, and visualization.",
        "incorrectExplanations": [
            "Amazon EFS is a file storage service, not specifically designed for data discovery and transformation.",
            "Amazon Redshift is a data warehouse service that could store the transformed data but doesn't provide the discovery, transformation, and visualization capabilities requested.",
            "Amazon QLDB is a ledger database for applications requiring an immutable, cryptographically verifiable transaction log, not for general data discovery and visualization."
        ]
    },

    {
        "question": "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
        "answers": [
            "A. AWS Support",
            "B. AWS Professional Services",
            "C. AWS Launch Wizard",
            "D. AWS Managed Services (AMS)"
        ],
        "correctAnswer": "B. AWS Professional Services",
        "explanation": "AWS Professional Services provides a global team of experts who help customers accelerate their migration to AWS following AWS best practices and proven methodologies. They offer specialized consulting and implementation services for complex migrations and transformations.",
        "incorrectExplanations": [
            "AWS Support provides technical support for AWS services but doesn't offer migration consulting and implementation services.",
            "AWS Launch Wizard is a self-service tool for deploying specific third-party applications, not a consulting service.",
            "AWS Managed Services (AMS) provides ongoing operational management of AWS infrastructure but doesn't provide migration consulting services."
        ]
    },

    {
        "question": "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
        "answers": [
            "A. Amazon EC2",
            "B. AWS Elastic Beanstalk",
            "C. AWS CodeBuild",
            "D. Amazon Personalize"
        ],
        "correctAnswer": "B. AWS Elastic Beanstalk",
        "explanation": "AWS Elastic Beanstalk is a platform-as-a-service that allows developers to quickly deploy applications without managing the underlying infrastructure. It automatically provisions and manages the required resources like EC2 instances, load balancers, and auto-scaling groups.",
        "incorrectExplanations": [
            "Amazon EC2 requires manual creation and configuration of instances and related resources.",
            "AWS CodeBuild is a build service for compiling code, not for deploying complete applications with infrastructure.",
            "Amazon Personalize is a machine learning service for creating recommendation systems, not for application deployment."
        ]
    },

    {
        "question": "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
        "answers": [
            "A. S3 Lifecycle rules",
            "B. S3 Versioning",
            "C. S3 bucket policies",
            "D. S3 server-side encryption"
        ],
        "correctAnswer": "B. S3 Versioning",
        "explanation": "S3 Versioning maintains multiple versions of objects in a bucket, protecting against accidental deletion or overwriting. When versioning is enabled, deleted or modified objects are preserved as previous versions, allowing for recovery.",
        "incorrectExplanations": [
            "S3 Lifecycle rules manage object transitions between storage classes or deletion based on time, but don't protect against accidental deletion.",
            "S3 bucket policies control access permissions but don't prevent accidental deletion by authorized users.",
            "S3 server-side encryption protects data at rest but doesn't prevent accidental deletion or overwriting."
        ]
    },

    {
        "question": "Which AWS service provides the ability to manage infrastructure as code?",
        "answers": [
            "A. AWS CodePipeline",
            "B. AWS CodeDeploy",
            "C. AWS Direct Connect",
            "D. AWS CloudFormation"
        ],
        "correctAnswer": "D. AWS CloudFormation",
        "explanation": "AWS CloudFormation is the primary service for managing infrastructure as code (IaC) on AWS. It allows you to define AWS resources using templates (JSON or YAML) and provisions them in a predictable and repeatable manner.",
        "incorrectExplanations": [
            "AWS CodePipeline is for building continuous integration/continuous deployment (CI/CD) pipelines, not infrastructure as code.",
            "AWS CodeDeploy is for automating application deployments, not infrastructure provisioning.",
            "AWS Direct Connect is a networking service for dedicated connections between on-premises and AWS, not for infrastructure as code."
        ]
    },

    {
        "question": "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        "answers": [
            "A. On-Demand Instances",
            "B. Reserved Instances",
            "C. Spot Instances",
            "D. Spot Fleet"
        ],
        "correctAnswer": "B. Reserved Instances",
        "explanation": "Reserved Instances are ideal for predictable workloads that require consistent availability over a defined period (1-3 years). They provide significant cost savings (up to 75%) compared to On-Demand pricing for steady-state usage, making them perfect for this scenario with consistent traffic and 1-year commitment.",
        "incorrectExplanations": [
            "On-Demand Instances would be more expensive for a predictable 1-year workload where Reserved Instances offer better pricing.",
            "Spot Instances can be interrupted and terminated, which doesn't meet the requirement for continuous availability without disruption.",
            "Spot Fleet manages multiple Spot Instances but still faces the same interruption risk as individual Spot Instances."
        ]
    },

    {
        "question": "Which AWS service or feature allows a user to establish a dedicated network connection between a company's on-premises data center and the AWS Cloud?",
        "answers": [
            "A. AWS Direct Connect",
            "B. VPC peering",
            "C. AWS VPN",
            "D. Amazon Route 53"
        ],
        "correctAnswer": "A. AWS Direct Connect",
        "explanation": "AWS Direct Connect provides a dedicated network connection between your on-premises data center and AWS, bypassing the public internet. It offers consistent network performance, reduced bandwidth costs, and enhanced security compared to internet-based connections.",
        "incorrectExplanations": [
            "VPC peering connects two VPCs within AWS, not on-premises to AWS connections.",
            "AWS VPN provides encrypted connections over the public internet, but not a dedicated physical connection.",
            "Amazon Route 53 is a DNS service that routes traffic but doesn't provide network connectivity."
        ]
    },

    {
        "question": "Which option is a physical location of the AWS global infrastructure?",
        "answers": [
            "A. AWS DataSync",
            "B. AWS Region",
            "C. Amazon Connect",
            "D. AWS Organizations"
        ],
        "correctAnswer": "B. AWS Region",
        "explanation": "An AWS Region is a physical geographic location that contains multiple Availability Zones. Regions are designed to be completely independent and isolated from other regions to provide fault tolerance and stability.",
        "incorrectExplanations": [
            "AWS DataSync is a service for transferring data, not a physical location.",
            "Amazon Connect is a cloud-based contact center service, not a physical infrastructure component.",
            "AWS Organizations is a service for managing multiple AWS accounts, not a physical location."
        ]
    },
    {
        "question": "A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?",
        "answers": [
            "A. Reliability",
            "B. Security",
            "C. Operational excellence",
            "D. Performance efficiency"
        ],
        "correctAnswer": "B. Security",
        "explanation": "The Security pillar of the AWS Well-Architected Framework focuses on protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies. It covers identity and access management, detective controls, infrastructure protection, data protection, and incident response.",
        "incorrectExplanations": [
            "Reliability focuses on the ability of a workload to perform its intended function correctly and consistently when it's expected to.",
            "Operational excellence focuses on running and monitoring systems to deliver business value and continually improving processes and procedures.",
            "Performance efficiency focuses on using IT and computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes."
        ]
    },

    {
        "question": "What is the purpose of having an internet gateway within a VPC?",
        "answers": [
            "A. To create a VPN connection to the VPC",
            "B. To allow communication between the VPC and the internet",
            "C. To impose bandwidth constraints on internet traffic",
            "D. To load balance traffic from the internet across Amazon EC2 instances"
        ],
        "correctAnswer": "B. To allow communication between the VPC and the internet",
        "explanation": "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It provides a target in your VPC route tables for internet-routable traffic and performs network address translation (NAT) for instances that have been assigned public IPv4 addresses.",
        "incorrectExplanations": [
            "VPN connections are established through VPN gateways, not internet gateways.",
            "Internet gateways don't impose bandwidth constraints; they provide connectivity.",
            "Load balancing is handled by services like Application Load Balancer or Network Load Balancer, not internet gateways."
        ]
    },

    {
        "question": "A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?",
        "answers": [
            "A. Integrate functional testing as part of AWS deployment.",
            "B. Use automation to deploy changes.",
            "C. Deploy the application to multiple locations.",
            "D. Implement loosely coupled dependencies."
        ],
        "correctAnswer": "D. Implement loosely coupled dependencies.",
        "explanation": "Breaking down a monolithic application into microservices is a classic example of implementing loosely coupled dependencies. This design principle allows components to interact without being tightly bound to each other, improving scalability, maintainability, and fault tolerance.",
        "incorrectExplanations": [
            "While functional testing is important, the question specifically asks about the architectural change from monolithic to microservices.",
            "Automation for deployment is a good practice but not what's being described in the migration from monolithic to microservices.",
            "Multi-location deployment relates to reliability and availability, not the architectural pattern change described."
        ]
    },

    {
        "question": "A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?",
        "answers": [
            "A. IAM Access Analyzer",
            "B. AWS Artifact",
            "C. IAM credential report",
            "D. AWS Audit Manager"
        ],
        "correctAnswer": "C. IAM credential report",
        "explanation": "IAM credential report provides detailed information about the status of IAM users and their credentials, including password last used, password last changed, access key age, and access key last used. This report is specifically designed for auditing credential rotation and compliance purposes.",
        "incorrectExplanations": [
            "IAM Access Analyzer helps identify resources shared with external entities, not credential rotation details.",
            "AWS Artifact provides compliance documents and reports, but not specific credential rotation details for your account.",
            "AWS Audit Manager helps automate compliance auditing but the credential report is the direct tool for password and access key rotation details."
        ]
    },

    {
        "question": "A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)",
        "answers": [
            "A. Amazon Simple Queue Service (Amazon SQS)",
            "B. AWS Budgets",
            "C. Cost Explorer",
            "D. Amazon CloudWatch",
            "E. AWS Cost and Usage Report"
        ],
        "correctAnswer": "B. AWS Budgets and D. Amazon CloudWatch",
        "explanation": "AWS Budgets allows you to set custom cost and usage budgets and receive alerts when thresholds are exceeded. Amazon CloudWatch can be used to create billing alarms that trigger notifications when estimated charges exceed specified thresholds. Both services can send notifications via SNS when cost thresholds are reached.",
        "incorrectExplanations": [
            "Amazon SQS is a message queuing service, not a cost monitoring tool.",
            "Cost Explorer is for analyzing and visualizing costs but doesn't provide threshold notifications.",
            "AWS Cost and Usage Report provides detailed billing data but doesn't offer threshold alerting capabilities."
        ]
    },

    {
        "question": "Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?",
        "answers": [
            "A. AWS Artifact",
            "B. Amazon Connect",
            "C. AWS Chatbot",
            "D. AWS Knowledge Center"
        ],
        "correctAnswer": "D. AWS Knowledge Center",
        "explanation": "AWS Knowledge Center is a self-service repository that contains answers to frequently asked questions and provides guidance for common issues across all AWS services, including security-related questions. It's designed to help users find quick answers to common problems and questions.",
        "incorrectExplanations": [
            "AWS Artifact provides compliance documents and reports, not FAQ answers.",
            "Amazon Connect is a cloud-based contact center service, not a knowledge repository.",
            "AWS Chatbot is for integrating AWS notifications with chat platforms like Slack, not for providing FAQ answers."
        ]
    },

    {
        "question": "Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)",
        "answers": [
            "A. Configure the AWS provided security group firewall.",
            "B. Classify company assets in the AWS Cloud.",
            "C. Determine which Availability Zones to use for Amazon S3 buckets.",
            "D. Patch or upgrade Amazon DynamoDB.",
            "E. Select Amazon EC2 instances to run AWS Lambda on."
        ],
        "correctAnswer": "A. Configure the AWS provided security group firewall. and B. Classify company assets in the AWS Cloud.",
        "explanation": "Under the shared responsibility model, customers are responsible for configuring security groups (security in the cloud) and for classifying and protecting their own data and assets. These are customer-controlled configurations and data governance tasks.",
        "incorrectExplanations": [
            "Amazon S3 automatically distributes data across multiple Availability Zones within a region; customers don't choose specific AZs for S3 buckets.",
            "Patching and upgrading DynamoDB is AWS's responsibility as it's a fully managed service.",
            "AWS Lambda is serverless; customers don't select EC2 instances for Lambda - AWS manages the underlying infrastructure."
        ]
    },

    {
        "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        "answers": [
            "A. Availability",
            "B. Reliability",
            "C. Scalability",
            "D. Responsive design",
            "E. Operational excellence"
        ],
        "correctAnswer": "B. Reliability and E. Operational excellence",
        "explanation": "The AWS Well-Architected Framework consists of six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Reliability and Operational Excellence are two of these core pillars.",
        "incorrectExplanations": [
            "Availability is a component of the Reliability pillar, not a standalone pillar.",
            "Scalability is addressed within the Performance Efficiency pillar, not a separate pillar.",
            "Responsive design is not one of the Well-Architected Framework pillars."
        ]
    },

    {
        "question": "Which of the following is a fully managed MySQL-compatible database?",
        "answers": [
            "A. Amazon S3",
            "B. Amazon DynamoDB",
            "C. Amazon Redshift",
            "D. Amazon Aurora"
        ],
        "correctAnswer": "D. Amazon Aurora",
        "explanation": "Amazon Aurora is a fully managed relational database service that is compatible with both MySQL and PostgreSQL. It provides the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.",
        "incorrectExplanations": [
            "Amazon S3 is an object storage service, not a database.",
            "Amazon DynamoDB is a NoSQL database, not MySQL-compatible.",
            "Amazon Redshift is a data warehouse service based on PostgreSQL, not specifically MySQL-compatible."
        ]
    },

    {
        "question": "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?",
        "answers": [
            "A. AWS Snowmobile",
            "B. AWS Local Zones",
            "C. AWS Outposts",
            "D. AWS Fargate"
        ],
        "correctAnswer": "C. AWS Outposts",
        "explanation": "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility. It provides a truly consistent hybrid experience by extending AWS infrastructure and services to on-premises environments.",
        "incorrectExplanations": [
            "AWS Snowmobile is a data transfer service for moving extremely large amounts of data to AWS, not for hybrid architecture.",
            "AWS Local Zones bring AWS services closer to end users but don't extend infrastructure to customer premises.",
            "AWS Fargate is a serverless compute engine for containers, not a hybrid infrastructure solution."
        ]
    },

    {
        "question": "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
        "answers": [
            "A. Amazon DynamoDB",
            "B. Amazon Athena",
            "C. Amazon RDS",
            "D. Amazon EMR"
        ],
        "correctAnswer": "C. Amazon RDS",
        "explanation": "Amazon RDS (Relational Database Service) supports multiple database engines including PostgreSQL and is specifically designed for online transaction processing (OLTP) workloads. It provides a fully managed PostgreSQL database with automated backups, patching, and scaling.",
        "incorrectExplanations": [
            "Amazon DynamoDB is a NoSQL database, not PostgreSQL-compatible.",
            "Amazon Athena is a serverless query service for analyzing data in S3, not a transactional database.",
            "Amazon EMR is a managed cluster platform for big data processing, not specifically for PostgreSQL OLTP workloads."
        ]
    },

    {
        "question": "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
        "answers": [
            "A. Amazon Connect",
            "B. Amazon AppStream 2.0",
            "C. Amazon WorkSpaces",
            "D. AWS Site-to-Site VPN",
            "E. Amazon Elastic Container Service (Amazon ECS)"
        ],
        "correctAnswer": "C. Amazon WorkSpaces and B. Amazon AppStream 2.0",
        "explanation": "Amazon WorkSpaces provides managed Windows (and Linux) virtual desktops in the cloud, while Amazon AppStream 2.0 provides managed application streaming. Both services can deliver Windows-based solutions to remote employees over secure connections.",
        "incorrectExplanations": [
            "Amazon Connect is a cloud-based contact center service, not for virtual desktops.",
            "AWS Site-to-Site VPN provides secure network connectivity but doesn't provide virtual desktops or applications.",
            "Amazon ECS is for container orchestration, not for Windows virtual desktops."
        ]
    },

    {
        "question": "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
        "answers": [
            "A. AWS Trusted Advisor",
            "B. Amazon CloudWatch",
            "C. Amazon GuardDuty",
            "D. AWS Health Dashboard"
        ],
        "correctAnswer": "A. AWS Trusted Advisor",
        "explanation": "AWS Trusted Advisor includes security checks that specifically identify security groups with unrestricted access (0.0.0.0/0) to commonly used ports. It provides recommendations to improve security posture by identifying these misconfigurations.",
        "incorrectExplanations": [
            "Amazon CloudWatch monitors metrics and logs but doesn't specifically analyze security group configurations for misconfigurations.",
            "Amazon GuardDuty detects threats and malicious activity but doesn't specifically monitor for security group misconfigurations.",
            "AWS Health Dashboard provides information about AWS service health and account-specific events, not security group analysis."
        ]
    },

    {
        "question": "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
        "answers": [
            "A. Amazon DynamoDB",
            "B. Amazon Aurora",
            "C. Amazon DocumentDB (with MongoDB compatibility)",
            "D. Amazon Neptune"
        ],
        "correctAnswer": "A. Amazon DynamoDB",
        "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database that provides single-digit millisecond latency at any scale. It's designed for applications that need consistent, fast performance with seamless scalability.",
        "incorrectExplanations": [
            "Amazon Aurora is a relational database, not a key-value database, and while fast, it's not specifically designed for sub-millisecond latency.",
            "Amazon DocumentDB is a document database compatible with MongoDB, not specifically a key-value database optimized for sub-millisecond latency.",
            "Amazon Neptune is a graph database service, not a key-value database."
        ]
    },

    {
        "question": "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
        "answers": [
            "A. On-Demand Instances",
            "B. Spot Instances",
            "C. Reserved Instances",
            "D. Dedicated Instances"
        ],
        "correctAnswer": "B. Spot Instances",
        "explanation": "Spot Instances are ideal for this scenario because the ML jobs don't need to run at specific times (flexible scheduling), can handle interruptions (research workloads are typically fault-tolerant), and provide up to 90% cost savings compared to On-Demand pricing. The long duration (several months) makes the potential savings very significant.",
        "incorrectExplanations": [
            "On-Demand Instances would be much more expensive for long-running workloads that can tolerate interruptions.",
            "Reserved Instances require a commitment and are better for predictable workloads, but Spot Instances offer even greater savings for interruptible workloads.",
            "Dedicated Instances are for compliance requirements and would be the most expensive option without providing additional value for this use case."
        ]
    },
    {
        "question": "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
        "answers": [
            "A. Amazon Route 53",
            "B. Amazon Macie",
            "C. AWS Direct Connect",
            "D. AWS PrivateLink"
        ],
        "correctAnswer": "C. AWS Direct Connect",
        "explanation": "AWS Direct Connect provides a dedicated private network connection between your on-premises data center and AWS, bypassing the public internet. This creates a private, reliable, and consistent network connection for hybrid workloads.",
        "incorrectExplanations": [
            "Amazon Route 53 is a DNS service that routes traffic but doesn't create private connections.",
            "Amazon Macie is a data security service for discovering and protecting sensitive data, not for network connectivity.",
            "AWS PrivateLink creates private connections between VPCs and AWS services, but not specifically between on-premises and cloud workloads."
        ]
    },

    {
        "question": "Which AWS service is used to provide encryption for Amazon EBS?",
        "answers": [
            "A. AWS Certificate Manager",
            "B. AWS Systems Manager",
            "C. AWS KMS",
            "D. AWS Config"
        ],
        "correctAnswer": "C. AWS KMS",
        "explanation": "AWS Key Management Service (KMS) is the service that provides encryption keys for Amazon EBS volumes. When you enable EBS encryption, AWS KMS manages the encryption keys used to encrypt and decrypt your EBS volumes and snapshots.",
        "incorrectExplanations": [
            "AWS Certificate Manager manages SSL/TLS certificates for web applications, not encryption keys for EBS.",
            "AWS Systems Manager is for operational management and automation, not encryption key management.",
            "AWS Config tracks configuration changes and compliance but doesn't provide encryption services."
        ]
    },

    {
        "question": "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
        "answers": [
            "A. AWS Management Console",
            "B. AWS CLI",
            "C. AWS SDK",
            "D. AWS Cloud9"
        ],
        "correctAnswer": "A. AWS Management Console",
        "explanation": "The AWS Management Console is the web-based interface that allows users to access and manage AWS services through a graphical user interface. It provides point-and-click access to virtually all AWS services and features.",
        "incorrectExplanations": [
            "AWS CLI (Command Line Interface) is for command-line access, not web interface.",
            "AWS SDK (Software Development Kit) is for programmatic access through code, not web interface.",
            "AWS Cloud9 is a cloud-based IDE for writing and debugging code, not for general AWS resource management."
        ]
    },

    {
        "question": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
        "answers": [
            "A. Trade variable expenses for capital expenses",
            "B. High economies of scale",
            "C. Launch globally in minutes",
            "D. Focus on managing hardware infrastructure",
            "E. Overprovision to ensure capacity"
        ],
        "correctAnswer": "B. High economies of scale and C. Launch globally in minutes",
        "explanation": "AWS provides high economies of scale by aggregating usage from hundreds of thousands of customers, resulting in lower costs. The global infrastructure allows customers to deploy applications in multiple regions worldwide within minutes, providing global reach and reduced latency.",
        "incorrectExplanations": [
            "AWS allows you to trade capital expenses for variable expenses (pay-as-you-go), not the other way around.",
            "One advantage of cloud is that you don't need to focus on managing hardware infrastructure - AWS handles that.",
            "Cloud eliminates the need to overprovision because you can scale resources up or down based on actual demand."
        ]
    },

    {
        "question": "Which AWS Cloud benefit is shown by an architecture's ability to withstand failures with minimal downtime?",
        "answers": [
            "A. Agility",
            "B. Elasticity",
            "C. Scalability",
            "D. High availability"
        ],
        "correctAnswer": "D. High availability",
        "explanation": "High availability refers to a system's ability to remain operational and accessible with minimal downtime, even when components fail. AWS provides multiple Availability Zones, fault-tolerant services, and redundancy options to achieve high availability.",
        "incorrectExplanations": [
            "Agility refers to the speed of implementing and deploying resources, not fault tolerance.",
            "Elasticity refers to the ability to automatically scale resources up or down based on demand.",
            "Scalability refers to the ability to handle increased load by adding resources, not specifically about withstanding failures."
        ]
    },

    {
        "question": "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
        "answers": [
            "A. EC2 Reserved Instances",
            "B. EC2 Amazon Machine Images (AMIs)",
            "C. Amazon Elastic Block Store (Amazon EBS) snapshots",
            "D. AWS Shield",
            "E. Amazon GuardDuty"
        ],
        "correctAnswer": "B. EC2 Amazon Machine Images (AMIs) and C. Amazon Elastic Block Store (Amazon EBS) snapshots",
        "explanation": "AMIs provide complete images of EC2 instances including the operating system, applications, and configurations, allowing you to quickly restore instances. EBS snapshots create point-in-time backups of EBS volumes, enabling data recovery. Both are essential for EC2 disaster recovery strategies.",
        "incorrectExplanations": [
            "EC2 Reserved Instances are a pricing model for cost savings, not a disaster recovery solution.",
            "AWS Shield provides DDoS protection, not disaster recovery for EC2 instances.",
            "Amazon GuardDuty is a threat detection service, not a disaster recovery solution."
        ]
    },

    {
        "question": "Which AWS service provides command line access to AWS tools and resources directly from a web browser?",
        "answers": [
            "A. AWS CloudHSM",
            "B. AWS CloudShell",
            "C. Amazon WorkSpaces",
            "D. AWS Cloud Map"
        ],
        "correctAnswer": "B. AWS CloudShell",
        "explanation": "AWS CloudShell is a browser-based shell that provides command-line access to AWS services and tools directly from the AWS Management Console. It comes pre-configured with AWS CLI, SDKs, and other development tools, requiring no local installation or configuration.",
        "incorrectExplanations": [
            "AWS CloudHSM is a hardware security module service for encryption key management, not command-line access.",
            "Amazon WorkSpaces provides virtual desktops but isn't specifically designed for command-line access to AWS tools.",
            "AWS Cloud Map is a service discovery service for microservices, not for command-line access."
        ]
    },

    {
        "question": "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
        "answers": [
            "A. VPC endpoints",
            "B. AWS Transit Gateway",
            "C. Amazon Route 53",
            "D. AWS Secrets Manager"
        ],
        "correctAnswer": "B. AWS Transit Gateway",
        "explanation": "AWS Transit Gateway acts as a central hub for connecting multiple VPCs and on-premises networks through a single Direct Connect connection. It simplifies network architecture by eliminating the need for complex peering relationships and scales efficiently as the number of VPCs grows to hundreds.",
        "incorrectExplanations": [
            "VPC endpoints provide private connectivity to AWS services but don't help connect multiple VPCs to on-premises networks.",
            "Amazon Route 53 is a DNS service and doesn't provide network connectivity solutions.",
            "AWS Secrets Manager is for storing and managing secrets like passwords and API keys, not network connectivity."
        ]
    },

    {
        "question": "A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?",
        "answers": [
            "A. AWS Business Support",
            "B. AWS Basic Support",
            "C. AWS Developer Support",
            "D. AWS Enterprise Support"
        ],
        "correctAnswer": "D. AWS Enterprise Support",
        "explanation": "AWS Enterprise Support includes Infrastructure Event Management (IEM) at no additional charge, which provides guidance and support for significant events like product launches, migrations, and marketing events. This includes operational readiness assessments and risk mitigation planning.",
        "incorrectExplanations": [
            "AWS Business Support includes general technical support but doesn't include Infrastructure Event Management for major events.",
            "AWS Basic Support only provides account and billing support, documentation, and service health dashboard access.",
            "AWS Developer Support is designed for development and testing environments, not enterprise-level event support."
        ]
    },

    {
        "question": "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
        "answers": [
            "A. AWS Systems Manager",
            "B. AWS Secrets Manager",
            "C. AWS License Manager",
            "D. AWS Managed Services"
        ],
        "correctAnswer": "B. AWS Secrets Manager",
        "explanation": "AWS Secrets Manager automatically rotates database credentials on a schedule you define with minimal operational overhead. It integrates natively with Amazon RDS and other AWS database services to automatically update credentials without requiring application changes or manual intervention.",
        "incorrectExplanations": [
            "AWS Systems Manager can manage credentials but requires more operational overhead and custom scripting for automatic rotation.",
            "AWS License Manager is for managing software licenses, not credentials.",
            "AWS Managed Services provides infrastructure management but isn't specifically designed for credential rotation."
        ]
    },

    {
        "question": "A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?",
        "answers": [
            "A. AWS Ground Station",
            "B. AWS Shield",
            "C. AWS IoT Device Defender",
            "D. AWS CloudFormation"
        ],
        "correctAnswer": "D. AWS CloudFormation",
        "explanation": "AWS CloudFormation allows developers to define infrastructure as code using templates, enabling them to create identical development and production environments in a repeatable, automated fashion. Templates ensure consistency and eliminate configuration drift between environments.",
        "incorrectExplanations": [
            "AWS Ground Station is for satellite communications, not infrastructure management.",
            "AWS Shield provides DDoS protection, not infrastructure automation.",
            "AWS IoT Device Defender is for IoT security, not general infrastructure management."
        ]
    },

    {
        "question": "Which task is the customer's responsibility, according to the AWS shared responsibility model?",
        "answers": [
            "A. Maintain the security of the AWS Cloud.",
            "B. Configure firewalls and networks",
            "C. Patch the operating system of Amazon RDS instances",
            "D. Implement physical and environmental controls"
        ],
        "correctAnswer": "B. Configure firewalls and networks",
        "explanation": "Under the shared responsibility model, customers are responsible for security 'in' the cloud, which includes configuring security groups, network ACLs, firewalls, and network configurations. This is part of the customer's responsibility for securing their applications and data.",
        "incorrectExplanations": [
            "Maintaining the security of the AWS Cloud infrastructure is AWS's responsibility.",
            "For managed services like RDS, AWS handles operating system patching as part of the managed service.",
            "Physical and environmental controls of AWS data centers are AWS's responsibility."
        ]
    },

    {
        "question": "Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?",
        "answers": [
            "A. AWS WAF",
            "B. AWS Global Accelerator",
            "C. AWS Shield",
            "D. AWS Direct Connect"
        ],
        "correctAnswer": "B. AWS Global Accelerator",
        "explanation": "AWS Global Accelerator improves the availability and performance of applications by providing static IP addresses that route traffic to optimal endpoints across multiple AWS regions. It provides automatic failover between regions and Availability Zones within seconds, ensuring high availability.",
        "incorrectExplanations": [
            "AWS WAF is a web application firewall for protecting against common web exploits, not for failover capabilities.",
            "AWS Shield provides DDoS protection but doesn't provide failover capabilities for multi-region architectures.",
            "AWS Direct Connect provides dedicated network connectivity but doesn't provide automatic failover for applications."
        ]
    },

    {
        "question": "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
        "answers": [
            "A. AWS Auto Scaling",
            "B. Elastic Load Balancing",
            "C. Amazon Simple Queue Service (Amazon SQS)",
            "D. Amazon Kinesis Data Streams"
        ],
        "correctAnswer": "C. Amazon Simple Queue Service (Amazon SQS)",
        "explanation": "Amazon SQS is a fully managed message queuing service that enables applications to send, store, and receive messages between software components. It's ideal for decoupling and scaling microservices, distributed systems, and serverless applications by allowing them to communicate asynchronously.",
        "incorrectExplanations": [
            "AWS Auto Scaling automatically adjusts capacity but doesn't provide messaging capabilities between applications.",
            "Elastic Load Balancing distributes incoming traffic across multiple targets but doesn't provide inter-application messaging.",
            "Amazon Kinesis Data Streams is for real-time data streaming and analytics, not for simple application-to-application messaging."
        ]
    },

    {
        "question": "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
        "answers": [
            "A. Volume discounts",
            "B. A minimal additional fee for use",
            "C. One bill for multiple accounts",
            "D. Installment payment options",
            "E. Custom cost and usage budget creation"
        ],
        "correctAnswer": "A. Volume discounts and C. One bill for multiple accounts",
        "explanation": "Consolidated billing combines usage across multiple AWS accounts to qualify for volume discounts and provides a single bill for all accounts in an organization. Volume discounts apply when aggregate usage reaches higher tiers, and administrative overhead is reduced with one consolidated bill.",
        "incorrectExplanations": [
            "Consolidated billing is provided at no additional fee, not with a minimal fee.",
            "AWS doesn't offer installment payment options; billing is monthly based on usage.",
            "Budget creation is a separate feature available through AWS Budgets, not specifically a benefit of consolidated billing."
        ]
    },
    {
        "question": "What is the best resource for a user to find compliance-related information and reports about AWS?",
        "answers": [
            "A. AWS Artifact",
            "B. AWS Marketplace",
            "C. Amazon Inspector",
            "D. AWS Support"
        ],
        "correctAnswer": "A. AWS Artifact",
        "explanation": "AWS Artifact is the central resource for compliance-related information and provides on-demand access to AWS security and compliance documents, such as ISO certifications, PCI reports, SOC reports, and other compliance documentation. It's specifically designed for accessing AWS compliance reports and agreements.",
        "incorrectExplanations": [
            "AWS Marketplace is for finding and deploying software solutions, not compliance documentation.",
            "Amazon Inspector is a security assessment service for applications and infrastructure, not for accessing compliance reports.",
            "AWS Support provides technical assistance but AWS Artifact is the dedicated resource for compliance documentation."
        ]
    },

    {
        "question": "Which AWS service enables companies to deploy an application close to end users?",
        "answers": [
            "A. Amazon CloudFront",
            "B. AWS Auto Scaling",
            "C. AWS AppSync",
            "D. Amazon Route 53"
        ],
        "correctAnswer": "A. Amazon CloudFront",
        "explanation": "Amazon CloudFront is a content delivery network (CDN) that delivers content to users from edge locations around the world that are geographically close to them. This reduces latency and improves performance by serving content from the nearest edge location to the end user.",
        "incorrectExplanations": [
            "AWS Auto Scaling automatically adjusts capacity but doesn't deploy applications closer to users geographically.",
            "AWS AppSync is a managed GraphQL service for building APIs, not for geographic content distribution.",
            "Amazon Route 53 is a DNS service that routes traffic but doesn't cache or deliver application content close to users."
        ]
    },

    {
        "question": "Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?",
        "answers": [
            "A. Route table",
            "B. AWS Transit Gateway",
            "C. AWS Global Accelerator",
            "D. Amazon VPC"
        ],
        "correctAnswer": "C. AWS Global Accelerator",
        "explanation": "AWS Global Accelerator improves network performance by routing traffic through the AWS global network infrastructure using optimal paths. It provides static IP addresses that route to optimal endpoints and uses the AWS backbone network to improve performance and reliability.",
        "incorrectExplanations": [
            "Route tables control where network traffic is directed within a VPC but don't leverage the global AWS network for performance improvement.",
            "AWS Transit Gateway connects VPCs and on-premises networks but doesn't specifically optimize traffic through the global AWS network.",
            "Amazon VPC provides isolated network environments but doesn't inherently improve performance through global network routing."
        ]
    },

    {
        "question": "Which AWS service provides highly durable object storage?",
        "answers": [
            "A. Amazon S3",
            "B. Amazon Elastic File System (Amazon EFS)",
            "C. Amazon Elastic Block Store (Amazon EBS)",
            "D. Amazon FSx"
        ],
        "correctAnswer": "A. Amazon S3",
        "explanation": "Amazon S3 provides highly durable object storage with 99.999999999% (11 9's) durability. It automatically stores data across multiple devices in multiple Availability Zones and is designed to sustain the loss of data in multiple facilities simultaneously.",
        "incorrectExplanations": [
            "Amazon EFS provides file storage, not object storage, and while durable, it's not specifically designed for the same level of object durability as S3.",
            "Amazon EBS provides block storage for EC2 instances, not object storage.",
            "Amazon FSx provides file systems for specific use cases like Windows File Server or Lustre, not object storage."
        ]
    },

    {
        "question": "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
        "answers": [
            "A. Database backups",
            "B. Database software patches",
            "C. Operating system patches",
            "D. Operating system installations"
        ],
        "correctAnswer": "D. Operating system installations",
        "explanation": "When using EC2 instances, AWS is responsible for the underlying infrastructure including the initial operating system installation on the host hardware. However, customers are responsible for managing the guest operating system, including patches, updates, and database management.",
        "incorrectExplanations": [
            "Database backups are the customer's responsibility when self-managing databases on EC2.",
            "Database software patches are the customer's responsibility when self-managing databases on EC2.",
            "Operating system patches within the EC2 instance are the customer's responsibility."
        ]
    },

    {
        "question": "Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?",
        "answers": [
            "A. Security group",
            "B. AWS WAF",
            "C. AWS Firewall Manager",
            "D. Network ACL"
        ],
        "correctAnswer": "D. Network ACL",
        "explanation": "Network Access Control Lists (ACLs) act as subnet-level firewalls that control traffic going into and out of VPC subnets. They provide stateless filtering and can allow or deny traffic based on protocol, port, and source/destination IP addresses.",
        "incorrectExplanations": [
            "Security groups operate at the instance level, not the subnet level.",
            "AWS WAF is a web application firewall for protecting web applications from common exploits, not for general VPC subnet traffic control.",
            "AWS Firewall Manager is for centrally managing firewall rules across accounts and applications, but Network ACLs are the actual mechanism for subnet-level traffic control."
        ]
    },

    {
        "question": "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
        "answers": [
            "A. Amazon Aurora",
            "B. Amazon Redshift Serverless",
            "C. AWS Lambda",
            "D. Amazon RDS"
        ],
        "correctAnswer": "B. Amazon Redshift Serverless",
        "explanation": "Amazon Redshift Serverless allows you to run analytics workloads without managing data warehouse infrastructure. It automatically provisions and scales compute capacity based on your workload demands, eliminating the need to manage clusters or capacity planning.",
        "incorrectExplanations": [
            "Amazon Aurora is a relational database, not a data warehouse solution.",
            "AWS Lambda is for serverless compute functions, not data warehousing.",
            "Amazon RDS is for relational databases optimized for OLTP workloads, not data warehousing and analytics."
        ]
    },

    {
        "question": "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
        "answers": [
            "A. AWS charges the same prices for services in every AWS Region.",
            "B. AWS enables capacity to be adjusted on demand.",
            "C. AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.",
            "D. AWS does not charge for data sent from the AWS Cloud to the internet.",
            "E. AWS eliminates many of the costs of building and maintaining on-premises data centers."
        ],
        "correctAnswer": "B. AWS enables capacity to be adjusted on demand. and E. AWS eliminates many of the costs of building and maintaining on-premises data centers.",
        "explanation": "AWS reduces costs by allowing businesses to scale capacity up or down based on actual demand (eliminating overprovisioning costs) and by eliminating the capital and operational expenses of building and maintaining physical data centers including real estate, power, cooling, and hardware maintenance.",
        "incorrectExplanations": [
            "AWS pricing varies by region based on local costs and demand.",
            "AWS doesn't offer discounts for idle instances; instead, customers should terminate unused resources to save costs.",
            "AWS does charge for data transfer out to the internet (egress charges apply)."
        ]
    },

    {
        "question": "A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?",
        "answers": [
            "A. IAM group",
            "B. IAM role",
            "C. IAM tag",
            "D. IAM Access Analyzer"
        ],
        "correctAnswer": "B. IAM role",
        "explanation": "IAM roles enable cross-account access by allowing users in one AWS account to assume a role in another account and gain temporary credentials to access resources. This is the secure and recommended way to grant cross-account access without sharing long-term credentials.",
        "incorrectExplanations": [
            "IAM groups are for organizing users within the same account, not for cross-account access.",
            "IAM tags are for organizing and managing resources, not for granting access permissions.",
            "IAM Access Analyzer helps identify resources shared with external entities but doesn't grant access itself."
        ]
    },

    {
        "question": "Which task is the responsibility of AWS when using AWS services?",
        "answers": [
            "A. Management of IAM user permissions",
            "B. Creation of security group rules for outbound access",
            "C. Maintenance of physical and environmental controls",
            "D. Application of Amazon EC2 operating system patches"
        ],
        "correctAnswer": "C. Maintenance of physical and environmental controls",
        "explanation": "Under the AWS Shared Responsibility Model, AWS is responsible for the security 'of' the cloud, which includes physical and environmental controls of the data centers, such as power, cooling, physical access controls, and environmental monitoring.",
        "incorrectExplanations": [
            "Management of IAM user permissions is the customer's responsibility for controlling access to their resources.",
            "Creating security group rules is the customer's responsibility for configuring network access controls.",
            "Applying operating system patches within EC2 instances is the customer's responsibility when using EC2."
        ]
    },

    {
        "question": "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
        "answers": [
            "A. The ability to turn over the responsibility for all security to AWS.",
            "B. The ability to use the pay-as-you-go model.",
            "C. The ability to have full control over the physical infrastructure.",
            "D. No longer having to guess what capacity will be required.",
            "E. No longer worrying about users access controls."
        ],
        "correctAnswer": "B. The ability to use the pay-as-you-go model. and D. No longer having to guess what capacity will be required.",
        "explanation": "The pay-as-you-go model allows businesses to pay only for what they use without upfront investments. Cloud elasticity eliminates capacity guessing because resources can be scaled up or down based on actual demand, reducing waste and improving cost efficiency.",
        "incorrectExplanations": [
            "Security is a shared responsibility; customers cannot turn over all security responsibility to AWS.",
            "In the cloud, you don't have control over physical infrastructure - that's managed by AWS.",
            "User access controls remain a customer responsibility and are actually more important in cloud environments."
        ]
    },

    {
        "question": "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
        "answers": [
            "A. AWS DataSync",
            "B. Amazon S3 Glacier",
            "C. AWS Storage Gateway",
            "D. Amazon Elastic Block Store (Amazon EBS)"
        ],
        "correctAnswer": "C. AWS Storage Gateway",
        "explanation": "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments to AWS cloud storage services like S3, providing seamless integration between on-premises and cloud storage with virtually unlimited capacity.",
        "incorrectExplanations": [
            "AWS DataSync is for one-time or scheduled data transfer between on-premises and AWS, not ongoing hybrid storage access.",
            "Amazon S3 Glacier is a cloud-based archival storage service, not a hybrid solution for on-premises access.",
            "Amazon EBS provides block storage for EC2 instances and is not a hybrid storage solution."
        ]
    },

    {
        "question": "A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?",
        "answers": [
            "A. AWS Pricing Calculator",
            "B. Amazon CloudWatch",
            "C. AWS Cost Explorer",
            "D. AWS Budgets"
        ],
        "correctAnswer": "A. AWS Pricing Calculator",
        "explanation": "AWS Pricing Calculator is specifically designed to help estimate costs for AWS services before migration or deployment. It allows you to model different use cases and configurations to get accurate cost estimates for planning purposes.",
        "incorrectExplanations": [
            "Amazon CloudWatch is for monitoring and observability, not cost estimation.",
            "AWS Cost Explorer analyzes historical costs and usage, not for creating estimates for future use cases.",
            "AWS Budgets is for setting spending limits and alerts, not for creating initial cost estimates."
        ]
    },

    {
        "question": "Which tool should a developer use to integrate AWS service features directly into an application?",
        "answers": [
            "A. AWS Software Development Kit",
            "B. AWS CodeDeploy",
            "C. AWS Lambda",
            "D. AWS Batch"
        ],
        "correctAnswer": "A. AWS Software Development Kit",
        "explanation": "AWS Software Development Kits (SDKs) provide libraries, code samples, and documentation that allow developers to integrate AWS service features directly into their applications using various programming languages like Python, Java, JavaScript, and others.",
        "incorrectExplanations": [
            "AWS CodeDeploy is for automating application deployments, not for integrating AWS services into application code.",
            "AWS Lambda is a serverless compute service, not a tool for integrating AWS services into applications.",
            "AWS Batch is for running batch computing workloads, not for application integration."
        ]
    },

    {
        "question": "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
        "answers": [
            "A. restricted access.",
            "B. as-needed access.",
            "C. least privilege access.",
            "D. token access."
        ],
        "correctAnswer": "C. least privilege access.",
        "explanation": "The principle of least privilege is a fundamental security concept that means granting users only the minimum permissions necessary to perform their job functions. This reduces security risks by limiting potential damage from compromised accounts or insider threats.",
        "incorrectExplanations": [
            "Restricted access is too general and doesn't specifically describe the principle of granting minimal necessary permissions.",
            "As-needed access could imply temporary access but doesn't capture the concept of minimal permissions.",
            "Token access refers to authentication mechanisms, not the principle of minimal permissions."
        ]
    }

];