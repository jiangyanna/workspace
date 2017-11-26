const obj = {
    get foo() {},
    set foo(x) {}
  };
  
  //obj.foo.name
  // TypeError: Cannot read property 'name' of undefined
  
  const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
 console.log(descriptor.get.name); // "get foo"
console.log(descriptor.set.name );
