const ComponentWithSpinner = () => {
    const spinnerStyles = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const spinnerStyle = {
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderTop: '4px solid #767676',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
    };

    return (
        <div style={spinnerStyles}>
            <div style={spinnerStyle}></div>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default ComponentWithSpinner;