import React, { useState, useEffect } from 'react'

const SingleColor = ({ weight, type, rgbString, hexString }) => {
  const [ copiedColor, setCopiedColor ] = useState("")

  const copyText = () => navigator.clipboard.writeText(copiedColor)

  const handleClick = e => {
    const color = e.target.children[ 1 ].innerText
    setCopiedColor(color)

    alert(`Color ${color} copied!`)
  }

  useEffect(() => {
    copyText()
  }, [ copiedColor ])

  const styles = type === "shade" ? "color color-light" : "color false"

  return (
    <article className={styles} style={{ backgroundColor: rgbString }} onClick={handleClick}>
      <p className='percent-value'>{weight} %</p>
      <p className="color-value">{hexString}</p>
    </article>
  )
}
export default SingleColor
