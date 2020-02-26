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
    {
      fileName: 'next_scrim.json',
      url:
        'https://script.google.com/macros/s/AKfycbwOkwCt2nIyKLpJnR68Unl6UuovCEFevEZQ-ZPIjpdMhbCA9dnd/exec',
    },
    {
      fileName: 'stats.json',
      url:
        'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec',
    },
    {
      fileName: 'news.json',
      url:
        'https://script.google.com/macros/s/AKfycbzdg3_jf8jj5mwNYRmz8rVJ7JuVjCwhCmY7MTH0LBrmRD-4tKM/exec',
    },
  ]

  for (let i = 0; i < data.length; i++) {
    const res = await axios.get(data[i].url)

    const filePath = outputFileDir + data[i].fileName
    fse.outputFile(filePath, JSON.stringify(res.data))
  }
}
