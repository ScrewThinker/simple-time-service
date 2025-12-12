variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "project_name" {
  type    = string
  default = "simple-time-service"
}

variable "container_image" {
  type    = string
  default = "screwthinker/simple-time-service:latest"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}
