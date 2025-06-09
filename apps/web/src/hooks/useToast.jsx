
import { createContext, useState, useContext, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, options = {}) => {
    const {
      type = 'info',
      duration = 3000,
      position = 'bottom-right'
    } = options;
    
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, position }]);
    
    if (duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed z-50">
        {['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].map((position) => (
          <div 
            key={position}
            className={`fixed ${positionClasses[position]}`}
          >
            {toasts
              .filter((toast) => toast.position === position)
              .map((toast) => (
                <Toast 
                  key={toast.id} 
                  {...toast} 
                  onClose={() => removeToast(toast.id)} 
                />
              ))}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const positionClasses = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

const Toast = ({ message, type, onClose }) => {
  const typeClasses = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div 
      className={`${typeClasses[type]} text-white px-4 py-3 rounded-md shadow-lg mb-2 flex items-center justify-between min-w-[250px] animate-fade-in`}
    >
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};