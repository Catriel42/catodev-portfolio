# Thoughts on Angular 21

Angular 21 is a massive step forward for the framework.

**Signals** have completely changed how I think about reactivity and state management. The fact that the entire application can be zoneless is mind-blowing.

``` typescript
import { signal, computed } from '@angular/core';

const count = signal(0);
const double = computed(() => count() * 2);

console.log(double()); // 0
count.set(1);
console.log(double()); // 2
```

It is just fantastic. I can't wait to see what comes next.
