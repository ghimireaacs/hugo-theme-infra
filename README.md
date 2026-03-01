# Infra

A dark Hugo theme for tracking homelab hardware. Each server gets its own page with specs, RAM slots, storage pools, upgrade notes, and — for Proxmox hosts — a list of the VMs running on it.

---

## Getting started

```toml
# hugo.toml
theme = "infra"

[taxonomies]

[markup.goldmark.renderer]
  unsafe = true
```

The empty `[taxonomies]` block turns off Hugo's default tag/category pages, which have no layout in this theme.

```bash
hugo new hardware/my-server.md
hugo server
```

---

## A server page

`hugo new hardware/my-server.md` drops a pre-filled template. The fields:

```yaml
title: "hostname"
role: "Proxmox VE Hypervisor"
status: "online"          # online | offline | maintenance
platform: "proxmox"       # proxmox | truenas | k3s | opnsense

cpu_model: "AMD Ryzen 5 3600"
cpu_cores: 6
cpu_threads: 12

ram_amount: "32 GB"
ram_type: "DDR4"
ram_slots_used: 2
ram_slots_total: 4        # drives the slot bar visual — set 0 to hide it

storage:
  - label: "OS"
    drives: "1 × 480 GB SSD"
    config: "LVM"          # shown as a tag

nics:
  - "1 × 1 GbE (Realtek)"

upgrades:
  - item: "RAM"
    note: "2 free slots, can expand to 64 GB."
    priority: "medium"     # high | medium | low
```

Body text below the frontmatter becomes the Notes section.

---

## Proxmox hosts — listing VMs

```yaml
vms:
  - name: "myvm"
    vmid: 100
    type: "vm"             # vm | lxc
    role: "Web Server"
    cores: 4
    ram: "8 GB"
    disk: "32 GB"
    status: "running"      # running | stopped
    ip: "10.0.0.100"       # optional
```

---

## Kubernetes / k3s hosts — listing cluster nodes

```yaml
cluster_nodes:
  - name: "master"
    role: "Master"
    host: "master (bare metal)"
  - name: "worker-1"
    role: "Worker"
    vmid: 100
    host: "proxmox-host"
    host_link: "/hardware/proxmox-host"
```

Workers link back to the Proxmox host hardware page they live on.

---

## Platform colors

The `platform` field adds a color accent to cards and sidebar nav items.

| Value | Color |
|-------|-------|
| `proxmox` | Orange |
| `truenas` | Blue |
| `k3s` | Yellow |
| `opnsense` | Burnt orange |

---

## Running

```bash
hugo server          # dev, live reload
hugo --minify        # build to /public
```

---

## Docker

Both a `docker-compose.yml` and a `Dockerfile` are included in the theme.

**Live editing** — edits to `content/` are picked up instantly, no rebuild needed. Copy `docker-compose.yml` to your project root and run:

```bash
docker compose up -d
```

**Static build** — Hugo builds once, nginx serves the output. Copy `Dockerfile` to your project root:

```bash
docker build -t infra-hub .
docker run -d -p 1313:80 infra-hub
```

For most homelab setups the compose approach is more practical — edit a markdown file, site updates immediately.

---

## Demo hosting

An `exampleSite/` is included. You can host a live demo without any extra setup.

**Netlify** — connect the repo and it picks up `netlify.toml` automatically. Done.

**GitHub Pages** — the `.github/workflows/deploy.yml` workflow builds the exampleSite and deploys on every push to `main`. Enable Pages in your repo settings (Source: GitHub Actions) and push.

---

MIT License
