resource "cloudflare_record" "cloud_records" {
  for_each = { for record in var.cloud_records : record.name => record }

  zone_id = "90c40ed5c9943fdcd04e67d171af701a"
  type    = each.value.type
  name    = each.value.name
  value   = each.value.value
  ttl     = 1
  proxied = true
}
