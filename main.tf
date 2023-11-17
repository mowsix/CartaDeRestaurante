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
  region  = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-053b0d53c279acc90"
  instance_type = "t2.micro"
  vpc_security_group_ids = ["sg-08f9c2c69057b8267"]
  associate_public_ip_address = true

  provisioner "local-exec"{
    command = "sudo ./script.sh"
    interpreter = [ "*/bin/bash", "-c"]
  }
  tags = {
    Name = "SantiagoGallego"
  }
}
