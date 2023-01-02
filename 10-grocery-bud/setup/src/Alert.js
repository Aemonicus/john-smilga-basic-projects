import React, { useEffect } from 'react'

const Alert = ({ type, message }) => {
  const styles = type === "error" ? "alert alert-danger" : "alert alert-success"
  return <p className={styles}>{message}</p>
}

export default Alert
