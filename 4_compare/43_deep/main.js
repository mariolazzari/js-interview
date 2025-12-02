// Design a deep comparison function
// Type helper
const typeOf = input => {
  const rawObj = Object.prototype.toString.call(input).toLowerCase();
  return /\[object (.*)]/.exec(rawObj)[1];
};

// Deep comparison
const deepCompare = (a, b) => {
  const typeA = typeOf(a);
  const typeB = typeOf(b);

  // Type mismatch → not equal
  if (typeA !== typeB) return false;

  // Primitive values
  if (
    typeA !== "object" &&
    typeA !== "array" &&
    typeA !== "date" &&
    typeA !== "regexp" &&
    typeA !== "map" &&
    typeA !== "set"
  ) {
    return a === b;
  }

  // Date → compare timestamps
  if (typeA === "date") return a.getTime() === b.getTime();

  // RegExp → compare pattern + flags
  if (typeA === "regexp") return a.toString() === b.toString();

  // Array → compare length + deep items
  if (typeA === "array") {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepCompare(a[i], b[i])) return false;
    }
    return true;
  }

  // Map → compare size + entries
  if (typeA === "map") {
    if (a.size !== b.size) return false;
    for (const [key, val] of a.entries()) {
      if (!b.has(key)) return false;
      if (!deepCompare(val, b.get(key))) return false;
    }
    return true;
  }

  // Set → compare size + content
  if (typeA === "set") {
    if (a.size !== b.size) return false;
    for (const val of a.values()) {
      if (!b.has(val)) return false;
    }
    return true;
  }

  // Object → compare keys + deep values
  if (typeA === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!deepCompare(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};
