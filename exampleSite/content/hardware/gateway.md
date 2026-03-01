---
title: "gateway"
role: "Router / Firewall"
status: "online"
platform: "opnsense"

cpu_model: "Intel Celeron J4125"
cpu_cores: 4
cpu_threads: 4

ram_amount: "8 GB"
ram_type: "DDR4 SODIMM"
ram_slots_used: 1
ram_slots_total: 2

storage:
  - label: "Boot"
    drives: "1 × 64 GB eMMC"
    config: "Single"

nics:
  - "re0 — 1 GbE (LAN trunk: VLAN 10, 20, 30)"
  - "re1 — 1 GbE (WAN)"

upgrades:
  - item: "NICs"
    note: "Realtek NICs are functional but Intel i210/i225 would be more reliable under sustained load."
    priority: "low"
---

OPNsense on a mini PC. Handles routing, firewall, and VLAN segmentation for the home network.
