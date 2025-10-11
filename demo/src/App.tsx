import { useState, useEffect, useRef } from "react";
import { useSmartNumpad } from "react-smart-numpad";
import "./App.css";

function App() {
    const [commaDecimal, setCommaDecimal] = useState(false);
    const { value, onChange, onKeyDown } = useSmartNumpad("", { commaDecimal });

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>smart-numpad Demo</h2>
                <p>Try typing with NumLock off — it will still type numbers!</p>

                <div className="toggle-container">
                    <label>
                        <input
                            type="checkbox"
                            checked={commaDecimal}
                            onChange={() => setCommaDecimal((prev) => !prev)}
                        />
                        <span className="slider"></span>
                        Use comma as decimal
                    </label>
                </div>

                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </header>
        </div>
    );
}

export default App;
