In JavaScript, every object can have a hidden property called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf(obj)), which points to another object. That object is called its prototype.

If you try to access a property or method that doesn’t exist on the object itself, JavaScript automatically looks up the prototype chain to find it.