variable "bucket_name" {
  type        = string
  description = "Name of the bucket for frontend app"
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

variable "is_public" {
  type        = bool
  description = "Whether the bucket must be public or not"

  default = false
}
