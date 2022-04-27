import { readFileSync } from 'fs'

export const getVersion = () => {
  const packageJsonFile = readFileSync(new URL('../package.json', import.meta.url))

  const parsedPackageJsonFile = JSON.parse(packageJsonFile)

  return parsedPackageJsonFile.version
}
