variable "cloud_records" {
  type = list(object({
    name  = string
    type  = string
    value = string
  }))
}
