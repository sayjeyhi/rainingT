resource "google_storage_bucket" "storage" {
  name          = var.bucket_name
  location      = var.bucket_location
  force_destroy = true

  uniform_bucket_level_access = true
}

resource "google_storage_bucket_iam_binding" "storage_policy" {
  count = var.is_public ? 1 : 0

  bucket  = google_storage_bucket.storage.id
  role    = "roles/storage.legacyObjectReader"
  members = ["allUsers"]
}
