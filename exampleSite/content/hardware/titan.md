---
title: "titan"
role: "Proxmox VE Hypervisor"
status: "online"
platform: "proxmox"

cpu_model: "Intel Xeon E-2278G"
cpu_cores: 8
cpu_threads: 16

ram_amount: "64 GB"
ram_type: "DDR4 ECC"
ram_slots_used: 4
ram_slots_total: 4

storage:
  - label: "OS"
    drives: "2 × 480 GB SSD"
    config: "RAID 1"
  - label: "VMs"
    drives: "4 × 4 TB HDD"
    config: "RAID 10"

nics:
  - "2 × 10 GbE (Intel X550)"
  - "1 × 1 GbE IPMI"

upgrades:
  - item: "RAM"
    note: "All 4 slots used. Replace 4 × 16 GB with 4 × 32 GB to reach 128 GB max."
    priority: "low"

vms:
  - name: "web-prod"
    vmid: 100
    type: "vm"
    role: "Web / Reverse Proxy"
    cores: 4
    ram: "8 GB"
    disk: "32 GB"
    status: "running"
    ip: "10.0.10.100"
  - name: "db-prod"
    vmid: 101
    type: "vm"
    role: "PostgreSQL Database"
    cores: 4
    ram: "16 GB"
    disk: "120 GB"
    status: "running"
    ip: "10.0.10.101"
  - name: "monitoring"
    vmid: 102
    type: "vm"
    role: "Grafana / Prometheus"
    cores: 2
    ram: "4 GB"
    disk: "40 GB"
    status: "running"
    ip: "10.0.10.102"
  - name: "pihole"
    vmid: 110
    type: "lxc"
    role: "DNS / Ad Blocker"
    cores: 2
    ram: "512 MB"
    disk: "4 GB"
    status: "running"
    ip: "10.0.10.10"
---

Primary hypervisor. Handles all production workloads. Running Proxmox VE 8.x on Debian 12.
