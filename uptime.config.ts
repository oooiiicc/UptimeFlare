// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "oooiii's Status Page",
  links: [
    { link: 'https://github.com/oooiiicc', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 't-oooiii',
      name: 't.oooiii.cc',
      method: 'GET',
      target: 'https://t.oooiii.cc',
      expectedCodes: [200, 301, 302],
      timeout: 15000,
    },
    {
      id: 'v-oooiii',
      name: 'v.oooiii.cc',
      method: 'GET',
      target: 'https://v.oooiii.cc',
      expectedCodes: [200, 301, 302],
      timeout: 15000,
    },
    {
      id: 'nodewarden',
      name: 'NodeWarden',
      method: 'GET',
      target: 'https://nw.oooiii.workers.dev',
      expectedCodes: [200, 301, 302],
      timeout: 15000,
    },
    {
      id: 'hk-server',
      name: 'HK Server Ping',
      method: 'TCP_PING',
      target: '45.144.137.211:38081',
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
