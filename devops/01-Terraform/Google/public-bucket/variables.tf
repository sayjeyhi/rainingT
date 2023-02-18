variable "bucket_name" {
  type        = string
  description = "Name of the bucket for frontend app"

  default = "static-site"
}

variable "bucket_location" {
  type        = string
  description = "Bucket location"

  default = "EU"
}

variable "bucket_storage_class" {
  type        = string
  description = "Bucket storage class"

  default = "STANDARD"
}

variable "cors_allowed_domains" {
  type        = list(string)
  description = "List of allowed domains"

  default = ["*"]
}

variable "cors_allowed_methods" {
  type        = list(string)
  description = "List of allowed HTTP methods"

  default = ["GET", "HEAD", "PUT", "POST", "DELETE"]
}
