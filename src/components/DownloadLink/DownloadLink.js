import React, { useState, useEffect } from 'react'
import jsoncsv from 'json-csv'

import fieldConfig from './fieldConfig.json'

const DownloadLink = ({data}) => {
  const [ downloadUrl, setDownloadUrl ] = useState('')

  useEffect(() => {
    const createDownloadUrl = async () => {
      const csv = await jsoncsv.buffered(data, fieldConfig)
      const csvBlob = new Blob([csv], {type: 'text/csv'})
      const csvUrl = URL.createObjectURL(csvBlob)
      setDownloadUrl(csvUrl)

      return () => URL.revokeObjectURL(csvUrl)}
      createDownloadUrl()
  }, [ data ] )

  return <a href={downloadUrl} download={ downloadUrl }>Download CSV</a>
}

export {
  DownloadLink
}