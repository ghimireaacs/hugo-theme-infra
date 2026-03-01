---
title: "vault"
role: "NAS / Primary Storage"
status: "online"
platform: "truenas"

cpu_model: "Intel Core i3-12100"
cpu_cores: 4
cpu_threads: 8

ram_amount: "32 GB"
ram_type: "DDR4 ECC"
ram_slots_used: 2
ram_slots_total: 4

storage:
  - label: "Boot"
    drives: "1 × 256 GB SSD"
    config: "Single"
  - label: "tank"
    drives: "4 × 8 TB HDD (Seagate IronWolf)"
    config: "RAIDZ1"

nics:
  - "1 × 10 GbE (Intel X550-T1)"
  - "1 × 1 GbE (onboard)"

upgrades:
  - item: "RAM"
    note: "2 free slots — can expand to 64 GB for larger ZFS ARC cache."
    priority: "medium"
  - item: "Boot drive redundancy"
    note: "Single SSD for boot pool. Mirror it for peace of mind."
    priority: "low"
---

TrueNAS SCALE. Hosts the main ZFS pool `tank` (~18 TB usable). Serves NFS and SMB shares across the network. Datasets: `media`, `backups`, `nextcloud`, `k8s`.
