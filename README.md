# react-smart-numpad

Did it ever occur to you to have to type out numbers into some online form, and before realizing that your NumLock was disabled, the UI starts jumping around, switching to different input fields and everything gets messed up ? 

Yeah, really annoying I know. **This package fixes that.**

Just think of it like a small UX enhancement to your existing UI.

## Quick start
~~~tsx
import { useSmartNumpad } from 'react-smart-numpad';

const { value, onChange, onKeyDown } = useSmartNumpad();
<input value={value} onChange={onChange} onKeyDown={onKeyDown} />;
~~~

For more control, the handler can also be used directly:

~~~tsx
import { handleSmartNumpadKeyDown } from 'react-smart-numpad';

const [value, setValue] = useState('');
<input onKeyDown={(e) => handleSmartNumpadKeyDown(e, setValue)} />;
~~~

### Optional: Comma decimal separator

By default, the decimal character "." is used for the decimal separator right next to 0 on the NumPad. You can override this to use "," instead, by setting the option _commaDecimal_ to **true** (used in most european countries).

Using the React Hook:
~~~tsx
useSmartNumpad('<initial value>', { commaDecimal: true });
~~~

Using the handler directly:

~~~tsx
onKeyDown={(e) =>
    handleSmartNumpadKeyDown(e, setValue, { commaDecimal: true })
}
~~~
