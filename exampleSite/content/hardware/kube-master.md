---
title: "kube-master"
role: "k3s Master Node"
status: "online"
platform: "k3s"

cpu_model: "Intel Core i5-1235U"
cpu_cores: 10
cpu_threads: 12

ram_amount: "16 GB"
ram_type: "DDR4-3200 SODIMM"
ram_slots_used: 1
ram_slots_total: 2

storage:
  - label: "OS"
    drives: "1 × 512 GB NVMe"
    config: "Single"

nics:
  - "2 × 2.5 GbE (Intel i225)"

upgrades:
  - item: "RAM"
    note: "One slot free — add a matching 16 GB stick to reach 32 GB."
    priority: "medium"

cluster_nodes:
  - name: "kube-master"
    role: "Master"
    host: "kube-master (bare metal)"
  - name: "kube-worker-1"
    role: "Worker"
    vmid: 100
    host: "titan"
    host_link: "/hardware/titan"
  - name: "kube-worker-2"
    role: "Worker"
    vmid: 200
    host: "spare"
    host_link: "/hardware/spare"
---

Mini PC running k3s. Flannel CNI. NFS persistent volumes backed by `vault`.
