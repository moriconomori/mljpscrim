import axios from 'axios'
import fse from 'fs-extra'

export default async function() {
  const outputFileDir = './assets/json/'
  const data = [
    {
      fileName: 'teams.json',
      url:
        'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec',
    },
    {
      fileName: 'team.json',
      url:
        'https://script.google.com/macros/s/AKfycbxlbEeWkJtQJaEIbKuuudYHcSXv_MmKSDK1zewcmNU_gwKyg5Y/exec',
    },
  ]

  for (let i = 0; i < data.length; i++) {
    const res = await axios.get(data[i].url)

    const filePath = outputFileDir + data[i].fileName
    fse.outputFile(filePath, JSON.stringify(res.data))
  }
}
