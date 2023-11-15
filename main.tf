terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region     = "us-east-1"
  access_key = "ASIARMWZPIP7KVXPSGNM"
  secret_key = "rbgNIT0CP/KDlJjTCpA10dvGF32wC4iAOfyPT2cI"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0fc5d935ebf8bc3bc"
  instance_type = "t2.micro"

  tags = {
    Name = "EjemploIaCSalon"
  }
}