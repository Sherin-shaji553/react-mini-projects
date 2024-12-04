import React, { useState } from 'react';

const Statestudy = () => {
    const [showCounter, setShowCounter] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="bg-dark d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f4f4f9' }}>
            <h1 className="text-center mt-5" style={{ color: '#4CAF50', fontFamily: 'Arial, sans-serif' }}>COUNTER APP</h1>
            
            <button 
                className="btn btn-primary" 
                onClick={() => setShowCounter(!showCounter)}
                style={{
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    marginBottom: '20px', 
                    borderRadius: '8px', 
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>

            {showCounter && (
                <div className="text-center">
                    <h1 style={{ fontSize: '48px', color: 'white' }}>{count}</h1>
                    <div>
                        <button 
                            className='btn btn-warning' 
                            onClick={() => setCount(count + 1)}
                            style={{
                                padding: '10px 20px', 
                                fontSize: '16px', 
                                borderRadius: '8px', 
                                marginRight: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#ffc107'}
                        >
                            Increment Counter
                        </button>
                        <button 
                            className='btn btn-danger' 
                            onClick={() => setCount(count - 1)}
                            style={{
                                padding: '10px 20px', 
                                fontSize: '16px', 
                                borderRadius: '8px', 
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                        >
                            Decrement Counter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Statestudy;
