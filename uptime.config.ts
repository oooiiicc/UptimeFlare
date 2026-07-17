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
      id: 'gh-oooiii',
      name: 'gh.oooiii.cc',
      method: 'GET',
      target: 'https://gh.oooiii.cc',
      expectedCodes: [200],
      timeout: 15000,
    },
    {
      id: 'ca-oooiii',
      name: 'ca.oooiii.cc',
      method: 'TCP_PING',
      target: '198.200.42.49:22',
      tooltip: 'California server SSH',
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
