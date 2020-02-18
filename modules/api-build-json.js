import axios from 'axios'
import fse from 'fs-extra'

export default async function() {
  const outputFile = './assets/json/teams.json'

  const res = await axios.get(
    'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec'
  )

  fse.outputFile(outputFile, JSON.stringify(res.data))
}
