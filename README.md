<div style='display: flex;align-items: center;justify-content: center'>
<img src='https://svgshare.com/i/jfX.svg' alt=''/>
</div> 

# Frequently used hooks for React

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


## useSessionStorage

```javascript
import {useSessionStorage} from '@npm.piece/hooks'
```

```javascript
const { get, set } = useSessionStorage('item')
set({key:"value"})
get()
```

## useLocalStorage

```javascript
import {useLocalStorage} from '@npm.piece/hooks'
```

```javascript
const { get, set } = useLocalStorage('item')
set({key:"value"})
get()
```

## usePortraitDetect

```javascript
import {usePortraitDetect} from '@npm.piece/hooks'
```

```javascript
const isPortrait = usePortraitDetect()
```

## useOnlineDetect

```javascript
import {useOnlineDetect} from '@npm.piece/hooks'
```

```javascript
const isOnline = useOnlineDetect()
```
