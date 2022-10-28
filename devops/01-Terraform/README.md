# Terraform

### What it is?
- The best `IAC`(Infra As Code) software out there
- Developed by Hashicorp with Go, and it is easy to install
- Used `HCL` instead of `yaml` or `json` and this is one of advantages of it over `cloudformation`(AWS)
- Huge community for fixing and implementing new features and services
- It is used to configure almost all infrastructure while cloudformation is used only for AWS
- `Chef` and `Puppet`, are different, they are designed to configure software that is running on machine not machine itself

### Installation
Follow guides from https://www.terraform.io/

### AWS account
Head over to https://aws.amazon.com/ 


### Syntax

```provider
provider "aws"[NAME] {
	profile		= "default"
	region		= "us-west-2"
}

resource "aws_s3_bucket"[TYPE] "tf-test-s3"[NAME] {
	bucket 		= "sayjeyhi-s3-teffaform-2022" [PARAMETER NAMING]
	acl				= "private" [ACCESS]
} 

```
