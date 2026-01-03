'use client'

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
      {process.env.NODE_ENV === 'development' && error && (
        <pre style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          overflow: 'auto',
          maxWidth: '800px',
          textAlign: 'left'
        }}>
          {error.message}
          {error.stack}
        </pre>
      )}
    </div>
  )
}

