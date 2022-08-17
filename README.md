<div style='display: flex;align-items: center;justify-content: center'>
<img src='https://svgshare.com/i/jfX.svg' alt=''/>
</div> 

# Аrequently used hooks for React

## useDebounce (with lodash)

```javascript
import {useDebounce} from '@npm.piece/hooks'
```

```javascript
const log = useDebounce((params) => console.log(params), 1000);

log("123")
```

## useThrottle (with lodash)

```javascript
import {useThrottle} from '@npm.piece/hooks'
```

```javascript
const log = useThrottle((params) => console.log(params), 1000);

log("123")
```

## useEffectWithoutFirstCall

```javascript
import {useEffectWithoutFirstCall} from '@npm.piece/hooks'
```

```javascript
useEffectWithoutFirstCall(() => {}, []);
```

