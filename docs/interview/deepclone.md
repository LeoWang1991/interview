---
outline: deep
---

### 最简单的深拷贝
```javascript
function cloneDeep(target) {
  return JSON.parse(JSON.stringify(target))
}
```

### 复杂的深拷贝
```javascript
function cloneDeep(target) {
  if (typeof target!== 'object' || target === null) {
    return target
  }

  let cloneTarget = Array.isArray(target)? [] : {}

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = cloneDeep(target[key])
    }
  }

  return cloneTarget
}
```
