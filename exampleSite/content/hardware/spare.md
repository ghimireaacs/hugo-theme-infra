---
title: "spare"
role: "Proxmox VE Node"
status: "maintenance"
platform: "proxmox"

cpu_model: "AMD Ryzen 5 5600G"
cpu_cores: 6
cpu_threads: 12

ram_amount: "16 GB"
ram_type: "DDR4-3200"
ram_slots_used: 2
ram_slots_total: 4

storage:
  - label: "OS"
    drives: "1 × 256 GB SSD"
    config: "LVM"

nics:
  - "1 × 1 GbE (Realtek, onboard)"

upgrades:
  - item: "RAM"
    note: "2 free slots — easy expansion to 32 GB or 64 GB."
    priority: "medium"
  - item: "Network"
    note: "Single 1 GbE is limiting. Add a PCIe 2.5 GbE card."
    priority: "high"
  - item: "Storage"
    note: "No bulk storage attached. Add drives or connect to NAS for VM disk pools."
    priority: "high"

vms:
  - name: "kube-worker-2"
    vmid: 200
    type: "vm"
    role: "k3s Worker"
    cores: 4
    ram: "8 GB"
    disk: "60 GB"
    status: "running"
---

Secondary Proxmox node. Currently in maintenance — network upgrade in progress.
