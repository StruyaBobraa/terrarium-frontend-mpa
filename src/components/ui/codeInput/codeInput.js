import React, { useState, useRef, useEffect } from 'react';
import classes from './codeInput.module.scss'

const CodeInput = ({ length = 4, onComplete, onChange }) => {
  const [code, setCode] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (onChange) {
      onChange(newCode.join(''));
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const fullCode = newCode.join('');
    if (fullCode.length === length && onComplete) {
      onComplete(fullCode);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split('').concat(Array(length).fill('')).slice(0, length);
      setCode(newCode);
      
      if (onChange) {
        onChange(newCode.join(''));
      }
      
      const lastFilledIndex = Math.min(pastedData.length, length) - 1;
      inputRefs.current[lastFilledIndex]?.focus();
      
      if (pastedData.length === length && onComplete) {
        onComplete(pastedData);
      }
    }
  };

  return (
    <div className={classes.Wrapper}>
      {code.map((digit, index) => (
        <div key={index} className="relative">
          <input
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            aria-label={`Цифра ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CodeInput;