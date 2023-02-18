# Bucket to store website
resource "google_storage_bucket" "static_site" {
  name          = var.bucket_name
  location      = var.bucket_location
  force_destroy = true

  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }

  cors {
    origin          = var.cors_allowed_domains
    method          = var.cors_allowed_methods
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

# Give access
resource "google_storage_bucket_iam_binding" "static_site_policy" {
  bucket  = google_storage_bucket.static_site.id
  role    = "roles/storage.legacyObjectReader"
  members = ["allUsers"]
}
