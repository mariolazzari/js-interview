// Type helper
const typeOf = input => {
  const rawObj = Object.prototype.toString.call(input).toLowerCase();
  const type = /\[object (.*)]/.exec(rawObj)[1];
  return type;
};

// Shallow comparison
const shallowCompare = (source, target) => {
  const typeSrc = typeOf(source);
  const typeTgt = typeOf(target);

  // Different types → not equal
  if (typeSrc !== typeTgt) return false;

  // For primitives → rely on ===
  if (typeSrc !== "object" && typeSrc !== "array") {
    return source === target;
  }

  // Handle arrays
  if (typeSrc === "array") {
    if (source.length !== target.length) return false;

    for (let i = 0; i < source.length; i++) {
      if (source[i] !== target[i]) return false;
    }

    return true;
  }

  // Handle objects
  if (typeSrc === "object") {
    const srcKeys = Object.keys(source);
    const tgtKeys = Object.keys(target);

    if (srcKeys.length !== tgtKeys.length) return false;

    for (const key of srcKeys) {
      if (!target.hasOwnProperty(key)) return false;
      if (source[key] !== target[key]) return false;
    }

    return true;
  }

  // Fallback (should not be reached)
  return false;
};

shallowCompare(5, 5); // true
shallowCompare([1, 2], [1, 2]); // true
shallowCompare([1, 2], [2, 1]); // false
shallowCompare({ a: 1 }, { a: 1 }); // true
shallowCompare({ a: 1 }, { a: 2 }); // false
shallowCompare({ a: 1 }, { b: 1 }); // false
